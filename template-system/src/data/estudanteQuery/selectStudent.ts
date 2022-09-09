import { Student } from "../../types/typeStudent";
import { connection } from "../connection";


// função para selecionar todos os estudantes
export const selectStudent = async(): Promise <Student[]> => {
    
    const student = await connection("Estudante")
        .select("estudante.id","estudante.name","estudante.email",
        "estudante.data_nasc", "estudante.turma_id")

        return student
}



// função para selecionar os estudantes por nome
export const getStudentByName = async(name: string): Promise <string> => {

    const [nameStudent] = await connection("estudante")
        .where({name: name})

        return nameStudent
}