import { BlogPost } from "common/interface/BlogPost";
import Link from "next/link";

const BlogPost = (param: BlogPost) => {
  return (
    <div className="w-full my-4 transition ease-in-out hover:-translate-x-1.5">
      <Link href={`/blog/${param.slug}`} passHref>
        <a>
          <div className="translate-y-1">
            <span className="font-medium text-xs text-gray-400">
              {param.date}
            </span>
            <span className="font-semibold text-xs text-gray-700">
              {" "}
              #{param.category}
            </span>
          </div>
          <div className={`font-extrabold text-2xl mt-2`}>{param.title}</div>
          <div className={`font-medium text-gray-600 text-xl mt-1`}>
            {param.des}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogPost;
