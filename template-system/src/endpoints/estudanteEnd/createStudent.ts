import { Request, Response } from "express";
import { getStudentByName } from "../../data/estudanteQuery/selectStudent";
import { Student } from "../../types/typeStudent";
import { insertStudent } from "../../data/estudanteQuery/insertStudent";
import {v4 as uuidv4} from 'uuid';

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
    try{
        //incluir as propriedades da tabela estudante
        const {name, email, data_nasc, turma_id } = req.body
    
        if( !name || !email || !data_nasc || !turma_id) {
            res.statusCode = 400
            throw new Error(`"name","email","data_nasc","turma_id" são obrigatórios!`)
        }
    
        /* Invocando a função que pega as informações na tabela "estudante" para 
        ver se o name que está na tabela é igual ao que esta recebendo do body */
        const nameStudent = await getStudentByName(name)

        /* Verificando se o nome do estudante já existe. */
        if(nameStudent) {
            res.statusCode = 409
            throw new Error("Esse estudante já está cadastrado!");
        }

        // Tipando um produto
        const student: Student = {
            id: uuidv4(),
            name,
            email,
            data_nasc,
            turma_id
        }

        console.log(student)
        // Invocando a função que insere um estudante na tabela "Estudante"
        await insertStudent(student)

        res.status(201).send("Estudante cadastrado com sucesso!")

    } catch(error:any){
        res.status(500).send({
            message: error.message
        });
    }
};
