import { Request, Response } from "express";
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
            throw new Error(`"name","email","data_nasc","turma_id" são obrigatórios!`)
        }
    
        //descomentar após criar o endpoint buscarturma

/*      const turmaExiste = await buscarTurma(turma_id)

        if(!turmaExiste) {
            throw new Error(`turma com id ${turma_id} não existe.`
        } */

        // Tipando um Estudante
        const student: Student = {
            id: uuidv4(),
            name,
            email,
            data_nasc,
            turma_id
        }
        
        // Invocando a função que insere um estudante na tabela "Estudante"
        await insertStudent(student)

        res.status(201).send("Estudante cadastrado com sucesso!")
        
    } catch(error:any){
        res.status(500).send({
            message: error.message
        });
    }
};
