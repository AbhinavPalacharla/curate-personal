import { Post } from "@/components/posts";
import type { NextPageWithLayout } from "@/components/layout";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useCollectionStore } from "stores";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Collection, Post as PostType, SocialUser } from "@prisma/client";
import { useEffect } from "react";
import type { IconName } from "@/utils/iconNames";

const Page: NextPageWithLayout = (props: any) => {
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
      initialData: props.collections,
      refetchInterval: 0,
    }
  );

  const collectionStore = useCollectionStore();

  const { data: collectionData, isLoading: collectionLoading } = useQuery(
    [collectionStore.collection?.id],
    async () => {
      const {
        data,
      }: {
        data: {
          id: string;
          name: string;
          icon: IconName;
          posts: Array<
            Pick<
              PostType,
              "id" | "description" | "images" | "source" | "createdAt"
            > & {
              socialUser: Pick<SocialUser, "username" | "platform">;
            }
          >;
        };
      } = await axios.get(
        `/api/collection/get.collection?collectionId=${collectionStore.collection?.id}`
      );

      return data;
    },
    {
      enabled: !!collectionStore.collection?.id,
    }
  );

  useEffect(() => {
    if (data && collectionStore.collection?.id === "") {
      collectionStore.setCollection({
        id: data[0].id,
        name: data[0].name,
        icon: data[0].icon,
      });
    }
  }, [data]);

  return (
    <div>
      <div className="py-10" />
      {collectionData && collectionData.posts.length > 0 ? (
        collectionData.posts.map((post) => {
          return (
            <Post
              key={post.id}
              description={post.description}
              images={post.images}
              source={post.source}
              socialUser={post.socialUser}
              createdAt={post.createdAt}
            />
          );
        })
      ) : (
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-[#969696] text-sm font-light italic">
            ~~~ No posts ~~~
          </h1>
        </div>
      )}
      <div className="pb-20 pt-4 flex flex-row justify-center">
        {/* <h1 className="text-[#969696] italic text-xs">Inspired</h1> */}
      </div>
    </div>
  );
};

// Page.isLoading = false;
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

  const { data: collections } = await axios.get(
    "http://localhost:3000/api/collection/get.collections",
    {
      headers: {
        cookie: context.req.headers.cookie,
      },
    }
  );

  return {
    props: {
      session,
      collections,
    },
  };
}

export default Page;
