import { GoogleApis, google } from "googleapis";
import {
  japaneseNounContents,
  japaneseNounContentsSchema,
} from "interfaces/sheet";

const getSheets = () => {
  const googleapis = new GoogleApis();
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const jwt = new googleapis.auth.JWT(
    {
      email: process.env.GCP_SERVICEACCOUNT_EMAIL,
      key: (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || "").replace(
        /\\n/g,
        "\n"
      ),
      scopes,
    }
  );
  return google.sheets({ version: "v4", auth: jwt });
};

export const getJapaneseNounContents = async (): Promise<
  japaneseNounContents[]
> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "noun",
  });
  const rows = response.data.values;

  if (rows) {
    return rows.slice(1).flatMap((row): japaneseNounContents[] => {
      const parsed = japaneseNounContentsSchema.safeParse({
        content: row[0],
      });
      return parsed.success ? [parsed.data] : [];
    });
  }
  return [];
};
