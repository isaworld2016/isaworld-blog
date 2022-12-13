import { useMemo, useRef, useState, useEffect } from "react";
import SearchIcon from "public/assets/icons/Search";
import CancelIcon from "public/assets/icons/Cancel";

interface SearchBarProps {
  searchTitle: string;
  onChangeSearchTitle: React.ChangeEventHandler<HTMLInputElement>;
  clearSearchInput: () => void;
}
const SearchBar = ({
  searchTitle,
  onChangeSearchTitle,
  clearSearchInput,
}: SearchBarProps) => {
  const [questionYn, setQuestionYn] = useState<boolean>(false);

  const changeButton = () => setQuestionYn(!questionYn);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  const getSearchClass = () => {
    const base = `search-bar`;
    if (questionYn) {
      clearSearchInput();
      return base.concat(` show`);
    } else return base;
  };

  const searchClass = useMemo(
    () => getSearchClass(),
    [questionYn]
  );

  return (
    <div className={searchClass}>
    {questionYn ? (
      <>
        <input
          ref={inputRef}
          autoComplete="off"
          className={`search-bar__input`}
          placeholder="검색어를 입력하세요 😎"
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />
        <button onClick={() => changeButton()} className={`search-bar__button`}>
          <CancelIcon width="16" height="16" fill="#CECECE" toLeftYn={true} />
        </button>
      </>
    ) : (
    <button onClick={() => changeButton()} className={`search-bar__button`}>
      <SearchIcon width="18" height="18" fill="#CECECE" toLeftYn={true} />
    </button>)}
  </div>
  );
};
export default SearchBar;
