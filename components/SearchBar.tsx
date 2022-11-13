import { ReactElement, ReactEventHandler, useState } from "react";
const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  }
  return (
    <form className="fixed flex w-4/5 max-w-2xl">
      <input
        className="px-3 py-4 bg-gray-200 w-full rounded-lg focus:outline-none"
        placeholder="제목 검색.. 😎"
        value={searchTitle}
        onChange={onChangeSearchTitle}
      />
    </form>
  );
}
export default SearchBar;