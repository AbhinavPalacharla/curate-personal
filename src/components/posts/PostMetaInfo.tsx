import { Tags } from "./Tags";
import { Roboto_Mono } from "@next/font/google";
import { Profile } from "../shared";
import { User } from "@prisma/client";

const robotoMono = Roboto_Mono();

const PostMetaInfo: React.FC<{
  date: Date;
  user: Pick<User, "id" | "username" | "name">;
}> = ({ date, user }) => {
  return (
    <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center justify-between pt-8 sm: pb-2">
      <Tags
        tags={[
          "Dark-Theme",
          "Minimal Design",
          "Dark-Theme",
          "Minimal Design",
          "Dark-Theme",
          "Minimal Design",
        ]}
      />

      <div className="flex flex-row items-center gap-x-2 justify-between lg:hidden">
        <Profile user={user} />
        {/* <h1 className="text-[#969696] text-sm hidden lg:visibile">·</h1> */}
        <div className="pt-0.5">
          <h1
            className={`${robotoMono.className} font-light text-sm text-[#969696] tracking-wide pl-1 lg:pl-0`}
          >
            {new Date(date).toLocaleDateString().replaceAll("/", ".")}
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:visible items-center gap-x-2 justify-between">
        <Profile user={user} />
        <h1 className="text-[#969696] text-sm">·</h1>
        <div className="pt-0.5">
          <h1
            className={`${robotoMono.className} font-light text-sm text-[#969696] tracking-wide pl-1 lg:pl-0`}
          >
            {new Date(date).toLocaleDateString().replaceAll("/", ".")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export { PostMetaInfo };
