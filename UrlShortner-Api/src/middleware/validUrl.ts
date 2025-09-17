import { Request, Response, NextFunction } from "express";

export function validUrl(req: Request, res: Response, next: NextFunction) {
  const { longUrl } = req.body;

  try {
    if (!longUrl) {
      return res.status(400).json({ message: "Input your long Url" });
    }

    try {
      new URL(longUrl); // check for valid url
    } catch (e) {
      return res.status(400).json({ message: "Check the Url again" });
    }

    next();
  } catch (error: any) {
    return res.status(500).json({ error });
  }
}
