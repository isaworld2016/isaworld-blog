import { IEndIcon } from "./interface/IIcon";

function EndIcon({ width, height, fill, toLeftYn }: IEndIcon) {
  return (
    <svg
      className={toLeftYn ? "asdf" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        d = "M11 12l-11 7v-14l11 7zm0-7v14l10-7-10-7zm13 1h-3v12h3v-12z"
        fill={fill}
      />
    </svg>
  )
}

export default EndIcon;