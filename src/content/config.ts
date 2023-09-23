import { defineCollection, z } from "astro:content";
import type { SchemaContext } from 'astro:content';

 // Post collection schema
const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
      // cover: image(),
      title: z.string(),
      meta_title: z.string().optional(),
      description: z.string().optional(),
      date: z.date().optional(), 
      //image: z.string().optional(),
      image: image().optional(),
      author: z.string().default("Admin"),
      categories: z.array(z.string()).default(["others"]),
      tags: z.array(z.string()).default(["others"]),
      draft: z.boolean().optional(),
    }),
  });

// Post collection schema
// const blogCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     meta_title: z.string().optional(),
//     description: z.string().optional(),
//     date: z.date().optional(),
//     // image: imageSchema({ image }).optional(),
//     image: z.string().optional(),
//     // image: image().refine((z) => z.width >= 1080, {
//     //   message: "Cover image must be at least 1080 pixels wide!",
//     // }),
//     // image: z.string().optional(),
//     author: z.string().default("Admin"),
//     categories: z.array(z.string()).default(["others"]),
//     tags: z.array(z.string()).default(["others"]),
//     draft: z.boolean().optional(),
//   }),
// });

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  // blog2: blogCollection2,
  authors: authorsCollection,
  pages: pagesCollection,
};
