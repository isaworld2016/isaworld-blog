import { Icon as HamburgerIcon } from "./interface/Icon";

function HamburgerIcon({ width, height, fill }: HamburgerIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
        fill={fill}
      />
    </svg>
  );
}

export default HamburgerIcon;