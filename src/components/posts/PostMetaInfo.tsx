import { Roboto_Mono } from "@next/font/google";

const robotoMono = Roboto_Mono();

const PostMetaInfo: React.FC<{
  date: Date;
}> = ({ date }) => {
  return (
    <div className="flex flex-row items-center pt-4 lg:pt-8 pb-2 lg:pb-0">
      <h1
        className={`${robotoMono.className} font-light text-sm text-[#969696] tracking-wide pl-1 lg:pl-0`}
      >
        {new Date(date).toLocaleDateString().replaceAll("/", ".")}
      </h1>
    </div>
  );
};

export { PostMetaInfo };
