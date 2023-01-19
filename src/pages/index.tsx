import { Post, PostWithImages } from "@/components/posts";
import type { NextPageWithLayout } from "@/components/layout";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <div className="py-10" />
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

export default Page;
