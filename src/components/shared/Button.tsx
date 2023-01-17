import { FC, HTMLAttributes } from "react";

type ButtonPropTypes = {
  name: string;
  type?: "button" | "submit" | "reset";
  style: "primary" | "secondary" | "delete";
  disabled?: boolean;
  size?: "small";
  loading?: boolean;
  css?: HTMLAttributes<HTMLButtonElement>["className"];
  onClick?: () => void;
};

const Button: FC<ButtonPropTypes> = ({
  name,
  style,
  type,
  disabled,
  size,
  loading,
  css,
  onClick,
}) => {
  return style === "primary" ? (
    <button
      className={`${
        size === "small" ? "text-sm" : "text-md"
      } flex flex-row items-center gap-x-2 rounded-md border-[1px] border-[#282828] py-0.5 px-2 font-light ${
        disabled ? "text-[#282828]" : "text-white"
      } ${
        disabled || loading === true ? "" : "hover:bg-white hover:text-black"
      } ${css}`}
      type={type}
      disabled={disabled || loading === true}
      onClick={onClick}
    >
      {/* {loading && (
        <div>
          <CgSpinner className="h-4 w-4 animate-spin" />
        </div>
      )} */}
      {name}
    </button>
  ) : style == "secondary" ? (
    <button
      className={`${
        size === "small" ? "text-sm" : "text-md"
      } px-2 py-0.5 font-light text-[#969696] hover:text-white ${css}`}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  ) : (
    <button
      className={`${
        size === "small" ? "text-sm" : "text-md"
      } text-md px-2 py-0.5 font-light text-[#969696] hover:text-red-500 ${css}`}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export { Button };
