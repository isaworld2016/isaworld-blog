import { allPosts, Post } from "contentlayer/generated";
import metadata from "data/metadata";
import { InferGetStaticPropsType } from "next";
import React, { useState } from 'react';
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import Pagination from '../components/Pagination';

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [fromPage, setFromPage] = useState<number>(metadata.rowsPerPage * (currPage - 1));
  const [toPage, setToPage] = useState<number>(metadata.rowsPerPage * currPage);
  const postSlider = (posts: Post[]): Post[] => posts.slice(fromPage, toPage);

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <div>total: {props.pagination?.totalCount}</div>
        {postSlider(props.posts).map((post) => (
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
