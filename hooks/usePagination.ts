import { useState } from 'react';
import metadata from "data/metadata";

export default function usePagination() {
  const [currPage, setCurrPage] = useState<number>(1);
  const calPage = {
    from(param: number): number {
      return metadata.rowsPerPage * (param - 1);
    },
    to(param: number): number {
      return metadata.rowsPerPage * param;
    },
  };
  const [fromPage, setFromPage] = useState<number>(calPage.from(currPage));
  const [toPage, setToPage] = useState<number>(calPage.to(currPage));
  return {
    currPage, setCurrPage,
    fromPage, setFromPage,
    toPage, setToPage,
    calPage
  }
}