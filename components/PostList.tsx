import BlogPost from './BlogPost';
import { Post } from "contentlayer/generated";

interface PostList {
  posts: Post[];
  totalCount: number;
}

const PostList = ({ posts, totalCount }: PostList) => {
  return (
    <div>
      <section className={'text-sm mt-2'}>
        검색 결과{" "}
        <span className="text-red-400 font-bold">{totalCount}</span>
      </section>
      {posts.map((post: Post) => (
        <BlogPost
          date={post.date.slice(0, 10)}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
          category={post.category}
        />
      ))}
    </div>
  );
};
export default PostList;