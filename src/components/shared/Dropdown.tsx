import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

const DropdownItem: React.FC<{ name: string; onClick?: () => void }> = ({
  name,
  onClick,
}) => {
  return (
    <DropdownMenu.Item className="hover:ring-0 hover:outline-none ring-0 outline-none">
      <div className="w-48 hover:bg-[#282828] rounded-md px-2 py-1">
        <button
          className="flex flex-row items-center gap-x-2 hover:ring-0 hover:outline-none ring-0 outline-none"
          onClick={onClick}
        >
          <span className="text-[#969696] text-sm font-light tracking-tight block w-3 pb-[2px]">
            : :
          </span>
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

const Dropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="border-[1px] border-[#292929] bg-black/[0.80] backdrop-blur-md p-2 rounded-lg shadow-md shadow-black/80"
          sideOffset={10}
          align="start"
        >
          <div className="flex flex-col gap-y-1 h-36 overflow-y-scroll">
            <DropdownItem name="Architecture Inspo." />
            <DropdownItem name="Interior Design" />
            <DropdownItem name="Read Later" />
            <DropdownItem name="Architecture Inspo.sdlfjdskjfdksjfs" />
            <DropdownItem name="Interior Design" />
            <DropdownItem name="Read Later" />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export { Dropdown };
