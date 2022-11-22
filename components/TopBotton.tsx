import { useEffect, useState } from 'react';
import UpIcon from "../public/assets/icons/Up";

const TopBotton = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsScroll(true);
    window.removeEventListener("scroll", handleScroll);
  };

  return (
    <>
      {isScroll && (
        <a href="#" className="fixed bottom-5 right-5">
          <UpIcon width="40" height="40" fill="black" />
        </a>
      )}
    </>
  );
}
export default TopBotton;