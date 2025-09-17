import { Request, Response } from "express";
import { createCustomUrl } from "../service/customUrlService";

export async function shortenCustomUrl(req: Request, res: Response) {
  try {
    const userId = req.body.userId; 
    const { longUrl, customUrl} = req.body;

    if (!customUrl) {
      return res.status(400).json({ message: "Custom Url should be given" });
    }

    const newUrl = await createCustomUrl(userId, longUrl, customUrl);

    res.status(201).json({
      message: "Custom short URL created",
      shortUrl: `http://${req.get("host")}/${newUrl.short_code}`,
      data: newUrl,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
