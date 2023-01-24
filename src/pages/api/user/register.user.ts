import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  const { name, username, collectionName } = req.body;

  try {
    const createCollection = prisma.collection.create({
      data: {
        name: collectionName,
        roles: {
          create: [
            { type: "OWNER", users: { connect: { id: session?.user?.id } } },
            { type: "MEMBER" },
          ],
        },
      },
    });

    const updateUser = prisma.user.update({
      where: { id: session?.user?.id },
      data: { name: name, username: username },
    });

    const [collection, user] = await prisma.$transaction([
      createCollection,
      updateUser,
    ]);

    return res.status(200).json(user);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
