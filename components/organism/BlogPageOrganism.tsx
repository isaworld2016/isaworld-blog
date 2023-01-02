import { DocumentTypes } from "contentlayer/generated";
import usePagination from "hooks/usePagination";
import useSearchPost from "hooks/useSearchPost";
import { InferGetStaticPropsType } from "next";

interface props {
  // getStaticProps: InferGetStaticPropsType<typeof getStaticProps>;
  getStaticProps: () => Promise<{
    props: {
      posts: DocumentTypes[];
    };
  }>;
  documentType: DocumentTypes[];
}

const BlogPageOrganism = ({ getStaticProps }: props) => {
  // const { searchPosts } = useSearchPost(getStaticProps);
  console.log(getStaticProps)
  console.log(typeof getStaticProps)
  // const {
  //   setFromPage,
  //   setToPage,
  //   calPage,
  //   toPage,
  //   fromPage,
  //   currPage,
  //   maxPage,
  //   setCurrPage,
  // } = usePagination<DocumentTypes>({ posts: getStaticProps.props.posts });

  return <>안녕</>;
};

export default BlogPageOrganism;




// const IsaPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   const { searchPosts } = useSearchPost(posts);

//   const {
//     setFromPage,
//     setToPage,
//     calPage,
//     toPage,
//     fromPage,
//     currPage,
//     maxPage,
//     setCurrPage,
//   } = usePagination<DocumentTypes>({ posts });

//   return (
//     <Container>
//       <div className={`flex flex-col`}>
//         <PostLists
//           posts={searchPosts.slice(fromPage, toPage)}
//           totalCount={searchPosts.length}
//         />
//         {posts.length != 0 ? (
//           <Pagination
//             setFromPage={setFromPage}
//             setToPage={setToPage}
//             calPage={calPage}
//             toPage={toPage}
//             fromPage={fromPage}
//             currPage={currPage}
//             maxPage={maxPage}
//             setCurrPage={setCurrPage}
//           />
//         ) : (
//           <NoResult />
//         )}
//       </div>
//     </Container>
//   );
// };

// export const getStaticProps = async () => {
//   const posts = allIsas.sort(
//     (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
//   );

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// export default IsaPage;