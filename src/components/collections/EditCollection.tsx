import Avatar from "boring-avatars";
import { IconPicker } from "@/components/shared/NewIconPicker";
import { useState } from "react";
import { IconName, getIconByName } from "@/utils";
import { City, LongArrowUpLeft, Plus } from "iconoir-react";
import CurateHero from "/public/curate-hero.svg";
import { Roboto_Mono } from "@next/font/google";
import Image from "next/image";

const robotoMono = Roboto_Mono();

const User: React.FC<{
  id: string;
  name: string;
  username: string;
}> = ({ id, name, username }) => {
  return (
    <div className="flex flex-row items-center relative py-1">
      <Avatar
        name={id}
        colors={["#F88F79", "#F6AA93", "#E94E77", "#F4EAD5", "#D68189"]}
        size={25}
      />
      <h1 className="text-white text-sm ml-8 w-36 truncate">{name}</h1>
      <button
        className="text-[#969696] hover:text-white ml-6 text-sm font-light italic invisible lg:visible"
        onClick={() => {
          navigator.clipboard.writeText(username);
        }}
      >
        @{username}
      </button>
      <button className="text-[#969696] hover:text-red-500 text-sm font-light absolute right-2">
        remove
      </button>
    </div>
  );
};

const EditCollection: React.FC<{ setEditCollection: (id: string) => void }> = ({
  setEditCollection,
}) => {
  const [icon, setIcon] = useState<IconName>();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <button
          className="flex flex-row gap-x-2 group"
          onClick={() => {
            setEditCollection("");
          }}
        >
          <LongArrowUpLeft
            className="text-[#969696] group-hover:text-white"
            height={18}
            width={18}
          />
          <h1 className="text-sm text-[#969696] group-hover:text-white font-light">
            Collections
          </h1>
        </button>
        <div className="flex flex-row gap-x-2">
          <City className="text-[#969696]" height={18} width={18} />
          <h1 className="text-sm text-[#969696] font-light">
            Architecture Inspo.
          </h1>
        </div>
      </div>
      <div className="divide-y divide-dotted divide-[#282828] py-2">
        <div />
        <div />
      </div>
      <div className="mt-4">
        <div className="flex flex-row items-center gap-x-12">
          <div className="flex flex-row items-center gap-x-4">
            <h1
              className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
            >
              Icon
            </h1>
            <IconPicker setIcon={setIcon}>
              <div className="border-[1px] border-[#282828] p-2 rounded-md text-[#969696] hover:text-white">
                {/* <City height={20} width={20} /> */}
                {getIconByName({
                  name: icon,
                  nullIcon: { size: "LARGE" },
                })}
              </div>
            </IconPicker>
          </div>
          {/* <IconPicker /> */}
          <div className="flex flex-row items-center gap-x-4">
            <h1
              className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
            >
              Name
            </h1>
            <h1 className="text-sm text-[#969696] hover:text-white">
              Architecture Inspo.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 px-2">
        <div className="flex flex-row items-center justify-between">
          <button className="flex flex-row gap-x-2 group">
            {/* <h1 className="text-sm text-[#969696] group-hover:text-white font-light">
                  Members
                </h1> */}
          </button>
          <div className="flex flex-row items-center gap-x-1">
            <Plus className="text-[#969696]" height={18} width={18} />
            <h1 className="text-sm text-[#969696] font-light">Add Member</h1>
          </div>
        </div>
        <div className="divide-y divide-dotted divide-[#282828] py-2">
          <div />
          <div />
        </div>
        <div className="flex flex-col overflow-y-scroll h-40 scrollbar-hide">
          <User id="@madiklob" name="Madeline Kloberdanz" username="madiklob" />
          <div className="divide-y divide-dotted divide-[#282828] py-2">
            <div />
            <div />
          </div>
          <User id="@paulb" name="Paul Bokelman" username="paulb" />
          <div className="divide-y divide-dotted divide-[#282828] py-2">
            <div />
            <div />
          </div>
          <User id="@andrewh" name="Andrew Hale" username="andrewh" />

          <div className="divide-y divide-dotted divide-[#282828] py-2">
            <div />
            <div />
          </div>
          <User id="@paulb" name="Paul Bokelman" username="paulb" />
          <div className="divide-y divide-dotted divide-[#282828] py-2">
            <div />
            <div />
          </div>
          <User id="@andrewh" name="Andrew Hale" username="andrewh" />

          <div className="divide-y divide-dotted divide-[#282828] py-2">
            <div />
            <div />
          </div>
          <User id="@paulb" name="Paul Bokelman" username="paulb" />
        </div>
      </div>
    </>
  );
};

export { EditCollection };
