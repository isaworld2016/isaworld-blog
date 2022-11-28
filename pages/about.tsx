import { useState } from "react";
import Container from "../components/Container";
import Image from "next/image";

const About = () => {
  const [currSelect, setCurrSelect] = useState<string>("Introduce");
  const selectList = [
    { label: "Introduce", key: 1 },
    { label: "History", key: 2 },
  ];
  return (
    <Container>
      <div className="intro__wrap">
        <div className="intro__headline">
          {selectList.map(({ label, key }) => (
            <button
              className={currSelect == label ? "active" : ""}
              onClick={() => setCurrSelect(label)}
              key={key}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
        <div className="intro__content__wrap">
          <div className="intro__content">
            {currSelect == "Introduce" ? (
              <>
                <Image
                  src={`/sleepingCat.gif`}
                  alt="졸리냥"
                  width={`120`}
                  height={`300`}
                  objectFit="cover"
                />
                이힝
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
                오홍
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};


export default About;
