import { Request, Response } from "express";
import { getUserUrl } from "../service/userUrlService";

export async function getUserUrls(req: Request, res: Response) {
  try {
    const userId = req.body.userId; // get this from session
    const urls = await getUserUrl(userId);

    res.status(200).json({ urls });
  } catch (error: any) {
    res.status(500).json({ error });
  }
}
