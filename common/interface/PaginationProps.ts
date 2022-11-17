import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  setFromPage: Dispatch<SetStateAction<number>>;
  setToPage: Dispatch<SetStateAction<number>>;
  calPage: {
    from(param: number): number;
    to(param: number): number;
  };
  toPage: number;
  fromPage: number;
  currPage: number;
  maxPage: number;
  setCurrPage: Dispatch<SetStateAction<number>>;
}