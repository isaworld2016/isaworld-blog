import { BlogPost } from "common/interface/BlogPost";
import Link from "next/link";

const BlogPost = (param: BlogPost) => {
  return (
    <div className="w-full my-4 transition ease-in-out hover:-translate-x-1.5 border-b-2 border-gray-200">
      <Link href={`/blog/${param.slug}`} passHref>
        <a>
          <div className={`font-extrabold text-gray-800 text-2xl`}>
            {param.title}
          </div>
          <div className={`font-light text-gray-400 text-xl mt-1`}>
            {param.des}
          </div>
          <div className={`mt-4 mb-5`}>
            <span className="font-light text-xs text-gray-400">
              {param.date}
            </span>
            <span className="font-light text-xs text-gray-400">
              {" "}
              #{param.category}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogPost;
