import { Router } from "express";
import { TestApiController } from "../controllers/test.controller";

const router=Router();
const testcontroller=new TestApiController();
router.post("/signup",testcontroller.getusers);
// router.post("/login",testcontroller.loginuser);
// router.use('/admin',testcontroller.usermiddleware);
// router.post("/admin/addflashcards",testcontroller.addflashcards);
// router.put("/admin/editflashcards/:id",testcontroller.editflashcard);
// router.delete("/admin/deleteflashcards/:id",testcontroller.deleteflashcard);
export default router;