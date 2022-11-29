import { useEffect, useState } from 'react';
import BackIcon from "../public/assets/icons/Back";
import { useRouter } from "next/router";

const BackBotton = () => {
  const router = useRouter();
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
        <button onClick={() => router.back()} className="fixed bottom-16 right-5">
          <BackIcon width="35" height="35" fill="black" />
        </button>
      )}
    </>
  );
}
export default BackBotton;