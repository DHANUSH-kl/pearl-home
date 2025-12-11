import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;
  message?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }
  // In production wire to an email service (SendGrid, nodemailer, etc.)
  // This placeholder just returns success.
  return res.status(200).json({ ok: true });
}
