import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { NullIcon } from "./NullIcon";

type Item = { name: string; icon?: React.ReactNode; onClick?: () => void };

const DropdownItem: React.FC<Item> = ({ name, icon, onClick }) => {
  return (
    <DropdownMenu.Item className="hover:ring-0 hover:outline-none ring-0 outline-none">
      <button
        className="w-48 active:bg-[#141414] lg:hover:bg-[#141414]  rounded-md px-2 py-2"
        onClick={onClick}
      >
        <div className="flex flex-row items-center gap-x-2 hover:ring-0 hover:outline-none ring-0 outline-none">
          <div className="w-5">{icon ? icon : <NullIcon size={"SMALL"} />}</div>
          <div className="flex flex-row w-40">
            <span className="text-sm text-white font-light block truncate">
              {name}
            </span>
          </div>
        </div>
      </button>
    </DropdownMenu.Item>
  );
};

const Dropdown: React.FC<{
  children: React.ReactNode;
  items?: Array<Item>;
  action?: { name: string; onClick: () => void };
}> = ({ children, items, action }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="border-[1px] border-[#282828] bg-black/[0.83] backdrop-blur-md p-2 rounded-lg shadow-md shadow-black/80 flex flex-col gap-y-1 max-h-52"
          sideOffset={10}
          align="start"
        >
          <div>
            {items ? (
              <div className="flex flex-col gap-y-1 overflow-y-scroll scrollbar-hide max-h-40">
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
                <h1 className="text-[#969696] text-sm font-light w-48 p-2 flex flex-row justify-center">
                  Loading...
                </h1>
              </div>
            )}
          </div>
          {action && (
            <div className="flex flex-row items-center justify-center pt-2 pb-1 border-t-[1px] border-[#282828]">
              <button
                className="text-[#969696] text-xs font-light hover:text-white"
                onClick={action.onClick}
              >
                {action.name}
              </button>
            </div>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export { Dropdown };
