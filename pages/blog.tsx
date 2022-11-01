import { allPosts, Post } from "contentlayer/generated";
import metadata from "data/metadata";
import { InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from 'react';
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";

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

  // TODO: 뭔가 이상하다...
  const showPages = () => {
    let centerArray = Array.from({ length: maxPage }, (v, i) => String(i + 1));
    // 차가 2 이상이면
    // if(maxPage - (currPage + 3) >= 2) {
    //   centerArray = Array.from({ length: currPage + 3 }, (v, i) => String(i + 1)); // 문자열 취급
    //   centerArray.push('...'); // 말줄임 추가
    //   centerArray.push(String(maxPage)) // 마지막 페이지 추가
    // }
    // 현재 페이지에서 3페이지 앞이...
    // if (currPage - 3 > 2) {
    //   // 앞에 세자리만 남기고 잘라야 하는디
    //     centerArray.splice(1, 0, '... '); // 말줄임 추가
    // }
    return centerArray;
  }

  const callPage = (e: React.MouseEvent<HTMLElement>, page: number): void => {
    if(page >= maxPage + 1) return;
    setCurrPage(page);
  };

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <div>total: {props.pagination?.totalCount}</div>
        <div>perPage: {metadata.rowsPerPage}</div>
        {postSlider(props.posts).map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
        <a>
          <span onClick={e => callPage(e, 1)}>{'<<'}</span>
          <span onClick={e => callPage(e, currPage - 1)}> {'<'} </span>
          {showPages().map((a) => (
            <span key={a} onClick={(e) => callPage(e, Number(a))} className={"mr-5" + (Number(a) == currPage ? ' text-rose-500': '')}>
              {a}
            </span>
          ))}
          {isShowMaxPage ? '...' : null}
          {isShowMaxPage ?
            <span onClick={(e) => callPage(e, maxPage)}> {maxPage}</span>
            : null
          }

          <span onClick={e => callPage(e, currPage + 1)}>{'>'} </span>
          <span onClick={e => callPage(e, maxPage)}>{'>>'}</span>
        </a>
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
