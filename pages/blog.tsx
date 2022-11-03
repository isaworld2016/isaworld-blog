import { allPosts, Post } from "contentlayer/generated";
import metadata from "data/metadata";
import { InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from 'react';
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import FirstIcon from '../public/assets/icons/First';
import EndIcon from '../public/assets/icons/End';
import NextIcon from '../public/assets/icons/Next';

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currPage, setCurrPage] = useState(1);
  const [isShowMaxPage, setShowMaxPage] = useState(false);

  const calFromPage = (param: number): number => {
    return metadata.rowsPerPage * (param - 1);
  }
  const [fromPage, setFromPage] = useState(calFromPage(currPage));

  const calToPage = (param: number): number => {
    return metadata.rowsPerPage * param;
  }
  const [toPage, setToPage] = useState(calToPage(currPage));

  const maxPage = Math.ceil(
      props.pagination?.totalCount / metadata.rowsPerPage
    );

  useEffect(() => {
    setToPage(calToPage(currPage));
    setFromPage(calFromPage(currPage));
  }, [currPage])

  const postSlider = (posts: Post[]): Post[] => {
    return props.posts.slice(fromPage, toPage)
  }

  const showPages = () => {
    let output = Array.from({ length: maxPage }, (v, i) => String(i + 1));

    // 1. (현재 페이지 + 3)이 maxPage와 차이가 2 이상일 경우 => '...' + 'maxPage'
    if(maxPage - (currPage + 3) >= 2) {
      //// 1) findIndex로 (현재 페이지 + 3)의 위치를 찾고 그 이상으로 없애버림.
      const maxSlicePoint = output.findIndex(el => el == String(currPage + 3));
      //// 2) '...' + 'maxPage' 붙임.
      output = [...output.slice(0, maxSlicePoint), '...', `${maxPage}`];
    }
    // 2. (현재 페이지 - 3)이 1와 차이가 2 이상일 경우 =>
    if((currPage - 3) - 1 >= 2) {
      //// 1) findIndex로 (현재 페이지 - 3)의 위치를 찾고 그 이하로 없애버림.
      const minSlicePoint = output.findIndex(el => el == String(currPage - 3));
      //// 2) '1' + '...' 붙임.
      output = ['1', '..', ...output.slice(minSlicePoint, maxPage)];
    }
    return output;
  }

  const callPage = (e: React.MouseEvent<HTMLElement>, page: number): void => {
    if (page >= maxPage + 1) return; // 최대값 방어
    if (page < 1) return; // 최소값 방어
    setCurrPage(page);
  };

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
        {/*TODO: pagination 모듈화*/}
        <div className="container-content-pagination">
          <div className="container-content-pagination-wrapper">
            <div className="pagination-previous">
              {currPage != 1 ? (
                <>
                  <a onClick={e => callPage(e, 1)}>
                    <FirstIcon width="16" height="16"/>
                  </a>
                  <a onClick={e => callPage(e, currPage - 1)}>
                    <NextIcon width="16" height="16" toLeftYn={true} />
                  </a>
                </>
              ) : null}
            </div>
            <nav className="navigation pagination">
              <div className="nav-links">
                {showPages().map((a) => (
                  <div key={a} onClick={(e) => callPage(e, Number(a))} className={
                    'page-numbers'
                    + (Number(a) == currPage ? ' current' : '')
                    + (a.includes('.') ? ' cursor-unset' : '')
                  }>
                    {a}
                  </div>
                ))}
              </div>
            </nav>
            <div className="pagination-next">
              {currPage != maxPage ? (
                <>
                  <a onClick={e => callPage(e, currPage + 1)}>
                    <NextIcon width="16" height="16" />
                  </a>
                  <a onClick={e => callPage(e, maxPage)}>
                    <EndIcon width="16" height="16" />
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
        {/*TODO: pagination 모듈화*/}
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
