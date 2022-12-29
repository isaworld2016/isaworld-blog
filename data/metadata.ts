import { Metadata } from "common/interface/Metadata";
import dayjs from "dayjs";

const now = dayjs();

const metadata: Metadata = {
  title: "Isaworld Blog",
  description: "천재적인 이자님의 블로그",
  author: [
    {
      id: "Isa",
      bio: "software engineer",
      contacts: {
        email: 'isaworld2016@gmail.com',
        github: 'https://github.com/isaworld2016'
      }
    }
  ],
  rowsPerPage: 10,
  locale: 'ko_KR',
  copyright: `ⓒ ${now.format('YYYY')} Isaworld All rights reserved.`,
  theme: {
    colors: {
      primary: "#F36727"
    }
  }
};

export default metadata;