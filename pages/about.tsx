import { useState } from "react";
import Container from "../components/layout/Container";
import Image from "next/image";

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
        <div className="about__content__wrap">
          <div className="about__content">
            {currSelect == 1 ? (
              <>
                <Image
                  src={`/public/assets/images/never.jpg`}
                  alt="about-me"
                  width={40}
                  height={40}
                  objectFit={`cover`}
                  className={`rounded-full`}
                />
              </>
            ) : (
              <>이력</>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};


export default About;
