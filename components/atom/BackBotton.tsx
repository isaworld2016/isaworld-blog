import BackIcon from "public/assets/icons/Back";
import { useRouter } from "next/router";

const BackBotton = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()}>
        <BackIcon width="35" height="35" fill="black" />
      </button>
    </>
  );
};
export default BackBotton;
