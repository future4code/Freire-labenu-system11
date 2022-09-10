import { Request, Response } from "express"
import { getStudents } from "../../data/estudanteQuery/selectStudent"



export default async function getStudentsByName(req: Request, res: Response) {

    try{
        const name = req.params.name
        console.log(name)
        const studentName = await getStudents(name)


        if(!studentName){
            throw new Error(`Estudante ${name} não existe na base de dados `)
        }

        res.status(201).send(studentName)
        
    } catch(error:any){
        res.status(500).send({ message: error.message})
    }

}