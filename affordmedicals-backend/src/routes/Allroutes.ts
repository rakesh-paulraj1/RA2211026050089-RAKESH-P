import { Router } from "express";
import { PostController } from "../controllers/post.controller";
import { UserController } from "../controllers/user.controller";

const router=Router();
const usercontroller=new UserController();
router.get("/users",usercontroller.topUsers);
const postcontroller=new PostController();
router.get("/posts",postcontroller.getPosts);

export default router;