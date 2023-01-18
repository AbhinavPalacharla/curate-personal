import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import {
  BookmarkEmpty,
  City,
  Gift,
  PerspectiveView,
  SmallLampAlt,
} from "iconoir-react";

type item = { name: string; icon?: React.ReactNode; onClick?: () => void };

const DropdownItem: React.FC<item> = ({ name, icon, onClick }) => {
  return (
    <DropdownMenu.Item className="hover:ring-0 hover:outline-none ring-0 outline-none">
      <div className="w-48 hover:bg-[#282828] rounded-md px-2 py-1">
        <button
          className="flex flex-row items-center gap-x-2 hover:ring-0 hover:outline-none ring-0 outline-none"
          onClick={onClick}
        >
          {icon ? (
            icon
          ) : (
            <span className="text-[#969696] text-sm font-light tracking-tight block w-3 pb-[2px]">
              : :
            </span>
          )}

          <div className="flex flex-row w-40">
            <span className="text-sm text-white font-light block truncate">
              {name}
            </span>
          </div>
        </button>
      </div>
    </DropdownMenu.Item>
  );
};

const Dropdown: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="border-[1px] border-[#292929] bg-black/[0.83] backdrop-blur-md p-2 pr-[0.8rem] rounded-lg shadow-md shadow-black/80 flex flex-col gap-y-1 h-40 overflow-y-scroll"
          sideOffset={10}
          align="start"
        >
          <DropdownItem
            name="Architecture Inspo."
            icon={<City className="text-[#969696] h-[0.95rem] w-[0.95rem]" />}
          />
          <DropdownItem
            name="Interior Design"
            icon={
              <SmallLampAlt className="text-[#969696] h-[0.95rem] w-[0.95rem]" />
            }
          />
          <DropdownItem
            name="Read Later"
            icon={
              <BookmarkEmpty className="text-[#969696] h-[0.95rem] w-[0.95rem]" />
            }
          />
          <DropdownItem
            name="UI Inspiration"
            icon={
              <PerspectiveView className="text-[#969696] h-[0.95rem] w-[0.95rem]" />
            }
          />
          <DropdownItem
            name="Gift Ideas"
            icon={<Gift className="text-[#969696] h-[0.95rem] w-[0.95rem]" />}
          />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export { Dropdown };
