import { allPosts, Post } from "contentlayer/generated";
import metadata from "data/metadata";
import { InferGetStaticPropsType } from "next";
import React, { useState } from 'react';
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";
import Pagination from '../components/Pagination';
import usePagination from "hooks/usePagination";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
   const { fromPage, toPage } = usePagination();
  // const [currPage, setCurrPage] = useState<number>(1);
  // const calPage = {
  //   from(param: number): number {
  //     return metadata.rowsPerPage * (param - 1);
  //   },
  //   to(param: number): number {
  //     return metadata.rowsPerPage * param;
  //   },
  // };
  // const [fromPage, setFromPage] = useState<number>(calPage.from(currPage));
  // const [toPage, setToPage] = useState<number>(calPage.to(currPage));

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <SearchBar />
        <PostList posts={posts.slice(fromPage, toPage)} totalCount={posts.length} />
        <Pagination
          totalCount={posts.length}
          // setCurrPage={setCurrPage}
          // currPage={currPage}
          // setFromPage={setFromPage}
          // setToPage={setToPage}
          // calPage={calPage}
        />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts
    },
  };
};

export default Blog;
