import { DocumentTypes } from "contentlayer/generated";
import { GetStaticProps } from "next";

// 정렬
export const getStaticPropsSort = async (documentType: DocumentTypes[]) => {
  const posts = documentType.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

// 동적 라우팅을 사용할 때, 어떤 페이지를 미리 Static으로 빌드할지 정하는 api
export const getStaticPropsMap = async (documentType: DocumentTypes[]) => {
  const paths = documentType.map((p) => ({
    params: {
      id: p._id,
      slug: p.slug,
      title: p.title,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};