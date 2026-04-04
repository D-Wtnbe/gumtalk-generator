import { GoogleApis, google } from "googleapis";
import { GoogleTrendContent, GoogleTrendContentSchema } from "interfaces/sheet";

// 環境変数の厳密なチェック
const assertEnvironmentVariables = () => {
  const requiredEnvVars = [
    "GCP_SERVICEACCOUNT_EMAIL",
    "GCP_SERVICEACCOUNT_PRIVATE_KEY",
    "SHEET_ID",
  ];
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`必要な環境変数 ${envVar} が設定されていません。`);
    }
  }
};

let sheetsClient: ReturnType<typeof google.sheets> | null = null;

const getSheetsClient = () => {
  if (sheetsClient) {
    return sheetsClient;
  }

  assertEnvironmentVariables();

  const googleapis = new GoogleApis();
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const jwt = new googleapis.auth.JWT({
    email: process.env.GCP_SERVICEACCOUNT_EMAIL,
    key: (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes,
  });

  sheetsClient = google.sheets({ version: "v4", auth: jwt });
  return sheetsClient;
};

const SHEET_RANGE_TREND = "trend";

export const getGoogleTrendContents = async (): Promise<GoogleTrendContent[]> => {
  try {
    const sheets = getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: SHEET_RANGE_TREND,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    // ヘッダー行を除外し、Zodでバリデーション
    const contents: GoogleTrendContent[] = rows
      .slice(1)
      .map((row) => {
        const parsed = GoogleTrendContentSchema.safeParse({
          date: row[0] || "",
          content: row[1] || "",
          newsTitle: row[2] || null,
          newsLink: row[3] || null,
        });

        // 成功し、かつ必須の項目が空文字でないことを確認
        if (parsed.success && parsed.data.date && parsed.data.content) {
          return parsed.data;
        }
        return null;
      })
      .filter((item): item is GoogleTrendContent => item !== null);

    return contents;
  } catch (error) {
    console.error("GoogleTrendContentsの取得中にエラーが発生しました:", error);
    return []; // 例外発生時はフォールバックとして空配列を返す
  }
};
