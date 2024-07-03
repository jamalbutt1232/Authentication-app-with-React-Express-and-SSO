// src/pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  // Mock authentication logic
  if (email === "user@example.com" && password === "password") {
    res.status(200).json({ message: "Login successful", user: { email } });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
