import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, roleId } = req.body;

  try {
    const role = await prisma.role.update({
      where: {
        id: roleId,
      },
      data: {
        users: {
          connect: {
            id: userId,
          },
        },
      },
    });

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    return res.status(200).json(role);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
