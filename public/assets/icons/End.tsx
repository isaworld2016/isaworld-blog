import { Icon as EndIcon } from "./interface/Icon";

function EndIcon({ width, height, fill, toLeftYn }: EndIcon) {
  return (
    <svg
      className={toLeftYn ? "icon__previous--rotate-180" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        d="M14 12l-14 9v-18l14 9zm-4-9v4l8.022 5-8.022 5v4l14-9-14-9z"
        fill={fill}
      />
    </svg>
  )
}

export default EndIcon;