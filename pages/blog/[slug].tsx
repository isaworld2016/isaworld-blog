import Container from "components/layout/Container";
import BlogContent from "components/organism/BlogContent";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import TopBotton from "components/atom/TopBotton";
import BackBotton from "components/atom/BackBotton";
import { allDocuments } from ".contentlayer/generated";

// 빌드 시 데이터를 fetch하여 static 페이지를 생성.
// pages/posts/[id].tsx 페이지를 /posts/123으로 접근했다면
// context.params는 { id: '123' }이 된다.
export const getStaticProps: GetStaticProps = async (context) => {
  const post = allDocuments.find((p) => p.slug === context.params?.slug);
  return {
    props: {
      post,
    },
  };
};

// 동적 라우팅을 사용할 때, 어떤 페이지를 미리 Static으로 빌드할지 정하는 api
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allDocuments.map((p) => ({
    params: {
      id: p._id,
      slug: p.slug,
      title: p.title
    }
  }));
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // { post: Post }로 타입 지정됨.

  const MDXComponent = useMDXComponent(post.body.code);

  interface CustomMeta {
    title: string;
    description: string;
    date: string
  }
  const customMeta: CustomMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <>
      <Container customMeta={customMeta}>
        <BlogContent post={post} MDXComponent={MDXComponent} />
        <section className={`fixed bottom-16 right-5`}>
          <TopBotton />
        </section>
        <section className={`fixed bottom-5 right-5`}>
          <BackBotton />
        </section>
      </Container>
    </>
  );
};

export default Post;
