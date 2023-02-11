import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { tweetId, tweetURL, collectionId, userId } = req.body;

  try {
    const { data } = await axios.get(
      // `https://api.twitter.com/2/tweets/${tweetId}?expansions=attachments.media_keys,author_id&user.fields&media.fields=url`,
      `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=attachments&expansions=attachments.media_keys,author_id&user.fields&media.fields=url,variants`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER}`,
        },
      }
    );

    if (!data) {
      return res.status(404).json({ message: "Tweet not found" });
    }

    const medias: Array<{ url: string; type: "IMAGE" | "VIDEO" }> = [];

    data.includes.media.map(
      (media: {
        media_key: string;
        type: "video" | "animated_gif" | "photo";
        url?: string;
        variants?: Array<Partial<{ url: string; bit_rate: number }>>;
      }) => {
        if (media.type === "photo") {
          console.log("photo", media.url);
          medias.push({
            url: media.url!,
            type: "IMAGE",
          });
        } else {
          medias.push({
            url: media.variants!.sort((a, b) => b.bit_rate! - a.bit_rate!)[0]
              .url!,
            type: "VIDEO",
          });
        }
      }
    );

    const tweet = {
      description: data.data.text.replace(RegExp("https://t.co/.*"), ""),
      media: medias,
      user: {
        uid: data.includes.users[0].id,
        username: data.includes.users[0].username,
      },
    };

    const post = await prisma.post.create({
      data: {
        source: tweetURL,
        description: tweet.description,
        media: {
          create: tweet.media,
        },
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
