interface SearchBarProps {
  searchTitle: string;
  onChangeSearchTitle: React.ChangeEventHandler<HTMLInputElement>;
}
const SearchBar = ({ searchTitle, onChangeSearchTitle }: SearchBarProps) => {

  return (
    <form className="fixed flex w-4/5 max-w-2xl">
      <input
        className="px-3 py-4 bg-gray-200 w-full rounded-lg focus:outline-none"
        placeholder="검색.. 😎"
        value={searchTitle}
        onChange={onChangeSearchTitle}
      />
    </form>
  );
}
export default SearchBar;