import { Button, Dropdown } from "@/components/shared";
import { getIconByName } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Collection } from "@prisma/client";
import type { IconName } from "@/utils/iconNames";
import { useCollectionStore } from "stores";
import { useState, useEffect } from "react";

const Navbar: React.FC<{ loading: boolean }> = ({ loading }) => {
  const [flash, setFlash] = useState(false);

  const { data, isLoading } = useQuery(
    ["collections"],
    async () => {
      const {
        data,
      }: { data: Array<Pick<Collection, "id" | "name" | "icon">> } =
        await axios.get("/api/collection/get.collections");

      return data;
    },
    {
      refetchInterval: 0,
    }
  );

  const store = useCollectionStore();

  // useEffect(() => {
  //   if (loading === false) {
  //     setFlash(false);
  //   } else {
  //     setTimeout(() => {
  //       setFlash(!flash);
  //     }, 300);
  //   }
  // });

  return (
    <div className="flex flex-row items-center">
      <div className="w-[1%] bg-black/80 backdrop-blur-md" />
      <div
        className={`flex flex-row justify-between items-center px-2 lg:px-12 py-3 mb-8 border-b-[1px] ${
          flash ? "border-[#424242]" : "border-[#282828]"
        } bg-black/80 backdrop-blur-md w-[98%]`}
      >
        <div className="flex flex-row items-center gap-x-2">
          {/* <h1 className="text-white">Loading: {JSON.stringify(loading)}</h1> */}

          <h1 className="text-[#969696] font-light text-sm italic">Index</h1>
          {store.collection && (
            <>
              <h1 className="text-[#969696] font-light text-md italic">/</h1>
              <Dropdown
                items={data?.map((collection) => ({
                  name: collection.name,
                  icon: collection.icon
                    ? getIconByName(collection.icon as IconName)
                    : "",
                  onClick: () => {
                    store.setCollection({
                      id: collection.id,
                      name: collection.name,
                      icon: collection.icon,
                    });
                  },
                }))}
                action={{ name: "Manage Collections", onClick: () => {} }}
              >
                <button className="ring-0 outline-none flex flex-row w-36">
                  <span className="text-[#969696] hover:text-white underline underline-offset-2 text-sm font-light block truncate">
                    {store.collection.name}
                  </span>
                </button>
              </Dropdown>
            </>
          )}
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
