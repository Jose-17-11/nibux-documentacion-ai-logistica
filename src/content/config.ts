// src/content.config.ts
import { defineCollection, z } from 'astro:content';
const documentacionCollection = defineCollection({
  type: 'content', // Puede ser 'content' (para Markdown/MDX) o 'data' (para JSON/YAML)
  schema: z.object({
    title: z.string().optional(),
    publishDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(), // Opcional
  }),
});

export const collections = {
  'documentacion': documentacionCollection,
};