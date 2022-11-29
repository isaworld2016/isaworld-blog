import { useMemo, useState } from "react";
import SearchIcon from "../public/assets/icons/Search";
import CancelIcon from "../public/assets/icons/Cancel";
import HamburgerIcon from "../public/assets/icons/Hamburger";

interface SearchBarProps {
  searchTitle: string;
  onChangeSearchTitle: React.ChangeEventHandler<HTMLInputElement>;
}
const SearchBar = ({
  searchTitle,
  onChangeSearchTitle,
}: SearchBarProps) => {
  const [questionYn, setQuestionYn] = useState<boolean>(false);
  const [categoryYn, setCategoryYn] = useState<boolean>(false);

  const changeButton = () => setQuestionYn(!questionYn);
  const toggleCategoryIcon = () => setCategoryYn(!categoryYn);

  const getInputClass = () => {
    const base = "question__input";
    if (questionYn) return base.concat(` show`);
    else return base;
  };

  const inputClass = useMemo(() => getInputClass(), [questionYn]);

  return (
    <div className="absolute inline-flex items-center w-full max-w-3xl">
      <form className={inputClass}>
        <input
          className="px-3 py-2 w-9/12 bg-gray-200 rounded-md focus:outline-none"
          placeholder="제목, 내용을 입력하세요"
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />
      </form>
      <a onClick={() => changeButton()} className="absolute right-16 left-auto">
        {questionYn ? (
          <CancelIcon width="18" height="18" toLeftYn={true} />
        ) : (
          <SearchIcon width="19" height="19" toLeftYn={true} />
        )}
      </a>
      <a
        onClick={() => toggleCategoryIcon()}
        className="absolute right-8 left-auto"
      >
        {categoryYn ? (
          <CancelIcon width="18" height="18" toLeftYn={true} />
        ) : (
          <HamburgerIcon width="18" height="18" toLeftYn={true} />
        )}
      </a>
    </div>
  );
};
export default SearchBar;
