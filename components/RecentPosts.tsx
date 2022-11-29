import { allPosts, Post } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

const RecentPosts = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section className={`mt-8`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 3).map((post: Post, key: number) => (
          <div
            key={key}
            className="w-full my-2 ml-1 transition ease-in-out hover:-translate-x-1.5"
          >
            <Link
              key={post._id}
              href={`/blog/${post._raw.flattenedPath}`}
              passHref
            >
              <a>
                <div className="mt-3 flex justify-between">
                  <div className={`font-medium text-xl text-gray-800`}>
                    {post.title}
                  </div>
                </div>
                <div className={`font-light text-gray-400`}>
                  {post.description}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default RecentPosts;
