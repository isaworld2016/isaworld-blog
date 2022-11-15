import { allPosts, Post } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";
import Pagination from '../components/Pagination';
import TopBotton from '../components/TopBotton';
import usePagination from "hooks/usePagination";
import { useEffect } from "react";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
   const {
     setCurrPage,
     fromPage,
     toPage,
     currPage,
     setToPage,
     setFromPage,
     calPage,
   } = usePagination();

  useEffect(() => {
    setToPage(calPage.to(currPage));
    setFromPage(calPage.from(currPage));
  }, [currPage]);
  
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <SearchBar />
        <PostList
          posts={posts.slice(fromPage, toPage)}
          totalCount={posts.length}
        />
        <Pagination
          setCurrPage={setCurrPage}
          currPage={currPage}
          totalCount={posts.length}
        />
        <TopBotton />
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
