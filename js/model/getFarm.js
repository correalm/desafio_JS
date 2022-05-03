import { farm } from './urls/farm.js'
import { rain } from './urls/rain.js'

export async function getFarm(){
    const url = farm
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}

export async function getRain(){
    const url = rain
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}