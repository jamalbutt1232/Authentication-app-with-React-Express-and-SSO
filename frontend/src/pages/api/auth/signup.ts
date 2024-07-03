import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (email && password) {
    res.status(200).json({ message: "Sign up successful", user: { email } });
  } else {
    res.status(400).json({ message: "Invalid data" });
  }
}
