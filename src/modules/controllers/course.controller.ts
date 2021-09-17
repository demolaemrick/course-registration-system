import { Request, Response } from "express"
import Course from "../../entity/Course"


export const getCourses = async (_, res: Response) => {
    try{
        const courses = await Course.find()

        return res.send(courses)
    }catch(err){
        res.status(500).send(err.message)
    }
}

export const registerCourses = async(req: Request, res: Response) => {
    try{

    }catch(err){}
}