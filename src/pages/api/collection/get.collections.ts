import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  console.log("session", session);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
      select: {
        collections: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user?.collections);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
