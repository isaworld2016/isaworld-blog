import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from 'rehype-highlight'

export const Other = defineDocumentType(() => ({
  name: "Other",
  contentType: "mdx",
  filePathPattern: `other/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
  },
}));

export const Next = defineDocumentType(() => ({
  name: "Next",
  contentType: "mdx",
  filePathPattern: `next/*.mdx`,
  fields: {
    title: { type: "string", description: "The title of the post", required: true },
    date: { type: "string", description: "The date of the post", required: true },
    description: { type: "string", description: "The description of the post", required: true },
    category: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Other, Next],
  mdx: { rehypePlugins: [highlight] },
});