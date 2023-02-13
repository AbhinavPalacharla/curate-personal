import Image from "next/image";
import { PostMetaInfo } from "./PostMetaInfo";
import type { Media, Post, SocialUser, User } from "@prisma/client";
import Link from "next/link";

const Post: React.FC<
  Pick<Post, "description" | "source" | "createdAt"> & {
    media?: Array<Partial<Media>>;
  } & {
    socialUser?: Pick<SocialUser, "username" | "platform">;
  } & { user: Pick<User, "id" | "username" | "name"> }
> = ({ media, description, source, createdAt, socialUser, user }) => {
  return (
    <div className="border-[#292929] border-[1px] rounded-lg lg:rounded-md p-2 lg:p-4 lg:pb-6 mb-4">
      {media && (
        <>
          {media.length === 1 ? (
            <div className="flex flex-row items-center justify-center">
              {media[0].type === "IMAGE" ? (
                <Image
                  key={media[0].url}
                  alt={"Image"}
                  src={`${
                    source?.includes("twitter.com")
                      ? `${media[0].url}:orig`
                      : `${media[0].url}`
                  }`}
                  width={4096}
                  height={4096}
                  className="rounded-sm max-w-[100%] lg:min-h-[24rem] max-h-[36rem] w-auto"
                />
              ) : (
                <video
                  muted
                  playsInline
                  autoPlay
                  loop
                  className="lg:min-h-[24rem] max-h-[36rem] max-w-[100%] w-auto rounded-sm"
                >
                  <source src={`${media[0].url}`} />
                </video>
              )}
            </div>
          ) : (
            <div className="flex flex-row overflow-x-scroll scroll-smooth gap-x-4 scrollbar-hide">
              {media.map((media) => {
                return media.type === "IMAGE" ? (
                  <Image
                    key={media.url}
                    alt={"Image"}
                    src={`${media.url}:orig`}
                    width={4096}
                    height={4096}
                    className="h-96 max-w-none w-auto rounded-sm"
                  />
                ) : (
                  <video
                    muted
                    playsInline
                    autoPlay
                    loop
                    className="h-96 rounded-sm"
                  >
                    <source src={`${media.url}`} />
                  </video>
                );
              })}
            </div>
          )}
        </>
      )}
      <h1 className="text-white pt-4">{description}</h1>
      {source && source.includes("twitter.con") ? (
        <Link href={source} legacyBehavior>
          <a
            className="flex flex-row items-center gap-x-1 text-sm text-[#969696] font-light italic pt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>View original tweet by</h1>
            <h1 className="underline underline-offset-1">
              @{socialUser?.username}
            </h1>
          </a>
        </Link>
      ) : (
        source && (
          <Link href={source} legacyBehavior>
            <a
              className="flex flex-row items-center gap-x-1 text-sm text-[#969696] font-light italic pt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.includes("twitter.com") ? (
                <>
                  <h1>View original tweet by</h1>
                  <h1 className="underline underline-offset-1">
                    @{socialUser?.username}
                  </h1>
                </>
              ) : (
                <h1>View original post on Instagram</h1>
              )}
            </a>
          </Link>
        )
      )}
      <PostMetaInfo date={createdAt} user={user} />
    </div>
  );
};

export { Post };
