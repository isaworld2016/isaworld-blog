import Container from "components/layout/Container";
import BlogContent from "components/organism/BlogContent";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import TopBotton from "components/atom/TopBotton";
import BackBotton from "components/atom/BackBotton";
import { allDocuments } from ".contentlayer/generated";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          <BackBotton />
        </section>
        <section className={`fixed bottom-5 right-5`}>
          <TopBotton />
        </section>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allDocuments.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allDocuments.find((p) => p.slug === params?.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
