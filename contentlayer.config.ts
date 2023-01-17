import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from 'rehype-highlight'
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

export const Other = defineDocumentType(() => ({
  name: "Other",
  contentType: "mdx",
  filePathPattern: `other/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: false
    }
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
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "string",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    category: {
      type: "string",
      required: false
    },
    thumbnail: {
      type: "string",
      required: false
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
  },
}));

export const Isa = defineDocumentType(() => ({
  name: "Isa",
  contentType: "mdx",
  filePathPattern: `isa/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "string",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    category: {
      type: "string",
      required: false
    },
    thumbnail: {
      type: "string",
      required: false
    }
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
  documentTypes: [Other, Next, Isa],
  mdx: { rehypePlugins: [highlight, rehypeCodeTitles, rehypePrism] },
});