import Link from "next/link";
import { InferGetStaticPropsType } from "next";
import { allPosts, Post } from "contentlayer/generated";

const RecentPosts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map((post: Post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <a className="mt-5">
              <div className={`font-medium text-xl`}>{post.title}</div>
              <div className={`font-light`}>{post.description}</div>
            </a>
          </Link>
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
    }
  }
}

export default RecentPosts;
