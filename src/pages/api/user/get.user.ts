import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
      select: {
        id: true,
        name: true,
        username: true,
        collections: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },
      },
    });

    return res.status(200).json(user);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
