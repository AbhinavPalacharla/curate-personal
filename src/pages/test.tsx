import type { FC } from "react";
import * as icons from "iconoir-react";
import { iconNames } from "@/utils/iconNames";

const Page = () => {
  return (
    <div className="flex flex-row flex-wrap gap-x-4">
      {iconNames.map((name: string) => {
        const str = name;
        const Icon = icons[str as keyof typeof icons] as React.FC<{
          className: string;
        }>;
        return (
          <div className="flex flex-col items-center">
            <Icon className="text-[#969696] h-[0.95rem] w-[0.95rem]" />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
