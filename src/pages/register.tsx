import CurateHero from "/public/curate-hero.svg";
import Image from "next/image";
import { Button } from "@/components/shared";
import { Roboto_Mono } from "@next/font/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WarningCircle } from "iconoir-react";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "@/components/layout";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

const robotoMono = Roboto_Mono();

const schema = z
  .object({
    name: z.string().min(1).max(30),
    username: z.string().min(1).max(15),
    collectionName: z.string().min(1).max(30),
  })
  .required();

const Page: NextPageWithLayout = () => {
  const router = useRouter();

  const registerUser = useMutation(
    ({
      name,
      username,
      collectionName,
    }: {
      name: string;
      username: string;
      collectionName: string;
    }) => {
      return axios.post("/api/user/register", {
        name: name,
        username: username,
        collectionName: collectionName,
      });
    },
    {
      onSuccess: () => {
        if (typeof window !== "undefined") {
          router.push("/");
        }
      },
    }
  );

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isLoading, isDirty },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  return (
    <div className="flex flex-row lg:gap-x-32 lg:items-center justify-center lg:h-screen">
      <div className="flex flex-col mt-24 ml-8 lg:m-0">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-white text-sm w-28">
            Session: {JSON.stringify(session)}
          </h1>
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
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmit((data) => {
                registerUser.mutate(data as z.infer<typeof schema>);
              })}
            >
              <div className="flex flex-row items-center py-4">
                <h1
                  className={`text-[#969696] w-36 font-light text-sm ${robotoMono.className}`}
                >
                  Name
                </h1>
                <input
                  placeholder="firstname lastname"
                  className={`bg-black text-sm text-white placeholder:text-[#282828] placeholder:italic border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:ring-[#000000]`}
                  {...register("name")}
                />
                {errors.name?.message && (
                  <WarningCircle className="text-red-500 h-5 w-5" />
                )}
              </div>
              {errors.name?.message && (
                <h1 className="text-red-500 text-xs pb-4 pt-[-2rem]">
                  {errors.name?.message as string}
                </h1>
              )}
              <div className="divide-y divide-dotted divide-[#282828]">
                <div />
                <div />
              </div>
              <div className="flex flex-row items-center py-4">
                <h1
                  className={`text-[#969696] w-36 font-light text-sm ${robotoMono.className}`}
                >
                  Username
                </h1>
                <input
                  placeholder="@username"
                  className={`bg-black text-sm text-white placeholder:text-[#282828] placeholder:italic border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:ring-[#000000]`}
                  {...register("username")}
                />
                {errors.username?.message && (
                  <WarningCircle className="text-red-500 h-5 w-5" />
                )}
              </div>
              {errors.username?.message && (
                <h1 className="text-red-500 text-xs pb-4 pt-[-2rem]">
                  {errors.username?.message as string}
                </h1>
              )}
              <div className="divide-y divide-dotted divide-[#282828]">
                <div />
                <div />
              </div>
              <div className="flex flex-row items-center py-4">
                <h1
                  className={`text-[#969696] w-36 font-light text-sm ${robotoMono.className}`}
                >
                  Collection Name
                </h1>
                <input
                  placeholder="UI Inspiration"
                  className={`bg-black text-sm text-white placeholder:text-[#282828] placeholder:italic border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:ring-[#000000]`}
                  {...register("collectionName")}
                />
                {errors.collectionName?.message && (
                  <WarningCircle className="text-red-500 h-5 w-5" />
                )}
              </div>
              {errors.collectionName?.message && (
                <h1 className="text-red-500 text-xs pb-4 pt-[-2rem]">
                  {errors.collectionName?.message as string}
                </h1>
              )}
              <div className="mt-4">
                <Button
                  name="Continue"
                  style="primary"
                  size="small"
                  type="submit"
                  disabled={!isValid}
                />
              </div>
            </form>
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

  if (session && session?.user?.username) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Page;
