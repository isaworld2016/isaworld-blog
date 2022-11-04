export interface IPagination {
  totalCount: number;
  setFromPage: Function;
  setToPage: Function;
  setCurrPage: Function;
  currPage: number;
}