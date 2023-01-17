import Image from "next/image";
import { PostMetaInfo } from "./PostMetaInfo";

const PostWithImages = () => {
  return (
    <div className="border-[#292929] border-[1px] rounded-2xl lg:rounded-xl p-4 lg:pb-6 mb-4">
      <div className="flex flex-row items-center gap-x-4 overflow-scroll scroll-smooth">
        <Image
          alt={"Image"}
          src="https://pbs.twimg.com/media/FkrypcRXwAAXYk8?format=jpg&name=large"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <Image
          alt={"Image"}
          src="https://pbs.twimg.com/media/FkrypcRXwAAXYk8?format=jpg&name=large"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <Image
          alt={"Image"}
          src="https://pbs.twimg.com/media/FkrypcRXwAAXYk8?format=jpg&name=large"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <Image
          alt={"Image"}
          src="https://pbs.twimg.com/media/FkrypcRXwAAXYk8?format=jpg&name=large"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <Image
          alt={"Image"}
          src="https://pbs.twimg.com/media/FkrypcRXwAAXYk8?format=jpg&name=large"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <Image
          alt={"Image"}
          src="https://pbs.twimg.com/media/FkrypcRXwAAXYk8?format=jpg&name=large"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <Image
          alt={"Image"}
          src="https://pbs.twimg.com/media/FkrypcRXwAAXYk8?format=jpg&name=large"
          width={250}
          height={250}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-white pt-4">
        Cillum labore in amet cupidatat veniam nulla eu sint minim est
        consectetur nostrud. Commodo eiusmod cupidatat nostrud incididunt
        commodo labore laboris.
      </h1>
      <div className="flex flex-row items-center gap-x-1 text-sm text-[#969696] font-light italic pt-4">
        <h1>View original tweet by</h1>
        <h1 className="underline underline-offset-1">@LinearMagazine</h1>
      </div>
      <PostMetaInfo />
    </div>
  );
};

export { PostWithImages };
