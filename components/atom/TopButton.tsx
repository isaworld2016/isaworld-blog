import { useEffect, useState } from 'react';
import UpIcon from "public/assets/icons/Up";

const TopButton = () => {
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
        <a href="#">
          <UpIcon width="35" height="35" fill="black" />
        </a>
      )}
    </>
  );
}
export default TopButton;