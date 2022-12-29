import SearchBar from "components/molecule/SearchBar";
import Category from "components/molecule/Category";
import PostList from "components/molecule/PostList";
import { DocumentTypes } from "contentlayer/generated";

interface props {
  posts: DocumentTypes[];
  totalCount: number;
}

const PostLists = ({ posts, totalCount }: props) => {
  return (
    <>
      <div className={`list-top flex flex-row justify-between max-w-3xl items-center my-2`}>
        <Category totalCount={totalCount} />
        <SearchBar />
      </div>
      <PostList posts={posts} />
    </>
  );
};
export default PostLists;
