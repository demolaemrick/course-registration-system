import { Router } from "express";

import { getCourses, registerCourses } from "../controllers/course.controller";

const router = Router();

router.get("/", getCourses);
router.post("/register", registerCourses)

export default router;
