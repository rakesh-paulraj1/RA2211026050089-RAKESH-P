import { Request, Response } from "express";
import { posts } from "../models/data"; 

export class PostController {
 
  public async getPosts(req: Request, res: Response): Promise<void> {
    try {
      const { type } = req.query;

      if (type === "popular") {
        
        const maxComments = Math.max(...posts.map(post => post.comments));
        const popularPosts = posts.filter(post => post.comments === maxComments);
        res.status(200).json(popularPosts);
      } 
      else if (type === "latest") {
       
        const latestPosts = posts
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 5);
        res.status(200).json(latestPosts);
      } 
      else {
        res.status(400).json({ message: "Invalid type. Use 'popular' or 'latest'." });
      }
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
