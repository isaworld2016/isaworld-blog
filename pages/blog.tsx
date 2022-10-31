import { allPosts } from "contentlayer/generated";
import metadata from "data/metadata";
import { InferGetStaticPropsType } from "next";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const showPage = Math.ceil(
    props.pagination?.totalCount / metadata.rowsPerPage
  );
  
  const tempArr = Array.from({ length: showPage }, (v, i) => i + 1);

  const callPage = (event: React.MouseEvent<HTMLElement>, page: number): void => {
    console.log("callPage", page);
  };

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <div>total: {props.pagination?.totalCount}</div>
        {props.posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
        {tempArr.map((a) => (
          <a key={a} onClick={(event) =>callPage(event, a)}>
            {a}
          </a>
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

  const fromPage = metadata.rowsPerPage * (currPage - 1);
  const toPage = metadata.rowsPerPage * currPage + 1;

  return {
    props: {
      posts: posts.slice(fromPage, toPage),
      pagination: {
        totalCount: allPosts.length,
      },
    },
  };
};

export default Blog;
