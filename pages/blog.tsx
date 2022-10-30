import { allPosts } from "contentlayer/generated";
import metadata from "data/metadata";
import { InferGetStaticPropsType } from "next";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const showPage = Math.ceil(props.pagination?.totalCount / props.pagination?.rowsPerPage);
  const tempArr = Array.from({ length: showPage }, (v, i) => i+1);

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <div>total: {props.pagination?.totalCount}</div>
        <div>rowsPerPage: {props.pagination?.rowsPerPage}</div>
        {props.posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
        {tempArr.map(a => (
          <a key={a}>{a}</a>
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  let posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const currPage = 1;

  const fromPage = (metadata.rowsPerPage * (currPage - 1)) + 1;
  const toPage = (metadata.rowsPerPage * currPage) + 1; // (6 * 1) + 1 = 7

  return {
    props: {
      posts:posts.slice(fromPage, toPage), // 왜 안되는거징..
      pagination: {
        totalCount: allPosts.length,
        rowsPerPage: metadata.rowsPerPage,
        fromPage,
        toPage,
      }
    },
  };
};

export default Blog;
