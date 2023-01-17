import { FC } from "react";
import Avatar from "boring-avatars";

const Profile: FC<{
  style?: "small" | "regular";
}> = ({ style }) => {
  return !style || style === "regular" ? (
    <div className="flex flex-row gap-x-4 items-center">
      <Avatar
        size={24}
        name={"clcb3u5zo000008jo9juu2y5o"}
        variant="marble"
        colors={["#917F6E", "#EFBC98", "#EFD2BE", "#EFE1D1", "#D9DDCD"]}
      />
      <h1 className="text-white text-md">{"Abhinav Palacharla"}</h1>
    </div>
  ) : (
    <div className="flex flex-row gap-x-2 items-center">
      <Avatar
        size={20}
        name={"clcb3u5zo000008jo9juu2y5o"}
        variant="marble"
        colors={["#917F6E", "#EFBC98", "#EFD2BE", "#EFE1D1", "#D9DDCD"]}
      />
      <h1 className="text-white text-sm font-light">{"Abhinav Palacharla"}</h1>
    </div>
  );
};

export { Profile };
