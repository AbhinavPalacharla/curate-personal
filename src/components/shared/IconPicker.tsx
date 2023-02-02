import { Roboto_Mono } from "@next/font/google";
import { City } from "iconoir-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { getIconByName, IconName, iconNames } from "@/utils";

const robotoMono = Roboto_Mono();

const IconPicker: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <h1
        className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
      >
        Icon
      </h1>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="ring-0 outline-none">
          <div className="border-[1px] border-[#282828] p-2 rounded-md text-[#969696] hover:text-white">
            <City height={20} width={20} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={10}
            align="start"
            className="border-[1px] border-[#282828] bg-black/[0.5] shadow-md shadow-black/80 backdrop-blur-md flex flex-wrap h-52 w-[15.2rem] overflow-y-scroll p-3 rounded-md scrollbar-hide"
          >
            {iconNames.map((iconName) => {
              return (
                <DropdownMenu.Item
                  key={iconName}
                  className="hover:ring-0 hover:outline-none ring-0 outline-none"
                >
                  {getIconByName({
                    name: iconName as IconName,
                    css: "lg:hover:text-white active:text-white p-2 lg:hover:bg-[#282828] active:bg-[#282828] border-[0.1px] border-[#141414] rounded-md",
                    size: 36,
                  })}
                </DropdownMenu.Item>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export { IconPicker };
