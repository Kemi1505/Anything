import { Request, Response } from "express";
import { createDefaultShortUrl } from "../service/urlService";

export async function shortenUrl(req: Request, res: Response) {
  try {
    const userId = req.body.userId; 
    const { longUrl } = req.body;

    const newUrl = await createDefaultShortUrl(userId, longUrl);

    res.status(201).json({
      message: "Short URL created",
      shortUrl: `http://${req.get("host")}/${newUrl.short_code}`,
      data: newUrl,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
