import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { tweetId, tweetURL, collectionId, userId } = req.body;

  // console.log("tweetId", tweetId);
  // console.log("collectionId", collectionId);
  // console.log("userId", userId);

  try {
    const { data } = await axios.get(
      `https://api.twitter.com/2/tweets/${tweetId}?expansions=attachments.media_keys,author_id&user.fields&media.fields=url`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER}`,
        },
      }
    );

    if (!data) {
      return res.status(404).json({ message: "Tweet not found" });
    }

    const tweet = {
      description: data.data.text,
      images: data.includes.media.map((media: any) => media.url),
      user: {
        uid: data.includes.users[0].id,
        username: data.includes.users[0].username,
      },
    };

    const post = await prisma.post.create({
      data: {
        source: tweetURL,
        description: tweet.description,
        images: tweet.images,
        socialUser: {
          connectOrCreate: {
            where: {
              uid: tweet.user.uid,
            },
            create: {
              uid: tweet.user.uid,
              username: tweet.user.username,
              platform: "TWITTER",
            },
          },
        },
        collection: { connect: { id: collectionId } },
        user: { connect: { id: userId } },
      },
    });

    res.status(200).json(post);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
