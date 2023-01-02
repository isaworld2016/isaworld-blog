import Container from "components/layout/Container";
import BlogContent from "components/organism/BlogContent";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import TopBotton from "components/atom/TopBotton";
import BackBotton from "components/atom/BackBotton";
import { allIsas } from "contentlayer/generated";
import metadata from "data/metadata";
import { NextSeo } from "next-seo";
import { getStaticPropsMap } from "common/utils/getStaticPropsMakers";

// 빌드 시 데이터를 fetch하여 static 페이지를 생성.
// pages/posts/[id].tsx 페이지를 /posts/123으로 접근했다면
// context.params는 { id: '123' }이 된다.
export const getStaticProps: GetStaticProps = async (context) => {
  const post = allIsas.find((p) => p.slug === context.params?.slug);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticPropsMap(allIsas)
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // { post: Post }로 타입 지정됨.

  const MDXComponent = useMDXComponent(post.body.code);

  interface CustomMeta {
    title: string;
    description: string;
    date: string;
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
