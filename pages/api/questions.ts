import { NextApiRequest, NextApiResponse } from "next";
import { createProxyMiddleware } from "http-proxy-middleware";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const proxy = createProxyMiddleware({
    target: process.env.NEXT_PUBLIC_API_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api/questions": "/questions",
    },
  });

  return new Promise((resolve, reject) => {
    proxy(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default handler;
