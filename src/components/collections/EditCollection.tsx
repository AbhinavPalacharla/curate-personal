import Avatar from "boring-avatars";
import { IconPicker } from "@/components/shared/NewIconPicker";
import { Divider } from "@/components/shared";
import { useState, useEffect } from "react";
import { IconName, getIconByName } from "@/utils";
import { City, LongArrowUpLeft, Plus } from "iconoir-react";
import CurateHero from "/public/curate-hero.svg";
import { Roboto_Mono } from "@next/font/google";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Type } from "@prisma/client";

const robotoMono = Roboto_Mono();

const User: React.FC<{
  id: string;
  name: string;
  username: string;
}> = ({ id, name, username }) => {
  return (
    <div className="flex flex-row items-center relative py-1">
      <Avatar
        name={username}
        colors={["#F88F79", "#F6AA93", "#E94E77", "#F4EAD5", "#D68189"]}
        size={25}
      />
      <h1 className="text-white text-sm ml-8 w-36 truncate">{name}</h1>
      <button
        className="text-[#969696] hover:text-white ml-6 pr-0.5 text-sm font-light italic invisible lg:visible"
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

const EditCollection: React.FC<{
  collectionId: string;
  setEditCollection: (id: string) => void;
}> = ({ collectionId, setEditCollection }) => {
  const [icon, setIcon] = useState<IconName>();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(
    [collectionId],
    async () => {
      const {
        data,
      }: {
        data: {
          id: string;
          name: string;
          icon: IconName;
          roles: Array<{
            type: Type;
            users: Array<{
              id: string;
              name: string;
              username: string;
            }>;
          }>;
        };
      } = await axios.get(
        `/api/collection/get.editCollection?collectionId=${collectionId}`
      );

      return data;
    },
    {
      refetchInterval: 1,
    }
  );

  const editCollection = useMutation(
    ({ ...data }: { icon?: IconName; name?: string }) => {
      return axios.post("/api/collection/edit.collection", {
        id: collectionId,
        ...data,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([collectionId]);
      },
    }
  );

  useEffect(() => {
    icon && editCollection.mutate({ icon: icon! });
  }, [icon]);

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
            height={20}
            width={20}
          />
          <h1 className="text-sm text-[#969696] group-hover:text-white font-light">
            Collections
          </h1>
        </button>
        <div className="flex flex-row gap-x-3">
          {getIconByName({
            name: icon ?? data?.icon,
            nullIcon: { size: "SMALL" },
          })}
          <h1 className="text-sm text-[#969696] font-light">{data?.name}</h1>
        </div>
      </div>
      <div className="my-4">
        <Divider />
      </div>
      <div>
        <div className="flex flex-row items-center gap-x-12">
          <div className="flex flex-row items-center gap-x-4">
            <h1
              className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
            >
              Icon
            </h1>
            <IconPicker setIcon={setIcon}>
              <div className="border-[1px] border-[#282828] p-2 rounded-md">
                {getIconByName({
                  name: icon ?? data?.icon,
                  nullIcon: { size: "LARGE" },
                  css: "text-[#969696] hover:text-white",
                })}
              </div>
            </IconPicker>
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <h1
              className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
            >
              Name
            </h1>
            <h1 className="text-sm text-[#969696] hover:text-white">
              {data?.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 px-2">
        <div className="flex flex-row items-center justify-between">
          <button className="flex flex-row gap-x-2 group"></button>
          <button className="flex flex-row items-center gap-x-1 group">
            <Plus
              className="text-[#969696] group-hover:text-white"
              height={18}
              width={18}
            />
            <h1 className="text-sm text-[#969696] group-hover:text-white font-light">
              Add Member
            </h1>
          </button>
        </div>
        <div className="my-2">
          <Divider />
        </div>
        <div className="flex flex-col overflow-y-scroll h-40 scrollbar-hide">
          {data?.roles[1].users[1] ? (
            data?.roles[1].users.map((user, i) => (
              <>
                <User
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  username={user.username}
                />
                {i !== data?.roles[1].users.length - 1 && (
                  <div className="py-2" key={i}>
                    <Divider />
                  </div>
                )}
              </>
            ))
          ) : (
            <div className="flex flex-row items-center justify-center pt-2">
              <h1 className="text-[#969696] text-sm font-light italic">
                ~~~ No Users ~~~
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { EditCollection };
