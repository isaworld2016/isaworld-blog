import Container from "../components/layout/Container";
import Image from "next/image";
import RecentPosts from "../components/organism/RecentPosts";
import { InferGetStaticPropsType } from "next";
import { allDocuments } from "contentlayer/generated";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/main.png`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          {/* <span
            className={`absolute top-12 font-bold italic text-white text-5xl md:text-8xl text flex justify-center w-full drop-shadow-lg opacity-50`}
          >
            {metadata.title}
          </span> */}
        </div>
        <RecentPosts posts={posts} />
      </div>
    </Container>
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
