import BlogPost from './BlogPost';
import { Post } from "contentlayer/generated";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <>
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