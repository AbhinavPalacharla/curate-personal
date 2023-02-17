import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // try {
  const { unsplashURL, userId, collectionId } = req.body;

  const { data } = await axios.get(
    unsplashURL.replace(
      "https://unsplash.com/photos/",
      "https://api.unsplash.com/photos/"
    ),
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  const post = await prisma.post.create({
    data: {
      description: data.description,
      source: unsplashURL,
      media: { create: { url: data.urls.raw, type: "IMAGE" } },
      user: { connect: { id: userId } },
      collection: { connect: { id: collectionId } },
      socialUser: {
        connectOrCreate: {
          where: { uid: data.user.id },
          create: {
            uid: data.user.id,
            username: data.user.username,
            platform: "UNSPLASH",
          },
        },
      },
    },
  });

  if (!post) {
    return res.status(404).json({ message: "Post could not be created" });
  }

  return res.status(200).json(post);
  // } catch (err) {
  //   handleError(err, res);
  // }
};

export default handler;
