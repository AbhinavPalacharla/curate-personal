"use client";
import { FC } from "react";
import { Plus } from "iconoir-react";
import { Roboto_Mono } from "@next/font/google";
import { Dropdown } from "@/components/shared";

const robotoMono = Roboto_Mono();

const Tag: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="rounded-full border-[1px] border-[#292929] px-2 py-[0.5]">
      <h1
        className={`text-[#969696] tracking-wide font-light text-sm w-max ${robotoMono.className}`}
      >
        {name}
      </h1>
    </div>
  );
};

const Tags: FC<{ tags?: Array<string> }> = ({ tags }) => {
  return (
    <div className="flex flex-row items-center gap-x-1 lg:gap-x-2">
      <div className="flex flex-row items-center gap-x-2 w-96 overflow-x-scroll scrollbar-hide">
        {tags?.map((tag, i) => {
          return <Tag key={i} name={tag} />;
        })}
      </div>
      <Dropdown>
        <button className="flex flex-row items-center hover:text-white text-[#969696] ring-0 outline-none">
          <Plus className="h-4" />
          <h1 className="text-sm font-light w-max">Add Tag</h1>
        </button>
      </Dropdown>
    </div>
  );
};

export { Tags };
