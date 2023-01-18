import { allOthers, allStyles, allDocuments, allIsas } from "contentlayer/generated";
import { NavLinks } from "common/interface/NavLinks";

const blogList: NavLinks[] = [
  { title: "전체", link: "/blog", length: allDocuments.length, searchType: "ALL" },
  { title: "Style", link: "/style", length: allStyles.length, searchType: "STYLE" },
  { title: "Other", link: "/other", length: allOthers.length, searchType: "OTHER" },
  { title: "Isa", link: "/isa", length: allIsas.length, searchType: "ISA" },
];

export default blogList;