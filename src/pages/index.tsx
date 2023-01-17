import { Post, PostWithImages } from "@/components/posts";

const Page = () => {
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return (
    <div>
      {/* <div className="py-12" /> */}
      <Post />
      <PostWithImages />
      <PostWithImages />
      <PostWithImages />
    </div>
  );
};

export default Page;
