import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, roleId } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id: userId as string,
      },
      data: {
        roles: {
          disconnect: {
            id: roleId as string,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
