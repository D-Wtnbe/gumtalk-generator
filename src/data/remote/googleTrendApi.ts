import { GoogleApis, google } from "googleapis";
import { googleTrendContents } from "interfaces/sheet";

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

export const getGoogleTrendContents = async (): Promise<
  googleTrendContents[]
> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "trend",
  });
  const rows = response.data.values;
  if (rows) {
    return rows.slice(1).map((row): googleTrendContents => {
      return {
        date: row[0],
        content: row[1],
        newsTitle: row[2],
        newsLink: row[3],
      };
    });
  }
  return [];
};
