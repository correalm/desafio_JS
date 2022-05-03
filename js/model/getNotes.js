import { notes } from './urls/notes.js'

export async function getNotes(){
    const url = notes
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}