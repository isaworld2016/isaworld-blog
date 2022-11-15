import { useEffect, useState } from 'react';
import metadata from "data/metadata";

interface Props<T> {
  posts: T[]
}

export default function usePagination<T>({ posts }: Props<T>) {
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
  const maxPage = Math.ceil(posts.length / metadata.rowsPerPage);

  useEffect(() => {
    setToPage(calPage.to(currPage));
    setFromPage(calPage.from(currPage));
  }, [currPage]);

  return {
    currPage, setCurrPage,
    fromPage, setFromPage,
    toPage, setToPage,
    calPage, maxPage
  }
}