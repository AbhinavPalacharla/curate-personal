import type { NextPageWithLayout } from "@/components/layout";
import CurateHero from "/public/curate-hero.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-row lg:gap-x-32 lg:items-center justify-center lg:h-screen">
      <div className="flex flex-col mt-24 ml-8 lg:m-0">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-3xl font-light text-white italic">
            Dead simple inspiration
          </h1>
          <h1 className="text-3xl font-light italic text-white">curation</h1>
        </div>
        <h1 className="w-[20rem] md:w-[26rem] text-sm text-[#969696] mt-6">
          Curate is a simple service to compile all your inspiration into one
          feed
        </h1>
        <div className="mt-8">
          <div className="group w-min">
            <button
              className="mt-6 flex flex-row items-center justify-center gap-x-4 rounded-md bg-black border-[#282828] border-[1px] group-hover:bg-white px-2.5 py-2 w-max"
              onClick={() => {
                signIn("google");
              }}
            >
              <FaGoogle className="h-5 w-5 text-white group-hover:text-black" />
              <h1 className="text-sm text-white group-hover:text-black">
                Continue with Google
              </h1>
            </button>
          </div>
          <h1 className=" mt-4 w-64 text-[0.6rem] text-[#969696]">
            By continuing, you agree to our Terms of Use and Privacy Policy
          </h1>
        </div>
      </div>
      <div className="invisible lg:visible">
        <Image src={CurateHero} alt="logo" />
      </div>
    </div>
  );
};

Page.navbar = false;
Page.footer = true;

export default Page;
