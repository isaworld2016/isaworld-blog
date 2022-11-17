import Link from "next/link";
import Image from "next/image";

const Bottom = () => {
  return (
    <section className="mt-10 text-right">
      <Link href="https://github.com/isaworld2016">
        <Image
          src={`/github.png`}
          alt="깃허브"
          width={40}
          height={40}
          className={`rounded-3xl hover:cursor-pointer`}
        />
      </Link>
    </section >
  );
}

export default Bottom;