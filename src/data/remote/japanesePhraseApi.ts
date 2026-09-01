import { GoogleApis, google } from "googleapis";
import {
  japanesePhraseContents,
  japanesePhraseContentsSchema,
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

export const getJapanesePhraseContents = async (): Promise<
japanesePhraseContents[]
> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "phrase",
  });
  const rows = response.data.values;

  if (rows) {
    return rows.slice(1).flatMap((row): japanesePhraseContents[] => {
      const parsed = japanesePhraseContentsSchema.safeParse({
        content: row[0],
      });
      return parsed.success ? [parsed.data] : [];
    });
  }
  return [];
};
