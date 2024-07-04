// src/pages/api/auth/google-signup.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    // Verify the token with Google
    const response = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
    );
    const user = response.data;

    // Handle user signup logic here (e.g., create user in your database)

    res.status(200).json({ message: "Signup successful", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to verify token", error: error.message });
  }
}
