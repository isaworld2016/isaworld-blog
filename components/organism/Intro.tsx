import Image from "next/image";
const introTextList = [
  `안녕하세요. 디자이너의 감각을 갖춘 프론트엔드 웹 개발자 이지혜입니다.`,
  "1인 기업 편집 디자이너 활동하던 중, 사용자와 동적으로 소통할 수 있는 웹 개발의 매력에 빠져 새로운 길을 시작하였습니다.",
  "팀으로 활동하는 개발자에게 가장 중요한 요소는 소통 능력이라고 생각합니다. 잘못 이해하고 만든소스는 누구도 만족시킬 수 없기 때문입니다. 추상적인 개념이 오고가는 팀 내에서 시각적인 자료를 적극 활용하여 오해의 간극을 빠르게 줄이는 것에 장점을 가지고 있습니다.",

]
const Intro = () => {
  return (
    <div className={`flex flex-row items-center justify-start`}>
      <section className="h-[15vw] min-h-[200px] w-[15vw] min-w-[200px] overflow-hidden">
        <Image
          src={`/images/무표정.jpg`}
          alt="무표정"
          width={300}
          height={300}
        />
      </section>
      <section className="text-left">
        {introTextList.map((a, key) => (
          <p className="mb-6" key={key}>{a}</p>
        ))}
        <div
          className="mt-5 mb-1"
          onClick={() =>
            window.open("https://github.com/isaworld2016", "_blank")
          }
        >
          <Image
            src={`/github.png`}
            alt="@isaworld2016"
            width={30}
            height={30}
            className={`rounded-3xl cursor-pointer`}
          />
        </div>
      </section>
    </div>
  );
};
export default Intro;
