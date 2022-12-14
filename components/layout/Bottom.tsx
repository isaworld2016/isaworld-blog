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
                  width={30}
                  height={30}
                  className={`rounded-3xl cursor-pointer`}
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
                    width={30}
                    height={30}
                    className={`rounded-3xl cursor-pointer`}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`footer-right`}>
          <p>태산이 높다 하되</p>
          <p>하늘 아래 뫼이로다</p>
        </div>
      </div>
      <div className={`copy-right`}>
        ©2022 isaworld - All Right Reserved
      </div>
    </div>
  );
};

export default Bottom;
