import { Post, PostWithImages } from "@/components/posts";
import type { NextPageWithLayout } from "@/components/layout";
import { unstable_getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Page: NextPageWithLayout = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="py-10" />
      {/* <h1 className="text-white">Session: {JSON.stringify(session)}</h1> */}
      <Post />
      <PostWithImages />
      <PostWithImages />
      <PostWithImages />
      <div className="pb-20 pt-4 flex flex-row justify-center">
        <h1 className="text-[#969696] italic text-xs">Inspired</h1>
      </div>
    </div>
  );
};

Page.navbar = true;
Page.footer = true;

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

  return {
    props: {
      session,
    },
  };
}

export default Page;
