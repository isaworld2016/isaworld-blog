import { useState } from "react";
import Container from "../components/Container";
import Image from "next/image";

const About = () => {
  const [currSelect, setCurrSelect] = useState<number>(1);
  const selectList = [
    { label: "상세설명", key: 1 },
    { label: "후기", key: 2 },
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
                  src={`/sleepingCat.gif`}
                  alt="졸리냥"
                  width={`120`}
                  height={`300`}
                  objectFit="cover"
                />
              </>
            ) : (
              <>
                <Image
                  src={`/prettyCat.gif`}
                  alt="이쁘냥"
                  width={`120`}
                  height={`300`}
                  objectFit="cover"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};


export default About;
