import { InferGetStaticPropsType } from "next";
import PostLists from "components/organism/PostLists";
import Container from "components/layout/Container";
import Pagination from "components/atom/Pagination";
import TopBotton from "components/atom/TopBotton";
import usePagination from "hooks/usePagination";
import { allOthers, DocumentTypes } from "contentlayer/generated";
import useSearchPost from "hooks/useSearchPost";

const OtherPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    searchTitle,
    searchPosts,
    onChangeSearchTitle,
    getSearchPost,
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
    <Container>
      <div className={`flex flex-col`}>
        <PostLists
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
  );
};

export const getStaticProps = async () => {
  const posts = allOthers.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default OtherPage;
