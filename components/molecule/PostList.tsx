import Link from "next/link";
import { DocumentTypes } from "contentlayer/generated";
import Image from "next/image";

interface Props {
  posts: DocumentTypes[];
}

const PostList = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post._id}
          className={`flex flex-nowrap items-center justify-between w-full my-4 transition ease-in-out hover:-translate-x-1.5 border-b-2 border-[#efefef] border-dashed`}
        >
          <Link href={`${post.category}/${post.slug}`} passHref>
            <a className="flex w-full">
              <section className="flex flex-col flex-nowrap items-start flex-1">
                <span className={`font-bold text-gray-800 text-2xl`}>
                  {post.title}
                </span>
                <span className={`font-light text-gray-400 text-md mt-1`}>
                  {post.description}
                </span>
                <div className={`mt-4 mb-5`}>
                  <span className={`font-light text-xs text-gray-400`}>
                    {post.date}
                  </span>
                  <span className={`font-semibold text-xs text-[#F36727]`}>
                    &nbsp;#{post.category}
                  </span>
                </div>
              </section>
              <span className="box-border inline-block relative overflow-hidden padding-0 margin-0 border-0">
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail}
                    alt="thumbnail"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    className={`cursor-pointer rounded-lg`}
                  />
                )}
              </span>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PostList;