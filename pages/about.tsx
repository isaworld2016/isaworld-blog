import { useState } from "react";
import Container from "../components/layout/Container";
import Intro from "components/organism/Intro";
import History from "components/organism/History";

const About = () => {
  const [currSelect, setCurrSelect] = useState<number>(1);
  const selectList = [
    { label: "소개", key: 1 },
    { label: "이력", key: 2 }
  ];
  return (
    <Container>
      <div className="about__wrap">
        <div className="about__headline">
          {selectList.map(({ label, key }) => (
            <button
              className={currSelect == key ? "active" : ""}
              onClick={() => setCurrSelect(key)}
              key={key}
            >
              <span>{label}</span>
              <div className="about__wrap--underline"></div>
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center xl:flex-row">
          {currSelect == 1 ? (
            <div className="mx-5 flex justify-center pt-5 md:mx-14 leading-loose">
              <Intro />
            </div>
          ) : (
            <div className="mt-10 flex h-[55vh] justify-center overflow-y-auto px-5 md:px-14 xl:h-[75vh]">
              <History />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default About;
