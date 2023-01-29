import { Roboto_Mono } from "@next/font/google";
import { City, LongArrowUpLeft, Plus } from "iconoir-react";
import * as Select from "@radix-ui/react-select";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { getIconByName, IconName, iconNames } from "@/utils";

const robotoMono = Roboto_Mono();

const Page = () => {
  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <div className="flex flex-row items-center gap-x-4">
        <h1
          className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
        >
          Icon
        </h1>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div className="border-[1px] border-[#282828] p-2 rounded-md text-[#969696] hover:text-white">
              <City height={20} width={20} />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              sideOffset={10}
              align="start"
              className="border-[1px] border-[#282828] bg-black/[0.83] shadow-md shadow-black/80 backdrop-blur-md flex flex-wrap h-80 w-80 overflow-y-scroll p-3 rounded-md"
            >
              {iconNames.map((iconName) => {
                return (
                  <DropdownMenu.Item className="hover:ring-0 hover:outline-none ring-0 outline-none">
                    {getIconByName({
                      name: iconName as IconName,
                      css: "hover:text-white p-2 hover:bg-[#141414] border-[0.1px] border-[#141414] rounded-md",
                      size: 36,
                    })}
                  </DropdownMenu.Item>
                );
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Page;
