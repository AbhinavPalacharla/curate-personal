import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { extractOpenGraph } from "@devmehq/open-graph-extractor";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url, collectionId, userId } = req.body;

    const { data: html } = await axios.get(url);

    const openGraph = extractOpenGraph(html);

    // const username = openGraph.twitterTitle.split("(")[1].split(")")[0];
    const image = openGraph.ogImage.url;

    const post = await prisma.post.create({
      data: {
        source: url,
        media: {
          create: {
            type: "IMAGE",
            url: image,
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
