import Container from "components/layout/Container";
import BlogContent from "components/organism/BlogContent";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import TopButton from "components/atom/TopButton";
import BackButton from "components/atom/BackButton";
import { allStyles } from "contentlayer/generated";
import metadata from "data/metadata";
import { NextSeo } from "next-seo";
import { getStaticPropsMap } from "common/utils/getStaticPropsMakers";

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticPropsMap(allStyles);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allStyles.find((p) => p.slug === params?.slug);
  return {
    props: {
      post,
    },
  };
};

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
      <NextSeo
        title={`${post.title} - ${metadata.title}`}
        description={`${post.description}`}
        canonical={`${post.slug}`}
        openGraph={{
          type: "article",
          article: {
            publishedTime: `${post.date}`,
            authors: [metadata.author[0].id],
          },
          url: `https://isaworld-blog.vercel.app/${post.slug}`,
          title: `${post.title}`,
          description: `${post.description}`,
          images: [
            {
              url: `${post.thumbnail}`,
              width: 285,
              height: 167,
              alt: "thumbnail",
            },
          ],
        }}
      />
      <Container customMeta={customMeta}>
        <BlogContent post={post} MDXComponent={MDXComponent} />
        <section className={`fixed bottom-16 right-5`}>
          <TopButton />
        </section>
        <section className={`fixed bottom-5 right-5`}>
          <BackButton />
        </section>
      </Container>
    </>
  );
};

export default Post;
