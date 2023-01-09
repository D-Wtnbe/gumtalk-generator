import { GoogleApis, google } from "googleapis";
import { japaneseNounContents } from "interfaces/sheet";

const getSheets = () => {
  const googleapis = new GoogleApis();
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const jwt = new googleapis.auth.JWT(
    process.env.GCP_SERVICEACCOUNT_EMAIL,
    undefined,
    (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes
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
    return rows.slice(1).map((row): japaneseNounContents => {
      return {
        content: row[0],
      };
    });
  }
  return [];
};
