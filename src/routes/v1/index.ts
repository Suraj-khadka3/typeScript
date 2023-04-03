import { Router } from "express";
const router = Router();
import auth from "./auth"

router.use("/api", auth);

export default router;
