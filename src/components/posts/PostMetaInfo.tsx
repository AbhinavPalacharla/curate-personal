import { Tags } from "./Tags";
import { Roboto_Mono } from "@next/font/google";

const robotoMono = Roboto_Mono();

const PostMetaInfo = () => {
  return (
    <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center justify-between pt-8">
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
      <h1
        className={`${robotoMono.className} font-light text-sm text-[#969696] tracking-wide pl-1 lg:pl-0`}
      >
        12.30.2022
      </h1>
    </div>
  );
};

export { PostMetaInfo };
