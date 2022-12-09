import Image from "next/image";
import Head from "next/head";
import Nav from "./Nav";
import metadata from "data/metadata";
import Bottom from './Bottom';
import Link from "next/link";

const Container = (props: any) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  }
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <Link href={`/`} passHref>
          <div className={`flex flex-row items-center cursor-pointer`}>
            <Image
              src={`/isa.jpeg`}
              alt="isaworld_logo"
              width={40}
              height={40}
              objectFit={`cover`}
              className={`rounded-full`}
            />
          </div>
        </Link>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
      <Bottom />
    </div>
  );
};

export default Container;
