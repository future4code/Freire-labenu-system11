import { Student } from "../../types/typeStudent";
import { connection } from "../Connection";


// função para selecionar todos os estudantes
export const selectStudent = async(): Promise <Student[]> => {
    
    const student = await connection("Estudante")
        .select("Estudante.id","Estudante.name","Estudante.email",
        "Estudante.data_nasc", "Estudante.turma_id")

        return student
}



// função para selecionar os estudantes por nome
export const getStudentByName = async(name: string): Promise <string> => {

    const [nameStudent] = await connection("estudante")
        .where({name: name})

        return nameStudent
}