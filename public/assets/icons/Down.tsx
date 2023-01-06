import { Icon as DownIcon } from "./interface/Icon";

function DownIcon({ width, height, fill }: DownIcon) {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
        fillRule="nonzero"
        fill={fill}
      />
    </svg>
  );
}

export default DownIcon;
