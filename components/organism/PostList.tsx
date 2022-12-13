import SearchBar from "components/molecule/SearchBar";
import Category from "components/molecule/Category";
import Link from "next/link";
import { DocumentTypes } from "contentlayer/generated";

interface Props {
  posts: DocumentTypes[];
  totalCount: number;
  searchTitle?: string;
  onChangeSearchTitle?: React.ChangeEventHandler<HTMLInputElement>;
  clearSearchInput?: () => void;
}

const PostList = ({
  posts,
  totalCount,
  searchTitle,
  onChangeSearchTitle,
  clearSearchInput,
}: Props) => {
  return (
    <>
      <div className="list-top flex flex-row justify-between max-w-3xl items-center my-2">
        <Category totalCount={totalCount} />
        <SearchBar
          searchTitle={searchTitle ? searchTitle : ""}
          onChangeSearchTitle={
            onChangeSearchTitle ? onChangeSearchTitle : () => {}
          }
          clearSearchInput={clearSearchInput ? clearSearchInput : () => {}}
        />
      </div>
      {posts.map((post) => (
        <div
          key={post._id}
          className="w-full my-4 transition ease-in-out hover:-translate-x-1.5 border-b-2 border-[#efefef] border-dashed"
        >
          <Link href={`${post.category}/${post.slug}`} passHref>
            <a>
              <div className={`font-extrabold text-gray-800 text-2xl`}>
                {post.title}
              </div>
              <div className={`font-light text-gray-400 text-xl mt-1`}>
                {post.description}
              </div>
              <div className={`mt-4 mb-5`}>
                <span className="font-light text-xs text-gray-400">
                  {post.date}
                </span>
                <span className="font-semibold text-xs text-[#F36727]">
                  {" "}
                  #{post.category}
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};
export default PostList;
