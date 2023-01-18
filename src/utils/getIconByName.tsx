import * as icons from "iconoir-react";
import type { IconName } from "./iconNames";

const getIconByName = (name: IconName) => {
  const Icon = icons[name as keyof typeof icons] as React.FC<{
    className: string;
  }>;

  return <Icon className="text-[#969696] h-[0.95rem] w-[0.95rem]" />;
};

export { getIconByName };
