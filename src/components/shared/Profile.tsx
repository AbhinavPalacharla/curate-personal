import { FC } from "react";
import Avatar from "boring-avatars";
import { User } from "@prisma/client";

const Profile: FC<{
  elements?: { avatar?: boolean; name?: boolean };
  style?: "small" | "regular";
  user: Pick<User, "id" | "username" | "name">;
}> = ({ elements, style, user }) => {
  return !style || style === "regular" ? (
    <div className="flex flex-row gap-x-4 items-center">
      <Avatar
        size={25}
        name={user.username || ""}
        variant="marble"
        // colors={["#E94E77", "#D68189", "#E94E77", "#F4EAD5", "#D68189"]}
        colors={["#F88F79", "#F6AA93", "#E94E77", "#F4EAD5", "#D68189"]}
      />
      <h1 className="text-white text-md">{user.name}</h1>
    </div>
  ) : (
    <div className="flex flex-row gap-x-2 items-center">
      <Avatar
        size={20}
        name={user.username || ""}
        variant="marble"
        // colors={["#E94E77", "#F4EAD5", "#E94E77", "#F4EAD5", "#D68189"]}
        colors={["#F88F79", "#F6AA93", "#E94E77", "#F4EAD5", "#D68189"]}
      />
      <h1 className="text-white text-sm font-light">{user.name}</h1>
    </div>
  );
};

export { Profile };
