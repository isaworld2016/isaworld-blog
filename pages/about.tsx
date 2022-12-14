import { useState } from "react";
import Container from "components/layout/Container";
import Intro from "components/organism/Intro";
import History from "components/organism/History";
import { NextSeo } from "next-seo";

const About = () => {
  const [currSelect, setCurrSelect] = useState<number>(1);
  const selectList = [
    { label: "소개", key: 1 },
    { label: "이력", key: 2 }
  ];
  return (
    <>
      <NextSeo
        title="about"
        description="All about Developer Isa"
        canonical="https://isaworld-blog.vercel.app/about"
        openGraph={{
          url: "https://isaworld-blog.vercel.app/about",
        }}
      />
      <Container>
        <div className={`about__wrap`}>
          <div className={`about__headline`}>
            {selectList.map(({ label, key }) => (
              <button
                className={currSelect == key ? "active" : ""}
                onClick={() => setCurrSelect(key)}
                key={key}
              >
                <p>{label}</p>
              </button>
            ))}
          </div>
          <div className={`flex flex-col items-center justify-center xl:flex-row`}>
            {currSelect == 1 ? (
              <div className={`mx-5 flex justify-center pt-8 leading-loose`}>
                <Intro />
              </div>
            ) : (
              <div className={`mt-10 flex h-[70vh] justify-center overflow-y-auto px-5 md:px-14 xl:h-[75vh] w-[60vw]`}>
                <History />
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
