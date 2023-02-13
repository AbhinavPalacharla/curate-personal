import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { collectionId } = req.query;

  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: collectionId as string,
      },
      select: {
        id: true,
        name: true,
        icon: true,
        message: true,
        posts: {
          select: {
            id: true,
            description: true,
            images: true,
            media: true,
            source: true,
            createdAt: true,
            socialUser: {
              select: {
                username: true,
                platform: true,
              },
            },
            user: {
              select: {
                id: true,
                username: true,
                name: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    return res.status(200).json(collection);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
