import blogList from "data/blogList";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  totalCount: number;
}

const Category = ({ }: Props) => {
  const [on, setOn] = useState(false);
  const currPath = useRouter().pathname;

  return (
    <>
      <div
        className={`${
          on
            ? `absolute top-24 left-26 bg-white z-10 drop-shadow-md py-3 px-0`
            : `hidden`
        } pl-5 rounded-lg`}
      >
        {blogList.map((blog) => (
          <Link href={blog.link} key={blog.title}>
            <div className={`hover:cursor-pointer hover:text-[#fcb28f] `}>
              <a
                href={blog.link}
                className={`mr-5 flex justify-between ${
                  blog.link === currPath ? `text-[#F36727]` : ``
                }`}
              >
                <span className={`mr-4`}>
                  {blog.link === currPath ? "> " : ""}
                  {blog.title}
                </span>
                <span>({blog?.length})</span>
              </a>
            </div>
          </Link>
        ))}
      </div>
      <button
        className={`list-top__total text-sm font-semibold text-neutral-700`}
        onClick={() => setOn(!on)}
      >
        {blogList.find((a) => a.link == currPath)?.title}
      </button>
    </>
  );
};

export default Category;
