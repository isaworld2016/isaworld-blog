import { IBlogPost } from "common/interface/IBlogPost";
import Link from "next/link";

const BlogPost = (param: IBlogPost) => {
  return (
    <div className="w-full my-5 transition ease-in-out hover:-translate-x-1.5 hover:text-yellow-400/80">
      <Link href={`/blog/${param.slug}`} passHref>
        <a>
          <div className="font-medium text-xs text-gray-400">{param.date}</div>
          <div className={`font-extrabold text-2xl mt-2`}>{param.title}</div>
          <div className={`font-medium text-gray-600 text-xl mt-1`}>{param.des}</div>
        </a>
      </Link>
    </div>
  );
};

export default BlogPost;
