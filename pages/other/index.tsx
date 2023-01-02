import { InferGetStaticPropsType } from "next";
import PostLists from "components/organism/PostLists";
import Container from "components/layout/Container";
import Pagination from "components/atom/Pagination";
import usePagination from "hooks/usePagination";
import { allOthers, DocumentTypes } from "contentlayer/generated";
import useSearchPost from "hooks/useSearchPost";
import NoResult from "components/atom/NoResult";
import { getStaticPropsSort } from "common/utils/getStaticPropsMakers";

export const getStaticProps = async () => {
 return getStaticPropsSort(allOthers);
};

const OtherPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      </div>
    </Container>
  );
};

export default OtherPage;
