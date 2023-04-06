import { Router } from "express";
import {
  home,
  register,
  edit,
  remove,
  post,
  login,
} from "../../controller/loadpages";
import { loginValidation } from "../../middleware/checkEmail";
import validate from "../../utils/dummyUtils";
const router = Router();

router.get("/home", home);

router.post(
  "/register",
  validate(loginValidation),
  // validate,
  register
);

router.post("/post", post);

router.patch("/edit/:id", edit);

router.delete("/remove/:id", remove);

router.post("/login", login);

export default router;
