import { Router } from "express";

import { createUser, login, updateUser, logout, profile } from "../controllers/user.controller";

import {
  validate,
  registerValidationRules,
  loginValidationRules,
} from "../utils/validator";

import authorization from "../utils/authorization";

const router = Router();

router.post("/register", registerValidationRules(), validate, createUser);
router.post("/auth", loginValidationRules(), validate, login);
router.get("/logout", logout);
router.patch("/:id/update", updateUser);
router.get("/profile", profile);

router.get("/protected", authorization, (req, res) => {
  return res.json({ user: { id: req.userId } });
});
export default router;
