import { plantations } from './urls/plantations.js'

export async function getPlantations(){
    const url = plantations
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}