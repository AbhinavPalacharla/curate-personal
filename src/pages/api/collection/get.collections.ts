import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  const { userId } = req.query;

  let id = "";

  if (userId) {
    id = userId as string;
  } else if (session?.user?.id) {
    id = session?.user?.id as string;
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        roles: {
          select: {
            type: true,
            collection: {
              select: {
                id: true,
                name: true,
                icon: true,
              },
            },
          },
          orderBy: {
            type: "asc",
          },
        },
        // collections: {
        //   select: {
        //     id: true,
        //     name: true,
        //     icon: true,
        //   },
        // },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user?.roles);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
