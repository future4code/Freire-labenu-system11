import { Student } from "../../types/typeStudent";
import { connection } from "../connection";

// Essa função está inserindo um estudante na tabela "Estudante"
export async function insertStudent(student: Student): Promise<void>{
    
  const {id, name, email, data_nasc, turma_id} = student;

  await connection("Estudante").insert({
      id,
      name,
      email,
      data_nasc: data_nasc,
      turma_id: turma_id
    });
  };

