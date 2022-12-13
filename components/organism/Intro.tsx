import { introTextList } from "common/constant/introTextList";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={`intro flex flex-row items-center justify-start`}>
      <section className="intro__image">
        <Image
          src={`/images/무표정.jpg`}
          alt="무표정"
          width={300}
          height={300}
        />
      </section>
      <section className="intro__text">
        {introTextList.map((a, key) => (
          <p className="mb-6" key={key}>
            {a}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Intro;
