import BlogPost from './BlogPost';
import { Post } from "contentlayer/generated";

interface PostList {
  posts: Post[];
  totalCount: number;
}

const PostList = ({ posts, totalCount }: PostList) => {
  return (
    <div className={`ml-1`}>
      <div className={`border-b-2 w-3/5 pt-14 pb-1`}>
        <section className={'text-sm'}>
          검색 결과는{" "}
          <span className="text-red-400 font-bold">{totalCount}</span>건 입니다.
        </section>
      </div>
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