import { Request, Response } from "express";
import { users } from "../models/data"; 

export class UserController {
  
  public async topUsers(req: Request, res: Response): Promise<void> {
    try {
      const topUsers = users
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 5);

      res.status(200).json(topUsers);
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
