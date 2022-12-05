import { useEffect, useState } from 'react';
import UpIcon from "../public/assets/icons/Up";

const TopBotton = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    setIsScroll(true);
    window.removeEventListener("scroll", handleScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isScroll && (
        <a href="#" className="fixed bottom-5 right-5">
          <UpIcon width="35" height="35" fill="black" />
        </a>
      )}
    </>
  );
}
export default TopBotton;