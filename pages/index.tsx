import Container from "components/layout/Container";
import Image from "next/image";
import RecentPosts from "components/organism/RecentPosts";
import { InferGetStaticPropsType } from "next";
import { allDocuments } from "contentlayer/generated";
import { NextSeo } from "next-seo";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title="안녕!"
        description="천재적인 이자님의 블로그"
        canonical="https://isaworld-blog.vercel.app"
      />
      <Container>
        <div className={`my-5 w-full`}>
          <div className={`relative`}>
            <Image
              src={`/images/main.png`}
              alt="피할수없다면"
              width={`80%`}
              height={35}
              layout={`responsive`}
              objectFit="cover"
              className={`rounded-3xl`}
            />
          </div>
          <RecentPosts posts={posts} />
        </div>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allDocuments.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
export default Home;
