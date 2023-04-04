import { Router } from "express";
import { home, register, edit, remove } from "../../controller/loadpages";
const router = Router();

router.get("/home", home);

router.post("/register", register);

router.patch("/edit:id", edit);

router.delete("/remove:id", remove);

export default router;
