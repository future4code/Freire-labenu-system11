
export type Student = {
    id: string,
    name: string,
    email: string,
    data_nasc: string,
    turma_id: string
}
export function typingStudent(student: any){
    const typeStudent:Student={
        id: student.id,
        name: student.name,
        email: student.email,
        data_nasc: student.data_nasc,
        turma_id: student.turma_id
    }

    return typeStudent
}