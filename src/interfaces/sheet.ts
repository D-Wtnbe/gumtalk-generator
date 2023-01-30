import { z } from "zod";

const googleTrendContentsSchema = z.object({
  date: z.string(),
  content: z.string(),
  newsTitle: z.string(),
  newsLink: z.string(),
});

export type googleTrendContents = z.infer<typeof googleTrendContentsSchema>;

const japaneseNounContentsSchema = z.object({
  content: z.string(),
});

export type japaneseNounContents = z.infer<typeof japaneseNounContentsSchema>;
