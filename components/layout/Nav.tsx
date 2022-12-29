import navlinks from "data/navlinks";
import Link from "next/link";
import { useRouter } from "next/router";
import SEO from "seo.config";

const Nav = () => {
  const currPath = useRouter().pathname;
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a
            className={`mr-5 ${
              nav.link == currPath
                ? `text-[${
                    SEO.additionalMetaTags.filter(
                      (a) => a.name == "theme-color"
                    )[0].content
                  }] font-semibold`
                : ``
            }`}
          >
            {nav.title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;