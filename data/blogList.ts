import { allOthers, allNexts, allDocuments } from "contentlayer/generated";
import { NavLinks } from "../common/interface/NavLinks";

const blogList: NavLinks[] = [
  { title: "전체", link: "/blog", length: allDocuments.length, searchType: "ALL" },
  { title: "Next", link: "/next", length: allNexts.length, searchType: "NEXT" },
  { title: "Other", link: "/other", length: allOthers.length, searchType: "OTHER" },
];

export default blogList;