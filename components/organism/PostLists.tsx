import SearchBar from "components/molecule/SearchBar";
import Category from "components/molecule/Category";
import PostList from "components/molecule/PostList";
import { DocumentTypes } from "contentlayer/generated";

interface props {
  posts: DocumentTypes[];
  totalCount: number;
  searchTitle?: string;
  onChangeSearchTitle?: React.ChangeEventHandler<HTMLInputElement>;
  clearSearchInput?: () => void;
}

const PostLists = ({
  posts,
  totalCount,
  searchTitle,
  onChangeSearchTitle,
  clearSearchInput,
}: props) => {
  return (
    <>
      <div className={`list-top flex flex-row justify-between max-w-3xl items-center my-2`}>
        <Category totalCount={totalCount} />
        <SearchBar
          searchTitle={searchTitle ? searchTitle : ""}
          onChangeSearchTitle={
            onChangeSearchTitle ? onChangeSearchTitle : () => {}
          }
          clearSearchInput={clearSearchInput ? clearSearchInput : () => {}}
        />
      </div>
      <PostList
        posts={posts}
      />
    </>
  );
};
export default PostLists;
