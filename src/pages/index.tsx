import { Post } from "@/components/posts";
import type { NextPageWithLayout } from "@/components/layout";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useCollectionStore } from "stores";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Media, Post as PostType, SocialUser, User } from "@prisma/client";
import { useEffect } from "react";
import type { IconName } from "@/utils/iconNames";
import Image from "next/image";

const Page: NextPageWithLayout = (props: any) => {
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
          };
        }>;
      } = await axios.get("/api/collection/get.collections");

      const collections = data.map((role) => {
        return role.collection;
      });

      return collections;
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
          message?: string;
          posts: Array<
            Pick<
              PostType,
              "id" | "description" | "images" | "source" | "createdAt"
            > & {
              socialUser: Pick<SocialUser, "username" | "platform">;
            } & { media: Array<Media> } & {
              user: Pick<User, "id" | "username" | "name">;
            }
          >;
        };
      } = await axios.get(
        `/api/collection/get.collection?collectionId=${collectionStore.collection?.id}`
      );

      return data;
    },
    {
      refetchInterval: 1,
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
  }, [data, collectionStore.collection?.id]);

  return (
    <div>
      <div className="py-10" />
      {collectionData && collectionData?.posts?.length > 0 ? (
        // <h1 className="text-white">Data: {JSON.stringify(collec)}</h1>
        collectionData.posts.map((post) => {
          return (
            <Post
              key={post.id}
              description={post.description}
              // images={post.images}
              media={(() => {
                return post.media.map((image) => {
                  return {
                    id: image.id,
                    url: image.url,
                    type: image.type,
                  };
                });
              })()}
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
        {collectionData?.message && (
          <h1 className="text-[#969696] text-sm font-light italic">
            {collectionData.message}
          </h1>
        )}
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

  const { data } = (await axios.get(
    `https://curate-personal.vercel.app/api/collection/get.collections?userId=${session.user.id}`
    // `http://localhost:3000/api/collection/get.collections?userId=${session.user.id}`
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
