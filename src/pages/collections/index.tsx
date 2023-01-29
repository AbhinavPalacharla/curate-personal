import type { NextPageWithLayout } from "@/components/layout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import type { IconName } from "@/utils/iconNames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CurateHero from "/public/curate-hero.svg";
import { getIconByName } from "@/utils";

const Collection: React.FC<{
  icon: IconName;
  name: string;
  members: number;
}> = ({ icon, name, members }) => {
  return (
    <div className="flex flex-row items-center relative py-1">
      {getIconByName({ name: icon })}
      <h1 className="text-white text-sm ml-8 w-40 truncate">{name}</h1>
      <h1 className="text-[#969696] text-sm font-light italic ml-8">
        {members > 1 ? `${members} members` : "Just You..."}
      </h1>
      <button className="text-[#969696] text-sm font-light underline underline-offset-1 absolute right-2">
        edit
      </button>
    </div>
  );
};

const Page: NextPageWithLayout = (props: any) => {
  const { data: session } = useSession();

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

      return collections;
    },
    {
      initialData: props.collections,
      refetchInterval: 1,
    }
  );

  return (
    <div className="flex flex-row lg:gap-x-32 lg:items-center justify-center lg:h-screen">
      <div className="flex flex-col mt-24 ml-8 lg:m-0">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-3xl font-light italic text-white">
            Dead simple inspiration
          </h1>
          <h1 className="text-3xl font-light italic text-white">curation</h1>
        </div>
        <h1 className="w-[20rem] md:w-[26rem] text-sm text-[#969696] mt-6">
          Curate is a simple service to compile all your inspiration into one
          feed
        </h1>
        <div className="mt-12">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#969696] text-sm font-light">Collections</h1>
              <h1 className="text-[#969696] text-sm font-light underline underline-offset-1">
                New Collection
              </h1>
            </div>
            <div className="flex flex-col h-40 overflow-y-scroll">
              {data.map((collection: any) => (
                <>
                  <div className="divide-y divide-dotted divide-[#282828]">
                    <div />
                    <div />
                  </div>
                  <Collection
                    key={collection.id}
                    icon={collection.icon}
                    name={collection.name}
                    members={(() => {
                      let users = 0;
                      collection.roles.forEach((role: any) => {
                        users += role._count.users;
                      });
                      return users;
                    })()}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="invisible lg:visible">
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

  const collections = data.map((role) => {
    return role.collection;
  });

  return {
    props: {
      session,
      collections,
    },
  };
}

export default Page;
