import BlogPost from './BlogPost';
import { Post } from "contentlayer/generated";
import SearchBar from "../components/SearchBar";

interface PostList {
  posts: Post[];
  totalCount: number;
  searchTitle: string;
  onChangeSearchTitle: React.ChangeEventHandler<HTMLInputElement>;
  clearSearchInput: () => void;
}

const PostList = ({
  posts,
  totalCount,
  searchTitle,
  onChangeSearchTitle,
  clearSearchInput,
}: PostList) => {
  return (
    <>
      <div className="list-top__wrap flex flex-row justify-between max-w-3xl items-center my-2">
        <section className={"list-top__total text-sm font-medium text-gray-400"}>
          Total
          <span className="ml-0.5">({totalCount})</span>
        </section>
        <SearchBar
          searchTitle={searchTitle}
          onChangeSearchTitle={onChangeSearchTitle}
          clearSearchInput={clearSearchInput}
        />
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
    </>
  );
};
export default PostList;