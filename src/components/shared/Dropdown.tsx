import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

type Item = { name: string; icon?: React.ReactNode; onClick?: () => void };

const DropdownItem: React.FC<Item> = ({ name, icon, onClick }) => {
  return (
    <DropdownMenu.Item className="hover:ring-0 hover:outline-none ring-0 outline-none">
      <div className="w-48 active:bg-[#282828] lg:hover:bg-[#282828]  rounded-md px-2 py-2">
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
  items?: Array<Item>;
}> = ({ children, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="border-[1px] border-[#292929] bg-black/[0.83] backdrop-blur-md p-2 rounded-lg shadow-md shadow-black/80 flex flex-col gap-y-1 max-h-52"
          sideOffset={10}
          align="start"
        >
          {items ? (
            <div className="flex flex-col gap-y-1 overflow-y-scroll scrollbar-hide">
              {items?.map((item, index) => (
                <DropdownItem
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  onClick={item.onClick}
                />
              ))}
            </div>
          ) : (
            <div className=" flex flex-row h-full items-center justify-center ">
              <h1 className="text-[#969696] test-sm font-light w-48 p-2 flex flex-row justify-center">
                No Items :(
              </h1>
            </div>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export { Dropdown };
