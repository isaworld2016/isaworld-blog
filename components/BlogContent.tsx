import { Post } from "contentlayer/generated";

interface BlogContent {
  post: Post;
  MDXComponent: React.ComponentType<any>;
}
const BlogContent = ({ post, MDXComponent}: BlogContent) => {
  return (
    <article className="mt-10 prose max-w-none">
      <h1 className="text-green-500 text-center">{post.title}</h1>
      <h3 className="text-green-600 text-end italic">
        {post.date}
      </h3>
      <article className={`w-full dark:text-slate-50 text-neutral-900`}>
        <MDXComponent />
      </article>
    </article>
  );
}

export default BlogContent;