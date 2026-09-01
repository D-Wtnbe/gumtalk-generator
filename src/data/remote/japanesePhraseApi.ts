import { GoogleApis, google } from "googleapis";
import { JapanesePhraseContent, JapanesePhraseContentSchema } from "interfaces/sheet";

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

const SHEET_RANGE_PHRASE = "phrase";

export const getJapanesePhraseContents = async (): Promise<JapanesePhraseContent[]> => {
  try {
    const sheets = getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: SHEET_RANGE_PHRASE,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    const contents: JapanesePhraseContent[] = rows
      .slice(1)
      .map((row) => {
        const parsed = JapanesePhraseContentSchema.safeParse({
          content: row[0] || "",
        });

        if (parsed.success && parsed.data.content) {
          return parsed.data;
        }
        return null;
      })
      .filter((item): item is JapanesePhraseContent => item !== null);

    return contents;
  } catch (error) {
    console.error("JapanesePhraseContentsの取得中にエラーが発生しました:", error);
    return [];
  }
};
