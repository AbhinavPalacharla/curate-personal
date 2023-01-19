import { Button, Dropdown } from "@/components/shared";
import { getIconByName } from "@/utils";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[1%] bg-black/80 backdrop-blur-md" />
      <div className="flex flex-row justify-between items-center px-2 lg:px-12 py-3 mb-8 border-b-[1px] border-[#292929] bg-black/80 backdrop-blur-md w-[98%]">
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="text-[#969696] font-light text-sm italic">Index</h1>
          <h1 className="text-[#969696] font-light text-md italic">/</h1>
          <Dropdown
            items={[
              {
                name: "Architecture Inspo",
                icon: getIconByName("City"),
              },
              {
                name: "Interior Design",
                icon: getIconByName("SmallLampAlt"),
              },
              {
                name: "Read Later",
                icon: getIconByName("BookmarkEmpty"),
              },
            ]}
          >
            <button className="ring-0 outline-none flex flex-row w-36">
              <span className="text-[#969696] hover:text-white text-sm font-light block truncate">
                Architecture Inspo
              </span>
            </button>
          </Dropdown>
        </div>
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
