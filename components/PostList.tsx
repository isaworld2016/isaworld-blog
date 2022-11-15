import BlogPost from './BlogPost';
import { Post } from "contentlayer/generated";

const PostList = ({ posts, totalCount }: { posts: Post[]; totalCount: number }) => {
  return (
    <>
      <div className={`border-b-2 w-2/3 pt-20 pb-1`}>
        <section>
          검색결과 <span className="text-red-400 font-bold">{totalCount}</span>
          건
        </section>
      </div>
      {posts.map((post: Post) => (
        <BlogPost
          date={post.date.slice(0, 10)}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </>
  );
};
export default PostList;