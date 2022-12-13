import { DocumentTypes } from "contentlayer/generated";

interface BlogContent {
  post: DocumentTypes;
  MDXComponent: React.ComponentType<any>;
}
const BlogContent = ({ post, MDXComponent }: BlogContent) => {
  return (
    <article className={`mt-10 prose max-w-none`}>
      <h1 className={`text-neutral-900 text-center`}>{post.title}</h1>
      <h1 className={`text-neutral-400 font-medium text-base text-center`}>{post.description}</h1>
      <h3 className={`text-neutral-400 font-medium text-base text-end`}>{post.date}</h3>
      <article className={`w-full text-neutral-900`}>
        <MDXComponent />
      </article>
    </article>
  );
}

export default BlogContent;