import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { layersURL, collectionId, userId } = req.body;

    const { data } = await axios.get(`${layersURL}?_data`);

    if (!data) {
      return res.status(404).json({ message: "Layer not found" });
    }

    const layer = {
      description: data.groupLayers ? data.layer.title : data.layer.description,
      media: (() => {
        return data.groupLayers
          ? data.groupLayers.map(({ layer }: { layer: any }) => {
              return {
                url: layer.imageUrl as string,
                type: (layer.imageUrl.includes(".mp4") ? "VIDEO" : "IMAGE") as
                  | "VIDEO"
                  | "IMAGE",
              };
            })
          : {
              url: data.layer.imageUrl as string,
              type: (data.layer.imageUrl.includes(".mp4")
                ? "VIDEO"
                : "IMAGE") as "VIDEO" | "IMAGE",
            };
      })(),
      user: {
        uid: data.layer.user.id,
        username: data.layer.user.username,
      },
    };

    const post = await prisma.post.create({
      data: {
        description: layer.description,
        source: layersURL,
        media: { create: layer.media },
        socialUser: {
          connectOrCreate: {
            where: { uid: layer.user.uid },
            create: {
              uid: layer.user.uid,
              username: layer.user.username,
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
