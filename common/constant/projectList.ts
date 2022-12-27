interface ProjectList {
  title: string;
  period: string;
  environment: Array<string>;
  mainJob: Array<string>;
}
export const projectList: ProjectList[] = [
  {
    title: "Alliex 베트남 결제중계 시스템 구축",
    period: "2020.02 - 2021.03(1년 2개월)",
    environment: [
      "DB: Oracle",
      "Source Management: SVN",
      "CI/CD: Jenkins",
      "Web Server: Nginx(Websocket), WebToB",
      "Backend: Jeus(Springboot)",
      "Backend Language: JAVA(JDK8)",
      "Frontend(백오피스): Vue.js(2.x)",
      "Issue Tool: Redmine",
    ],
    mainJob: [
      "백오피스 웹 UI/API 개발(공통)",
      "업무 개발자와 소통하여 필요한 공통 컴포넌트를 만들고 리팩토링 했습니다.",
      "퍼블리셔 부재시, 스타일링 코드를 추가, 수정 및 리팩토링 했습니다.정적인 스타일링을 동적으로 수정하였습니다.",
      "접속 URL과 디바이스에 따라 동적으로 화면을 분기 했습니다.",
      "반응형 웹 개발로 다양한 디바이스에 효과적으로 대응하였습니다.",
      "오픈 소스 라이브러리를 고객사 요건에 맞춰 커스터마이징했습니다.",
      "모니터링 웹에서 Web Socket을 활용하여 실시간으로 데이터를 렌더링 하였습니다.",
    ]
  },
  {
    title: "VAN PG",
    period: "2021.04 - 2022.02(11개월)",
    environment: [
      "DB: MariaDB",
      "CI/CD: Jenkins",
      "Container: Kubernates, Docker",
      "Backend: Spring boot",
      "Backend Language: JAVA(JDK11), Hibernate",
      "Frontend: Vue.js(2.x)",
    ],
    mainJob: [
      "고도화 작업: 레거시 소스에 코드 컨벤션을 정의하고 전체 코드에 적용하였습니다.",
      "유료 테이블 라이브러리에 종속되어있던 컴포넌트를 자체 개발하였습니다.",
      "PG 백오피스에서 주로 사용될 업무 메뉴들을 기획/설계하고 개발하였습니다.",
      "Hibernate(JPA)로 서버 코드를 기술하고 CI/CD(Jenkins)로 자동 통합/배포 하였습니다.",
    ]
  },
  {
    title: "CJ PAY 간편결제 시스템구축",
    period: "2022.03 - 2022.09(7개월)",
    environment: [
      "Infra: NCP(네이버 클라우드 플랫폼)",
      "Container: Kubernates / Docker",
      "DB: CloudDB for MSSQL(NCP)",
      "Cache: CloudDB for Redis(NCP)",
      "CI/CD: SourceBuild, SourceDeploy, SourcePipeline(NCP)",
      "Backend: Springboot(Tomcat)",
      "Backend Language: JAVA(JDK11)",
      "Frontend(App): Vue.js(3.x)",
      "Frontend(백오피스): Nexacro N"
    ],
    mainJob: [
      "백오피스 웹 UI / API 개발(공통), 인가 / 인증, 업무 화면 개발",
      "Nexacro 퍼블리셔 부재시, 스타일링 코드를 추가, 수정 및 리팩토링 하였습니다.",
      "KMC 실명인증을 이용한 회원가입 및 로그인 전체를 구현하였습니다.",
      "SMS 전송을 이용한 2차 인증을 구현하였습니다.",
      "JWT를 활용하여 인증을 구현하였습니다.",
    ]
  },
  {
    title: "스마트로 간편결제 시스템구축",
    period: "2022.10 - 2022.12 (3개월)",
    environment: [
      "DB: MariaDB",
      "CI / CD: Jenkins",
      "Container: Kubernates / Docker",
      "Backend: Spring boot",
      "Backend Language: JAVA(JDK11), Hibernate",
      "Frontend(백오피스): Vue.js(2.x)",
      "Frontend(SDK): Vanilla Javascript",
      "Frontend(SDK Wrapper): Vue.js(3.x)",
      "Issue Tool: Jira",
    ],
    mainJob: [
      "백오피스 웹: 관리자 화면의 모든 기능을 테스트하고 버그 패치하였습니다.",
      "Google OTP 인증을 활용하여 2차 로그인을 구현하였습니다.",
      "Figma로 작성 되어있는 화면을 Vanilla Javascript로 동적 구현하였습니다.",
      "모의해킹 결과에 따라 로그인 기능을 보완하였습니다.",
    ]
  }
]