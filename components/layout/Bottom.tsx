import Image from "next/image";

const Bottom = () => {
  return (
    <div className={`footer`}>
      <div className={`footer__container`}>
        <div className={`footer-left`}>
          <div className={`footer-left__lists`}>
            <ul className={`footer-left__list`}>
              <li
                onClick={() =>
                  window.open("https://github.com/isaworld2016", "_blank")
                }
              >
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
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=isaworld2016@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={`/images/mail.png`}
                    alt="isaworld2016@gmail.com"
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
      <div className={`copy-right`}>
        ©2022 isaworld - All Right Reserved
      </div>
    </div>
  );
};

export default Bottom;
