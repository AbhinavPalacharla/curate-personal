import { Button, Dropdown } from "@/components/shared";
import { getIconByName } from "@/utils";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Collection } from "@prisma/client";
import type { IconName } from "@/utils/iconNames";

const Navbar = () => {
  const { data: session } = useSession();

  const { data, isLoading } = useQuery(
    ["quotes"],
    async () => {
      const {
        data,
      }: { data: Array<Pick<Collection, "id" | "name" | "icon">> } =
        await axios.get("/api/collection/get.collections");

      console.log("data", data);

      return data;
    },
    {
      refetchInterval: 0,
    }
  );

  return (
    <div className="flex flex-row items-center">
      <div className="w-[1%] bg-black/80 backdrop-blur-md" />
      <div className="flex flex-row justify-between items-center px-2 lg:px-12 py-3 mb-8 border-b-[1px] border-[#292929] bg-black/80 backdrop-blur-md w-[98%]">
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="text-[#969696] font-light text-sm italic">Index</h1>
          <h1 className="text-[#969696] font-light text-md italic">/</h1>
          <Dropdown
            items={data?.map((collection) => ({
              name: collection.name,
              icon: collection.icon
                ? getIconByName(collection.icon as IconName)
                : "",
            }))}
          >
            <button className="ring-0 outline-none flex flex-row w-36">
              <span className="text-[#969696] hover:text-white underline underline-offset-2 text-sm font-light block truncate">
                Architecture Inspo
              </span>
            </button>
          </Dropdown>
        </div>
        <Button
          name="New Post"
          style="secondary"
          size="small"
          css="underline underline-offset-2"
        />
      </div>
      <div className="w-[1%] bg-black/80 backdrop-blur-md" />
    </div>
  );
};

export { Navbar };
