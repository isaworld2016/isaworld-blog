import DownIcon from "public/assets/icons/Down";

interface props {
  fn: () => void
}

const DownButton = ({ fn }: props) => {
  return (
    <>
      <button onClick={fn}>
        <DownIcon width="20" height="20" fill="black" />
      </button>
    </>
  );
};
export default DownButton;
