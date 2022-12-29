import { InferGetStaticPropsType } from "next";
import Container from "components/layout/Container";
import Pagination from "components/atom/Pagination";
import TopBotton from "components/atom/TopBotton";
import usePagination from "hooks/usePagination";
import { allNexts, DocumentTypes } from ".contentlayer/generated";
import PostLists from "components/organism/PostLists";
import useSearchPost from "hooks/useSearchPost";
import NoResult from "components/atom/NoResult";

const NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { searchPosts } = useSearchPost(posts);

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
          <NoResult />
        )}
        <section className={`fixed bottom-5 right-5`}>
          <TopBotton />
        </section>
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allNexts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default NextPage;
