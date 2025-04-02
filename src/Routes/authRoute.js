import {Router} from "express";
const router=Router();
import { login } from "../Controller/userController.js";
import { signup } from "../Controller/userController.js";
import { logout } from "../Controller/userController.js";

router.post("/login",login);
router.post("/signup",signup);
router.post("/logout",logout);

export default router;