import { Request, Response } from 'express'
import bcrypt from "bcrypt"

import User from "../../entity/User"

export const createUser = async (req: Request, res: Response) => {
    let {firstName, lastName, email, matric_no, password, confirmPassword } = req.body

    try {
        const userExists = await User.findOne({matric_no})
        if(userExists) throw new Error("User already exists")

        password = await bcrypt.hash(password, 12)
 
        const user = await User.insert({
            firstName,
            lastName,
            email,
            matric_no,
            password            
        })

        return res.send(user)
    }catch(err){
        res.status(500).send(err)
    }

}