import { useMemo, useRef, useState, useLayoutEffect } from "react";
import SearchIcon from "../public/assets/icons/Search";
import CancelIcon from "../public/assets/icons/Cancel";

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
  const [categoryYn, setCategoryYn] = useState<boolean>(false);

  const changeButton = () => setQuestionYn(!questionYn);
  const toggleCategoryIcon = () => setCategoryYn(!categoryYn);

  const inputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  const getSearchClass = () => {
    const base = "search right-36";
    if (questionYn) {
      clearSearchInput();
      return base.concat(` show`);
    } else return base;
  };

  const searchClass = useMemo(() => getSearchClass(), [questionYn]);

  return (
    <div className={searchClass}>
      {questionYn ? (
        <>
          <input
            ref={inputRef}
            autoComplete="off"
            className="search__input"
            placeholder="검색어를 입력하세요 😎"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <button onClick={() => changeButton()} className="search__button">
            <CancelIcon width="17" height="17" fill="#CECECE" toLeftYn={true} />
          </button>
        </>
      ) : (
        <button onClick={() => changeButton()} className="search__button">
          <SearchIcon width="19" height="19" fill="#CECECE" toLeftYn={true} />
        </button>
      )}
    </div>
  );
};
export default SearchBar;
