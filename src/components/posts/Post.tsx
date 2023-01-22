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
    <div className="border-[#292929] border-[1px] rounded-xl lg:rounded-lg p-4 lg:pb-6 mb-4">
      {images && (
        <div className="flex flex-row items-center gap-x-4 overflow-scroll scroll-smooth">
          {images.map((image) => (
            <Image
              key={image}
              alt={"Image"}
              src={image}
              width={250}
              height={250}
              className="rounded-md"
            />
          ))}
        </div>
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
