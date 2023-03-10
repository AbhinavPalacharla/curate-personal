import Avatar from "boring-avatars";
import { IconPicker, Divider, Profile } from "@/components/shared";
import { useState, useEffect } from "react";
import { IconName, getIconByName } from "@/utils";
import {
  ArrowRight,
  ArrowRightCircle,
  LongArrowUpLeft,
  Plus,
} from "iconoir-react";
import { Roboto_Mono } from "@next/font/google";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Type } from "@prisma/client";
import { useForm } from "react-hook-form";

const robotoMono = Roboto_Mono();

const User: React.FC<{
  id: string;
  roleId: string;
  name: string;
  username: string;
  collectionId: string;
}> = ({ id, roleId, name, username, collectionId }) => {
  const queryClient = useQueryClient();

  const removeUser = useMutation(
    () => {
      return axios.post("/api/collection/removeUser.collection", {
        userId: id,
        roleId: roleId,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([collectionId]);
      },
    }
  );

  return (
    <div className="flex flex-row items-center relative py-1">
      <Avatar
        name={username}
        colors={["#F88F79", "#F6AA93", "#E94E77", "#F4EAD5", "#D68189"]}
        size={25}
      />
      <h1 className="text-white text-sm ml-8 w-32 truncate">{name}</h1>
      <button
        className="text-[#969696] hover:text-white ml-6 pr-0.5 text-sm font-light italic invisible lg:visible"
        onClick={() => {
          navigator.clipboard.writeText(username);
        }}
      >
        @{username}
      </button>
      <button
        className="text-[#969696] hover:text-red-500 text-sm font-light absolute right-2"
        onClick={() => {
          removeUser.mutate();
        }}
      >
        remove
      </button>
    </div>
  );
};

const AddMember: React.FC<{
  collectionId: string;
  roleId?: string;
  setShowAddMember: (state: boolean) => void;
}> = ({ collectionId, roleId, setShowAddMember }) => {
  const { register, watch, handleSubmit } = useForm({ mode: "onBlur" });

  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery(
    [watch("username")],
    async () => {
      const {
        data,
      }: {
        data: {
          id: string;
          username: string;
        };
      } = await axios.get(`/api/user/get.user?username=${watch("username")}`);

      return data;
    },
    {
      enabled: watch("username") !== undefined,
    }
  );

  const addUser = useMutation({
    mutationFn: () => {
      return axios.post("/api/collection/addUser.collection", {
        userId: data!.id,
        roleId: roleId!,
      });
    },
    onMutate: async () => {
      await queryClient.cancelQueries([collectionId]);

      const previousData = queryClient.getQueryData([collectionId]);

      queryClient.setQueryData([collectionId], (oldData: any) => {
        return {
          roles: oldData.roles.map((role: any) => {
            if (role.id === roleId) {
              return {
                ...role,
                users: [
                  ...role.users,
                  {
                    id: data!.id,
                    username: data!.username,
                    name: data!.username,
                  },
                ],
              };
            } else {
              return role;
            }
          }),
          ...oldData,
        };
      });

      return { previousData };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([collectionId], context!.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries([collectionId]);
      setShowAddMember(false);
    },
  });

  return (
    <div className="flex flex-row items-center gap-x-2">
      {data && (
        <Avatar
          name={data.username}
          colors={["#F88F79", "#F6AA93", "#E94E77", "#F4EAD5", "#D68189"]}
          size={25}
        />
      )}
      <form
        className="flex flex-row items-center"
        onSubmit={handleSubmit((data) => {
          addUser.mutate();
        })}
      >
        <input
          {...register("username")}
          placeholder="@username"
          className="bg-black w-20 text-white placeholder:text-[#969696] text-sm focus:ring-0 focus:outline-none focus:placeholder:text-[#282828]"
        />
        {data && (
          <button type="submit">
            <ArrowRight
              className="text-[#969696] hover:text-white"
              height={20}
              width={20}
              strokeWidth={1.7}
            />
          </button>
        )}
      </form>
    </div>
  );
};

const EditCollection: React.FC<{
  collectionId: string;
  setEditCollection: (id: string) => void;
}> = ({ collectionId, setEditCollection }) => {
  const [icon, setIcon] = useState<IconName>();
  const [addMember, setAddMember] = useState<boolean>(false);

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
            id: string;
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

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

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
          <form
            className="flex flex-row items-center gap-x-4"
            onSubmit={handleSubmit((data) => {
              editCollection.mutate({ name: data.name });
            })}
            onBlur={handleSubmit((data) => {
              editCollection.mutate({ name: data.name });
            })}
          >
            <h1
              className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
            >
              Name
            </h1>
            <input
              className="bg-black text-white placeholder:text-[#969696] hover:text-white text-sm focus:ring-0 focus:outline-none focus:placeholder:text-[#282828]"
              placeholder={data?.name}
              {...register("name")}
            />
          </form>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-row items-center justify-between">
          <h1
            className={`text-[#969696] text-sm font-light ${robotoMono.className}`}
          >
            Members
          </h1>
          {addMember ? (
            <AddMember
              collectionId={collectionId}
              roleId={data?.roles[1]?.id}
              setShowAddMember={setAddMember}
            />
          ) : (
            <button
              className="flex flex-row items-center gap-x-1 group"
              onClick={() => setAddMember(true)}
            >
              <Plus
                className="text-[#969696] group-hover:text-white"
                height={18}
                width={18}
              />
              <h1 className="text-sm text-[#969696] group-hover:text-white font-light">
                Add Member
              </h1>
            </button>
          )}
        </div>
        <div className="my-2">
          <Divider />
        </div>
        <div className="flex flex-col overflow-y-scroll h-40 scrollbar-hide">
          {data?.roles && data?.roles[1]?.users[0] ? (
            data?.roles[1]?.users.map((user, i) => (
              <>
                <User
                  key={user.id}
                  id={user.id}
                  roleId={data?.roles[1].id}
                  name={user.name}
                  username={user.username}
                  collectionId={collectionId}
                />
                {i !== data?.roles[1]?.users.length - 1 && (
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
