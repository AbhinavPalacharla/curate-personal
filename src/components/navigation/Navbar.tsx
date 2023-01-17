import { Button } from "@/components/shared";

const Navbar = (session: any) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[1%] bg-black/80 backdrop-blur-md" />
      <div className="flex flex-row justify-between items-center px-2 lg:px-12 py-3 mb-8 border-b-[1px] border-[#292929] bg-black/80 backdrop-blur-md w-[98%]">
        <h1 className="text-[#969696] font-light text-sm italic">Index</h1>
        <Button
          name="New Post"
          style="secondary"
          size="small"
          css="underline underline-offset-2"
        />
      </div>
      <div className="w-[1%] bg-black/80 backdrop-blur-md" />
    </div>
  );
};

export { Navbar };
