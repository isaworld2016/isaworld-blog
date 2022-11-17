import { Icon as NextIcon } from "./interface/Icon";

function NextIcon({ width, height, fill, toLeftYn }: NextIcon) {
  return (
    <svg
      className={toLeftYn ? "icon__next--rotate-180" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        d="M21 12l-18 12v-24z"
        fill={fill}
      />
    </svg>
  )
}

export default NextIcon;