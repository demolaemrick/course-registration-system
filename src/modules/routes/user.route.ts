import { Router } from 'express'

import { createUser, login } from "../controllers/user.controller"

import { validate, registerValidationRules, loginValidationRules } from "../utils/validator"

const router = Router()

router.post('/register', registerValidationRules(), validate,  createUser)
router.post('/auth', loginValidationRules(), validate, login)


export default router