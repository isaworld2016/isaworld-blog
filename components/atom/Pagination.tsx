import EndIcon from "public/assets/icons/End";
import NextIcon from "public/assets/icons/Next";
import { PaginationProps } from "common/interface/PaginationProps";

const Pagination = ({
  currPage,
  maxPage,
  setCurrPage,
}: PaginationProps) => {
  const showPages = () => {
    let output = Array.from({ length: maxPage }, (v, i) => String(i + 1));

    // 1. (현재 페이지 + 3)이 maxPage와 차이가 2 이상일 경우 => '...' + 'maxPage'
    if (maxPage - (currPage + 3) >= 2) {
      // 1) (현재 페이지 + 3)의 위치를 찾고 그 이상으로 없애버림.
      const maxSlicePoint = output.findIndex(
        (el) => el == String(currPage + 3)
      );
      // 2) '...' + 'maxPage' 붙임.
      output = [...output.slice(0, maxSlicePoint), "...", `${maxPage}`];
    }
    // 2. (현재 페이지 - 3)이 1와 차이가 2 이상일 경우 =>
    if (currPage - 3 - 1 >= 2) {
      // 1) (현재 페이지 - 3)의 위치를 찾고 그 이하로 없애버림.
      const minSlicePoint = output.findIndex(
        (el) => el == String(currPage - 3)
      );
      // 2) '1' + '...' 붙임.
      output = ["1", "...", ...output.slice(minSlicePoint, maxPage)];
    }
    return output;
  };

  const callPage = (e: React.MouseEvent<HTMLElement>, page: number): void => {
    if (page >= maxPage + 1) return; // 최대값 방어
    if (page < 1) return; // 최소값 방어
    setCurrPage(page);
  };

  return (
    <div className={`pagination`}>
      <div className={`pagination__wrap`}>
        <div className={`icon__previous`}>
          {currPage != 1 ? (
            <>
              <a onClick={(e) => callPage(e, 1)}>
                <EndIcon width="16" height="16" toLeftYn={true} />
              </a>
              <a onClick={(e) => callPage(e, currPage - 1)}>
                <NextIcon width="16" height="16" toLeftYn={true} />
              </a>
            </>
          ) : null}
        </div>
        <nav className={`nav`}>
          <div className={`nav__links`}>
            {showPages().map((a, i) => (
              <div
                key={a + i}
                onClick={(e) => (a.includes(".") ? "" : callPage(e, Number(a)))}
                className={
                  "nav__numbers" +
                  (Number(a) == currPage ? " nav__numbers--current" : "") +
                  (a.includes(".") ? " nav__numbers--cursor-unset" : "")
                }
              >
                {a}
              </div>
            ))}
          </div>
        </nav>
        <div className={`icon__next`}>
          {currPage != maxPage ? (
            <>
              <a onClick={(e) => callPage(e, currPage + 1)}>
                <NextIcon width="16" height="16" />
              </a>
              <a onClick={(e) => callPage(e, maxPage)}>
                <EndIcon width="16" height="16" />
              </a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
