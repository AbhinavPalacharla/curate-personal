import type { NextPageWithLayout } from "@/components/layout";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CurateHero from "/public/curate-hero.svg";
import { Plus } from "iconoir-react";
import { useForm } from "react-hook-form";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { getIconByName, IconName, iconNames } from "@/utils";
import { NullIcon } from "@/components/shared";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconPicker } from "@/components/shared/NewIconPicker";

const Divider: React.FC = () => {
  return (
    <div className="divide-y divide-dotted divide-[#282828]">
      <div />
      <div />
    </div>
  );
};

const Collection: React.FC<{
  icon?: IconName;
  name: string;
  members: number;
}> = ({ icon, name, members }) => {
  return (
    <div className="flex flex-row items-center py-4 relative">
      {/* <div className={`${!icon && "pl-1"}`}> */}
      <div className="w-6">{getIconByName({ name: icon })}</div>
      <h1 className="text-white text-sm ml-8 w-40 truncate">{name}</h1>
      <h1 className="text-[#969696] text-sm font-light italic ml-8 invisible lg:visible">
        {members > 1 ? `${members} members` : "Just You..."}
      </h1>
      <button className="text-[#969696] lg:hover:text-white active:text-white text-sm font-light underline underline-offset-1 absolute right-2">
        edit
      </button>
    </div>
  );
};

const NewCollection: React.FC<{
  setShowNewCollection: (state: boolean) => void;
}> = ({ setShowNewCollection }) => {
  const schema = z.object({
    name: z.string().min(1).max(20),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isLoading, isDirty },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const [icon, setIcon] = useState<IconName>();

  const queryClient = useQueryClient();

  const createCollection = useMutation(
    ({ name }: { name: string }) => {
      return axios.post("/api/collection/create.collection", { name, icon });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["collections"]);
        setShowNewCollection(false);
      },
    }
  );

  const SubmitHandler = (data: any) => {
    createCollection.mutate({ name: data.name });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <div className="flex flex-row items-center py-4 relative">
          <IconPicker setIcon={setIcon}>
            <div className="w-6">{getIconByName({ name: icon })}</div>
          </IconPicker>
          <input
            {...register("name")}
            placeholder="New Collection"
            className="bg-black text-white text-sm placeholder:text-[#282828] placeholder:italic ml-8 w-40 border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:ring-[#000000]"
          />
          <div className="absolute right-2 flex flex-row items-center gap-x-4">
            <button
              type="submit"
              className="text-[#969696] lg:hover:text-white active:text-white text-sm font-light underline underline-offset-1"
              // type="submit"
            >
              create
            </button>
            <button
              className="text-[#646464] lg:hover:text-white active:text-white text-sm font-light"
              onClick={() => setShowNewCollection(false)}
            >
              cancel
            </button>
          </div>
        </div>
      </form>
      <Divider />
    </div>
  );
};

const Page: NextPageWithLayout = (props: any) => {
  const { data: session } = useSession();
  const [showNewCollection, setShowNewCollection] = useState(false);

  const { data, isLoading } = useQuery(
    ["collections"],
    async () => {
      const {
        data,
      }: {
        data: Array<{
          type: "OWNER" | "MEMBER";
          collection: {
            id: string;
            name: string;
            icon: IconName;
            roles: Array<{
              _count: { users: number };
            }>;
          };
        }>;
      } = await axios.get("/api/collection/get.collections?type=OWNER");

      const collections = data.map((role) => {
        return role.collection;
      });

      return collections.reverse();
    },
    {
      initialData: props.collections,
      refetchInterval: 1,
    }
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const createCollection = useMutation(
    ({ name }: { name: string }) => {
      return axios.post("/api/collections/create.collection", { name });
    },
    {
      onSuccess: () => {
        console.log("success");
      },
    }
  );

  const SubmitHandler = (data: any) => {
    createCollection.mutate({ name: data.name });
  };

  return (
    <div className="flex flex-row md:gap-x-16 lg:gap-x-32 md:items-center md:h-screen lg:items-center justify-center lg:h-screen">
      <div className="flex flex-col mt-24 ml-8 md:m-0 lg:m-0">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-[1.8rem] font-light italic text-white">
            Dead simple inspiration
          </h1>
          <h1 className="text-[1.8rem] font-light italic text-white">
            curation
          </h1>
        </div>
        <h1 className="w-[20rem] md:w-[26rem] text-sm text-[#969696] mt-6">
          Curate is a simple service to compile all your inspiration into one
          feed
        </h1>
        <div className="mt-12">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#969696] text-sm font-light">Collections</h1>
              <button
                className="flex flex-row items-center gap-x-1 group"
                onClick={() => {
                  setShowNewCollection(true);
                }}
              >
                <Plus
                  className="text-[#969696] lg:group-hover:text-white group-active:text-white"
                  height={18}
                  width={18}
                />
                <h1 className="text-[#969696] lg:group-hover:text-white group-active:text-white text-sm font-light">
                  New Collection
                </h1>
              </button>
            </div>
            <div className="mt-4">
              <Divider />
            </div>
            {showNewCollection && (
              <NewCollection setShowNewCollection={setShowNewCollection} />
            )}
            <div className="flex flex-col h-40 overflow-y-scroll">
              {data.map((collection: any, i: number) => (
                //{[0, 0, 0, 0, 0].map((collection: any, i: number) => (
                <>
                  <Collection
                    key={i}
                    icon={collection.icon}
                    name={collection.name}
                    members={(() => {
                      let users = 0;
                      collection.roles.map((role: any) => {
                        users += role._count.users;
                      });
                      return users;
                    })()}
                  />
                  {/* <Collection
                    key={i}
                    icon={"City"}
                    name={"Architecture Inspo."}
                    members={2}
                  /> */}
                  {i !== data.length - 1 && <Divider key={i} />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="invisible md:visible lg:visible">
        <Image src={CurateHero} alt="logo" />
      </div>
    </div>
  );
};

Page.navbar = false;
Page.footer = false;

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  if (!session.user.username) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }

  const { data } = (await axios.get(
    // `https://curate-personal.vercel.app/api/collection/get.collections?userId=${session.user.id}`
    `http://localhost:3000/api/collection/get.collections?userId=${session.user.id}`
  )) as {
    data: Array<{
      type: "OWNER" | "MEMBER";
      collection: {
        id: string;
        name: string;
        icon: IconName;
      };
    }>;
  };

  const collections = data
    .map((role) => {
      return role.collection;
    })
    .reverse();

  return {
    props: {
      session,
      collections,
    },
  };
}

export default Page;
