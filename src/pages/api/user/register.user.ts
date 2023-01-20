import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  const { name, username, collectionName } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: session?.user?.id },
      data: {
        name: name,
        username: username,
        collections: {
          create: { name: collectionName },
        },
      },
    });

    return res.status(200).json(user);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
