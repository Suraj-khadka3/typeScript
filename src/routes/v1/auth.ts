import { Router } from "express";
import {
  home,
  register,
  edit,
  remove,
  post,
  login,
} from "../../controller/userController";
import { loginValidation } from "../../middleware/checkEmail";
import validate from "../../utils/dummyUtils";
import { searchPaginationSortMiddleware } from "../../middleware/sortSearch";
import { posts } from "../../controller/postController";
const router = Router();

router.get(
  "/home",
  searchPaginationSortMiddleware({
    model: "User",
    searchableFields: ["name", "email"],
  }),
  home
);
router.get(
  "/posts/:id",
  searchPaginationSortMiddleware({
    model: "Post",
    searchableFields: ["title", "body"],
  }),
  posts
);
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
