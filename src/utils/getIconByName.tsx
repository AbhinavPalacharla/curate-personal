import * as icons from "iconoir-react";
import type { IconName } from "./iconNames";

const getIconByName = ({
  name,
  css,
  size,
}: {
  name: IconName;
  css?: string;
  size?: number;
}) => {
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
