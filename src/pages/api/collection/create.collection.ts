import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.body;
  const session = await unstable_getServerSession(req, res, authOptions);

  try {
    const collection = await prisma.collection.create({
      data: {
        name: name,
        roles: {
          create: [
            { type: "OWNER", users: { connect: { id: session?.user?.id } } },
            { type: "MEMBER" },
          ],
        },
      },
    });

    return res.status(200).json(collection);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
