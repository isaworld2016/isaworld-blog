import metadata from "data/metadata";
import Image from "next/image";

const Bottom = () => {
  const github = metadata.author[0].contacts.github;
  const mail = metadata.author[0].contacts.email;

  return (
    <div className={`footer`}>
      <div className={`footer__container`}>
        <div className={`footer-left`}>
          <div className={`footer-left__lists`}>
            <ul className={`footer-left__list`}>
              <li onClick={() => window.open(`${github}`, "_blank")}>
                <Image
                  src={`/images/github.png`}
                  alt="@isaworld2016"
                  width={28}
                  height={28}
                  className={`cursor-pointer`}
                />
              </li>
              <li>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={`/images/mail.png`}
                    alt={mail}
                    width={23}
                    height={23}
                    className={`cursor-pointer`}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`footer-right`}>
          <p>버그가 많다 하되</p>
          <p>Stack OverFlow 아래 뫼이로다</p>
        </div>
      </div>
      <div className={`copy-right`}>{metadata.copyright}</div>
    </div>
  );
};

export default Bottom;
