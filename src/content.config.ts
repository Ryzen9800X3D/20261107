import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};
