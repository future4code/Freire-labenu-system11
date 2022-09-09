import { Student } from "../../types/typeStudent";
import { connection } from "../connection";

// Essa função está inserindo um estudante na tabela "Estudante"
export const insertStudent = async (student: Student): Promise<void> => {
    await connection("Estudante").insert({
      id: student.id,
      name: student.name,
      email: student.email,
      data_nasc: student.data_nasc,
      turma_id: student.turma_id
    });
  };
