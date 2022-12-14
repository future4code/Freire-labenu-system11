import { Docente, tipagemDocente } from "../../types/docente";
import { connection } from "../connection";

export async function insertDocente(docente: Docente): Promise<void> {
    const { id, nome, email, dataNascimento, turmaId } = docente;

    await connection("Docente").insert({
        id,
        name: nome,
        email,
        data_nasc: dataNascimento,
        turma_id: turmaId,
    })
}

export async function selectDocentes(): Promise<Docente[] | undefined> {

    const result = await connection("Docente")

    if (result) {
        const tipagemDocentes = result.map((docente: any) => {
            return tipagemDocente(docente)
        })
        return tipagemDocentes
    } else {
        return undefined
    }
}

export async function selectDocente(id: string): Promise<Docente | undefined> {

    const [result] = await connection("Docente")
        .where({ id })

    if (result) {
        const tipoDocente = tipagemDocente(result)
        return tipoDocente
    } else {
        return undefined
    }
}


export async function updateDocente(idDocente: string, turma: string) {
    await connection("Docente").where("id", `${idDocente}`).update({ turma_id: turma })
}