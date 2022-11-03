import { IEndIcon } from "./interface/IIcon";

function FirstIcon({ width, height, fill, toLeftYn }: IEndIcon) {
  return (
    <svg
    transform="rotate(180)"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
      height={height}
      viewBox="0 0 24 24"
      >
      <path
        d="M19 12l-18 12v-24l18 12zm4-11h-4v22h4v-22z"
        fill={fill}
      />
    </svg>
  )
}

export default FirstIcon;