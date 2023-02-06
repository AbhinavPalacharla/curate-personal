import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, username } = req.query;

    const user = await prisma.user.findUnique({
      where: (() => {
        return id ? { id: id as string } : { username: username as string };
      })(),
      select: {
        id: true,
        username: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "" });
    }

    return res.status(200).json(user);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
