import { z } from "zod";

export const googleTrendContentsSchema = z.object({
  date: z.string(),
  content: z.string(),
  newsTitle: z.string(),
  newsLink: z.string().url().refine((value) => {
    const protocol = new URL(value).protocol;
    return protocol === "https:" || protocol === "http:";
  }, "ニュースリンクはHTTP(S) URLである必要があります"),
});

export type googleTrendContents = z.infer<typeof googleTrendContentsSchema>;

export const japaneseNounContentsSchema = z.object({
  content: z.string(),
});

export type japaneseNounContents = z.infer<typeof japaneseNounContentsSchema>;

export const japanesePhraseContentsSchema = z.object({
  content: z.string(),
});

export type japanesePhraseContents = z.infer<typeof japanesePhraseContentsSchema>;
