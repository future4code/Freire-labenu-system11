import { Request, Response } from "express";
import { Team } from "../../../types/typeTeam";
import {v4 as uuidv4} from 'uuid';
import { insertTurma } from "../../../data/teamQuery/teamDataBase";

export default async function createTeam (req: Request, res: Response) {
    try{
        const {name} = req.body

        if(!name) {
            throw new Error ("O nome da turma deve ser passado!")
        }

        const newTeam:Team = {
            id: uuidv4(),
            name
        } 

        await insertTurma(newTeam)


        res.status(201).send({message: "Turma criada com sucesso!"})

    } catch (error: any) {
        res.status(500).send({message:error.message})
    }
}