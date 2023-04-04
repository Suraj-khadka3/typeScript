import { Router } from "express";
import { home, register, edit, remove } from "../../controller/loadpages";
import { loginValidation } from "../../middleware/checkEmail";
import validate from "../../utils/dummyUtils";
// import { loginValidation } from "../../middleware/checkEmail";
const router = Router();

router.get("/home", home);

router.post("/register", 
validate(loginValidation), 
register);

router.patch("/edit/:id", edit);

router.delete("/remove/:id", remove);

export default router;
