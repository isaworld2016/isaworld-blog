import Image from "next/image";

const Bottom = () => {
  return (
    <div
      className="mt-5 mb-1"
      onClick={() => window.open("https://github.com/isaworld2016", "_blank")}
    >
      <Image
        src={`/github.png`}
        alt="@isaworld2016"
        width={35}
        height={35}
        className={`rounded-3xl cursor-pointer`}
      />
    </div>
  );
};

export default Bottom;
