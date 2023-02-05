import { NullIcon } from "@/components/shared";
import * as icons from "iconoir-react";
import type { IconName } from "./iconNames";

const getIconByName = ({
  name,
  css,
  size,
  nullIcon,
}: {
  name?: IconName;
  css?: string;
  size?: number;
  nullIcon?: {
    size: "SMALL" | "REGULAR" | "LARGE";
  };
}) => {
  if (!name) return <NullIcon size={nullIcon?.size} />;
  const Icon = icons[name as keyof typeof icons] as React.FC<{
    className: string;
    height: number;
    width: number;
  }>;

  return (
    <Icon
      className={`text-[#969696] ${css}`}
      height={size ?? 20}
      width={size ?? 20}
    />
  );
};

export { getIconByName };
