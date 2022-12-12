interface ProjectList {
  title: string;
  period: string;
  first: Array<string>;
  second: Array<string>;
  third: Array<string>;
}
const projectList: ProjectList[] = [
  {
    title: "Alliex 베트남 결제중계 시스템 구축",
    period: "2020.02 - 2021.03(1년 2개월)",
    first: [
      "DB: Oracle",
      "Source Management: SVN",
      "CI/CD: Jenkins",
      "Web Server: Nginx(Websocket), WebToB",
      "Backend: Jeus(Springboot)",
      "Backend Language: JAVA(JDK8)",
      "Frontend(백오피스): Vue.js(2.x)",
      "Issue Tool: Redmine",
    ],
    second: ["백오피스 브라우저용/모바일용 웹, 모니터링 웹"],
    third: [
      "백오피스 UI/API 개발(공통)",
      "업무 개발자와 소통하여 필요한 공통 컴포넌트를 만들고 리팩토링 했습니다.",
      "퍼블리셔 부재시, 스타일링 코드를 추가, 수정 및 리팩토링 했습니다. 정적인 스타일링을 동적으로 리팩토링 했습니다.",
      "접속 URL과 디바이스에 따라 동적으로 화면을 분기 했습니다.",
      "반응형 개발로 다양한 디바이스에 대응하였습니다.",
      "오픈 소스라이브러리를 고객사 요건에 맞춰 커스터마이징했습니다.",
      "모니터링 웹에서 Web socket을 활용하여 실시간으로 데이터를 렌더링 하였습니다.",
      "화면정의서, 단위테스트, 화면 매뉴얼 등을 작성하였습니다.",
    ]
  },
  {
    title: "VAN PG",
    period: "2021.04 - 2022.02(11개월)",
    first: [
      "DB: MariaDB",
      "CI/CD: Jenkins",
      "Container: Kubernates, Docker",
      "Backend: Spring boot",
      "Backend Language: JAVA(JDK11), Hibernate",
      "Frontend: Vue.js(2.x)",
    ],
    second: [
      "PG 백오피스 웹"
    ],
    third: [
      "고도화 작업: 여러 명에 의해 다른 스타일로 작성되어있던 레거시한 소스를 코드 컨벤션을 정의하고 전체 코드에 적용하였습니다.",
      "MSA 아키텍처를 적용하여 업무 서버를 분리하고 도커 컨테이너로 배포하였습니다.",
      "유료 라이브러리에 종속되어있던 UI를 자체 개발하였습니다.(테이블)",
      "PG 백오피스에서 주로 사용될 업무 메뉴들을 기획하고 개발하였습니다.",
      "Hibernate(JPA)로 서버 코드를 기술하고 CI/CD(Jenkins)로 자동 통합/배포 하였습니다.",
    ]
  },
  {
    title: "CJ PAY 간편결제 시스템구축",
    period: "2022.03 - 2022.09(7개월)",
    first: [
      "Infra: NCP(네이버 클라우드 플랫폼)",
      "Container: Kubernates / Docker",
      "DB: CloudDB for MSSQL(NCP)",
      "Cache: CloudDB for Redis(NCP)",
      "CI/CD: SourceBuild, SourceDeploy, SourcePipeline(NCP)",
      "Source Management: SourceCommit(NCP) - Git Client",
      "Backend: Springboot(Tomcat)",
      "Backend Language: JAVA(JDK11)",
      "Frontend(App): Vue.js(3.x)",
      "Frontend(백오피스): Nexacro N"
    ],
    second: [
      "CJ PAY 간편결제 앱, 백오피스 웹"
    ],
    third: [
      "백오피스 UI/API 개발(공통), 인가/인증",
      "기존에 Excel로 작업하던 화면 설계서를 카카오 Oven으로 작업할 것을 제안하여 개발자 간의 업무 효율을 높혔습니다.",
      "백오피스 팀 리더가 부재한 상황에서 적극적으로 리딩하고 소통하였습니다.",
      "Nexacro 퍼블리셔 부재시, 스타일링 코드를 추가, 수정 및 리팩토링 하였습니다.",
      "Nexacro를 활용하여 백오피스 UI/API를 개발했습니다.",
      "KMC 실명인증을 이용한 회원가입 및 로그인 전체를 구현하였습니다.",
      "SMS 전송을 이용한 2차 인증을 구현하였습니다.",
      "JWT를 활용하여 인증을 구현하였습니다.",
      "화면정의서, 단위테스트, 화면 매뉴얼 등을 작성하였습니다.",
    ]
  }
]

const History = () => {
  return (
    <div className="w-full text-left">
      {projectList.map(({ title, period, first, second, third }, key) => (
        <section className="first:mt-0 mt-20 shadow-lg px-10 py-6 leading-relaxed" key={key}>
          <section className="mb-5">
            <strong className="mt-10 w-full">[{title}]</strong>
            <p className="text-neutral-400 text-sm">{period}</p>
          </section>
          <section className="mb-3">
            <p>1. 환경</p>
            {first.map((f) => (
              <>
                <div>&nbsp;{`- ${f}`}</div>
              </>
            ))}
          </section>
          <section className="mb-3">
            <p>2. 결과물</p>
            {second.map((s) => (
              <>
                <div>&nbsp;{`: ${s}`}</div>
              </>
            ))}
          </section>
          <section className="mb-3">
            <p>3. 수행 업무</p>
            {third.map((t) => (
              <>
                <div>&nbsp;{`- ${t}`}</div>
              </>
            ))}
          </section>
        </section>
      ))}
    </div>
  );
};
export default History;
