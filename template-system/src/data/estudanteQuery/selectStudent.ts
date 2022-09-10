import { Student, typingStudent } from "../../types/typeStudent";
import { connection } from "../connection";


// função para selecionar todos os estudantes
export const selectStudent = async(): Promise <Student[]> => {
    
    const student = await connection("Estudante")
        .select("Estudante.id","Estudante.name","Estudante.email",
        "Estudante.data_nasc", "Estudante.turma_id")

        return student
}



// função para selecionar os estudantes por nome
export async function getStudents(name: string):Promise<Student | undefined> {
    const result = await connection('Estudante').where({name})

    if(result){
        const typeStudent = typingStudent(result)
        return typeStudent 
    } else {
        return undefined
    }
}