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
import { City, LongArrowUpLeft, Plus } from "iconoir-react";
import { Roboto_Mono } from "@next/font/google";
import Avatar from "boring-avatars";
import { IconPicker } from "@/components/shared";

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

const Page: NextPageWithLayout = (props: any) => {
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
          <div className="flex flex-row items-center justify-between">
            <button className="flex flex-row gap-x-2 group">
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
              {/* <div className="flex flex-row items-center gap-x-4">
                <h1
                  className={`text-sm text-[#969696] font-light ${robotoMono.className}`}
                >
                  Icon
                </h1>
                <div className="border-[1px] border-[#282828] p-2 rounded-md text-[#969696] hover:text-white">
                  <City height={20} width={20} />
                </div>
              </div> */}
              <IconPicker />
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
                <h1 className="text-sm text-[#969696] font-light">
                  Add Member
                </h1>
              </div>
            </div>
            <div className="divide-y divide-dotted divide-[#282828] py-2">
              <div />
              <div />
            </div>
            <div className="flex flex-col overflow-y-scroll h-40 scrollbar-hide">
              <User
                id="@madiklob"
                name="Madeline Kloberdanz"
                username="madiklob"
              />
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
          {/* <button className="border-[1px] border-red-500 px-1 py-0.5 rounded-md mt-8">
            <h1 className="text-red-500 text-sm font-light">
              Delete Collection
            </h1>
          </button> */}
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

// export async function getServerSideProps(context: any) {
//   const session = await unstable_getServerSession(
//     context.req,
//     context.res,
//     authOptions
//   );

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: false,
//       },
//     };
//   }

//   if (!session.user.username) {
//     return {
//       redirect: {
//         destination: "/register",
//         permanent: false,
//       },
//     };
//   }

//   const { data } = (await axios.get(
//     // `https://curate-personal.vercel.app/api/collection/get.collections?userId=${session.user.id}`
//     `http://localhost:3000/api/collection/get.collections?userId=${session.user.id}`
//   )) as {
//     data: Array<{
//       type: "OWNER" | "MEMBER";
//       collection: {
//         id: string;
//         name: string;
//         icon: IconName;
//       };
//     }>;
//   };

//   const collections = data.map((role) => {
//     return role.collection;
//   });

//   return {
//     props: {
//       session,
//       collections,
//     },
//   };
// }

export default Page;
