import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tag: z.string(),
    image: z.string().optional(),
    author: z.string().default('Infosecure'),
  }),
});

export const collections = {
  news: newsCollection,
};