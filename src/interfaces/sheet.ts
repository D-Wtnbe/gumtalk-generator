import { z } from "zod";

export const GoogleTrendContentSchema = z.object({
  date: z.string(),
  content: z.string(),
  newsTitle: z.string().nullable(),
  newsLink: z.string().nullable(),
});

export type GoogleTrendContent = z.infer<typeof GoogleTrendContentSchema>;

export const JapaneseNounContentSchema = z.object({
  content: z.string(),
});

export type JapaneseNounContent = z.infer<typeof JapaneseNounContentSchema>;

export const JapanesePhraseContentSchema = z.object({
  content: z.string(),
});

export type JapanesePhraseContent = z.infer<typeof JapanesePhraseContentSchema>;
