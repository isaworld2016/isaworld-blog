import { InferGetStaticPropsType } from "next";
import PostList from "components/organism/PostList";
import Container from "components/layout/Container";
import Pagination from "components/atom/Pagination";
import TopBotton from "components/atom/TopBotton";
import usePagination from "hooks/usePagination";
import useSearchPost from "hooks/useSearchPost";
import { NextSeo } from "next-seo";
import {
  DocumentTypes,
  allDocuments,
} from "contentlayer/generated";

const BlogPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    searchTitle,
    searchPosts,
    onChangeSearchTitle,
    clearSearchInput,
  } = useSearchPost(posts);

  const {
    setFromPage,
    setToPage,
    calPage,
    toPage,
    fromPage,
    currPage,
    maxPage,
    setCurrPage,
  } = usePagination<DocumentTypes>({ posts });

  return (
    <>
      <NextSeo
        title="blog"
        description="Isa의 기록들"
        canonical="https://isaworld-blog.vercel.app/blog"
        openGraph={{
          url: "https://isaworld-blog.vercel.app/blog",
        }}
      />
      <Container>
        <div className={`flex flex-col`}>
          <PostList
            searchTitle={searchTitle}
            onChangeSearchTitle={onChangeSearchTitle}
            clearSearchInput={clearSearchInput}
            posts={searchPosts.slice(fromPage, toPage)}
            totalCount={searchPosts.length}
          />
          {posts.length != 0 ? (
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
          ) : (
            <></>
          )}
          <section className={`fixed bottom-5 right-5`}>
            <TopBotton />
          </section>
        </div>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allDocuments.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
