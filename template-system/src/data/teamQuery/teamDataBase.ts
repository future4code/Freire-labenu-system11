import { tipageTurma, Team, TurmaBancoDeDados } from "../../types/typeTeam";
import { connection } from "../Connection";

export async function insertTurma(turma: Team): Promise<void> {
    const { id, name } = turma;

    await connection("Turma").insert({
        id,
        name
    })
}


export async function buscarTurmas(): Promise<TurmaBancoDeDados[] | undefined> {
    const result = await connection().select("*").from("turma").where("modulo", "like", "%9%")

    if (result) {
        const tipoTurma = result.map((turma) => {
            return tipageTurma(turma)
        })
        return tipoTurma
    } else {
        return undefined
    }
}

export async function buscarTurma(idTurma: string): Promise<TurmaBancoDeDados | undefined> {
    const [result] = await connection("Turma").where("id", `${idTurma}`)

    if (result) {
        return tipageTurma(result)
    } else {
        return undefined
    }

}

export async function updateModulo(idTurma: string, modulo: string): Promise<void> {
    await connection("turma").where("id", `${idTurma}`).update({ modulo })
}

export async function updateEstudante(idEstudante: string, idTurma: string) {
    await connection("estudante").where("id", `${idEstudante}`).update({ turma_id: idTurma })
}