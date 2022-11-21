import { allPosts, Post } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";
import Pagination from "../components/Pagination";
import TopBotton from "../components/TopBotton";
import usePagination from "hooks/usePagination";
import useSearchPost from "hooks/useSearchPost";
import { useEffect } from "react";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    setFromPage,
    setToPage,
    calPage,
    toPage,
    fromPage,
    currPage,
    maxPage,
    setCurrPage,
  } = usePagination<Post>({ posts });

  const { searchTitle, searchPosts, onChangeSearchTitle, getSearchPost } =
    useSearchPost(allPosts);

  useEffect(() => {
    getSearchPost();
  }, [searchTitle])

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <SearchBar
          searchTitle={searchTitle}
          onChangeSearchTitle={onChangeSearchTitle}
        />
        <PostList
          posts={posts.slice(fromPage, toPage)}
          totalCount={posts.length}
        />
        <Pagination
          setFromPage={setFromPage}
          setToPage={setToPage}
          calPage={calPage}
          toPage={toPage}
          fromPage={fromPage}
          currPage={currPage}
          maxPage={maxPage}
          setCurrPage={setCurrPage}
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
      posts,
    },
  };
};

export default Blog;
