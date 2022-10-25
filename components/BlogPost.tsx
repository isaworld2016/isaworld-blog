import { IBlogPost } from "common/interface/IBlogPost";
import Link from "next/link";

const BlogPost = (param: IBlogPost) => {
  return (
    <Link href={`/blog/${param.slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className="font-medium text-xs text-gray-400">{param.date}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{param.title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{param.des}</div>
      </a>
    </Link>
  );
};

export default BlogPost;
