import { Request, Response } from "express";
import { getLongUrl } from "../service/redirectService";

export async function redirectUrlHandler(req: Request, res: Response) {
  try {
    const { shortCode } = req.params;

    if (!shortCode) {
      return res.status(400).json({ message: "Short code has to exist" });
    }

    const url = await getLongUrl(shortCode);

    if (!url) {
      return res.status(404).json({ message: "Short URL not in database" });
    }

    return res.redirect(url.long_url);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
