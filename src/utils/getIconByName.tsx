import * as icons from "iconoir-react";
import type { IconName } from "./iconNames";

const getIconByName = (name: IconName) => {
  const Icon = icons[name as keyof typeof icons] as React.FC<{
    className: string;
    height: number;
    width: number;
  }>;

  return <Icon className="text-[#969696]" height={18} width={18} />;
};

export { getIconByName };
