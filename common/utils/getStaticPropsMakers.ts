import { DocumentTypes } from "contentlayer/generated";

export const getStaticPropsMakers = async (documentType: DocumentTypes[]) => {
  const posts = documentType.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};