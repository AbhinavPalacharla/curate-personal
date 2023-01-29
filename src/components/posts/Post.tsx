import Image from "next/image";
import { PostMetaInfo } from "./PostMetaInfo";
import type { Post, SocialUser } from "@prisma/client";
import Link from "next/link";

const Post: React.FC<
  Pick<Post, "description" | "source" | "createdAt"> & {
    images?: Array<string>;
  } & {
    socialUser: Pick<SocialUser, "username" | "platform">;
  }
> = ({ images, description, source, createdAt, socialUser: { username } }) => {
  return (
    <div className="border-[#292929] border-[1px] rounded-lg lg:rounded-md p-4 lg:pb-6 mb-4">
      {images && (
        <>
          {images.length === 1 ? (
            <div className="flex flex-row items-center justify-center">
              {/* <Link href={`${images[0]}:orig`} legacyBehavior={true}> */}
              {/* <a target="_blank" rel="noopener noreferrer"> */}
              <Image
                key={images[0]}
                alt={"Image"}
                src={`${images[0]}:orig`}
                width={500}
                height={500}
                className="rounded-sm"
              />
              {/* </a> */}
              {/* </Link> */}
            </div>
          ) : (
            <div className="flex flex-row overflow-x-scroll scroll-smooth gap-x-4">
              {images.map((image) => (
                <Image
                  key={image}
                  alt={"Image"}
                  src={`${image}:orig`}
                  width={4096}
                  height={4096}
                  className="h-96 max-w-none w-auto rounded-sm"
                  // className="position-relative rounded-md lg:w-auto"
                  // fill
                  // width={100%}
                  // height={100%}
                  // className="rounded-md h-4 w-4"
                />
              ))}
            </div>
          )}
        </>
      )}
      <h1 className="text-white pt-4">{description}</h1>
      {source && (
        <Link href={source} legacyBehavior>
          <a
            className="flex flex-row items-center gap-x-1 text-sm text-[#969696] font-light italic pt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>View original tweet by</h1>
            <h1 className="underline underline-offset-1">@{username}</h1>
          </a>
        </Link>
      )}
      <PostMetaInfo date={createdAt} />
    </div>
  );
};

export { Post };
