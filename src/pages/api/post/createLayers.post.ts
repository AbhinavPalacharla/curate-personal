import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { layersURL, collectionId, userId } = req.body;

    const {
      data: { layer },
    } = await axios.get(`${layersURL}?_data`);

    if (!layer) {
      return res.status(404).json({ message: "Layer not found" });
    }

    const layersData = {
      description: layer.description ?? layer.title,
      media: {
        url: layer.imageUrl as string,
        type: (layer.imageUrl.includes(".mp4") ? "VIDEO" : "IMAGE") as
          | "VIDEO"
          | "IMAGE",
      },
      user: {
        uid: layer.user.id,
        username: layer.user.username,
      },
    };

    const post = await prisma.post.create({
      data: {
        description: layersData.description,
        source: layersURL,
        media: { create: layersData.media },
        socialUser: {
          connectOrCreate: {
            where: { uid: layersData.user.uid },
            create: {
              uid: layersData.user.uid,
              username: layersData.user.username,
              platform: "LAYERS",
            },
          },
        },
        user: { connect: { id: userId } },
        collection: { connect: { id: collectionId } },
      },
    });

    if (!post) {
      return res.status(500).json({ message: "Post could not be created" });
    }

    return res.status(200).json(post);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
