import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { createProxyMiddleware } from "http-proxy-middleware";

const isLocal = process.env.NODE_ENV === "development";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (isLocal && process.env.NEXT_PUBLIC_API_URL) {
    const proxy = createProxyMiddleware({
      target: process.env.NEXT_PUBLIC_API_URL,
      changeOrigin: true,
      pathRewrite: {
        "^/api/questions": "/questions",
      },
    });

    return new Promise((resolve, reject) => {
      proxy(req, res, (result) => {
        if (result instanceof Error) return reject(result);
        return resolve(result);
      });
    });
  } else {
    try {
      const filePath = path.join(process.cwd(), "db", "db.json");
      const jsonData = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(jsonData);
      res.status(200).json(data.questions);
    } catch (error) {
      res.status(500).json({ message: "Error loading the data", error });
    }
  }
}
