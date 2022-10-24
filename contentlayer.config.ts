import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
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
  },
  // computedFields: {
  //   url: {
  //     type: 'string',
  //     resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
  //   },
  // },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});