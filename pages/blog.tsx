import { allPosts, Post } from "contentlayer/generated";
import metadata from "data/metadata";
import { InferGetStaticPropsType } from "next";
import React, { useState } from 'react';
import BlogPost from "../components/BlogPost";
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";
import Pagination from '../components/Pagination';

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const calPage = {
    from(param:number):number {
      return metadata.rowsPerPage * (param - 1)
    },
    to(param: number):number {
      return metadata.rowsPerPage * param
    }
  }
  const [fromPage, setFromPage] = useState<number>(calPage.from(currPage));
  const [toPage, setToPage] = useState<number>(calPage.to(currPage));

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <SearchBar />
        <div className={`border-b-2 pt-20 pb-1`}>
          <span>
            검색결과{" "}
            <span className="text-red-400 font-medium">
              {props.pagination?.totalCount}
            </span>
            건
          </span>
        </div>
        {props.posts.slice(fromPage, toPage).map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
        <Pagination
          totalCount={props.pagination?.totalCount}
          setCurrPage={setCurrPage}
          currPage={currPage}
          setFromPage={setFromPage}
          setToPage={setToPage}
          calPage={calPage}
        />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  let posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
      pagination: {
        totalCount: allPosts.length,
      },
    },
  };
};

export default Blog;
