import { useMemo, useRef, useEffect } from "react";
import SearchIcon from "public/assets/icons/Search";
import CancelIcon from "public/assets/icons/Cancel";
import { useSearchBarInputAction } from "modules/searchBar/action";

const SearchBar = () => {
  const {
    searchInput,
    changeSearchBarInput,
    initSearchBarInput,
    isQuestion,
    toggleIsQuestion,
  } = useSearchBarInputAction();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  const getSearchClass = () => {
    const base = `search-bar`;

    if(isQuestion) {
      // initSearchBarInput();
      return base.concat(` show`);
    } else return base;
  };

  const searchClass = useMemo(
    () => getSearchClass(),
    [isQuestion]
  );

  return (
    <div className={searchClass}>
      {isQuestion ? (
        <>
          <input
            ref={inputRef}
            autoComplete="off"
            className={`search-bar__input`}
            placeholder="검색어를 입력하세요 😎"
            value={searchInput}
            onChange={changeSearchBarInput}
          />
          <button
            onClick={() => toggleIsQuestion()}
            className={`search-bar__button`}
          >
            <CancelIcon width="16" height="16" fill="#CECECE" toLeftYn={true} />
          </button>
        </>
      ) : (
        <button
          onClick={() => toggleIsQuestion()}
          className={`search-bar__button`}
        >
          <SearchIcon width="18" height="18" fill="#CECECE" toLeftYn={true} />
        </button>
      )}
    </div>
  );
};
export default SearchBar;
