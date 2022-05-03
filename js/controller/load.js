import {getFarm, getRain} from '../model/getFarm.js'
import {getPlantations} from '../model/getPlantations.js'
import {getNotes} from '../model/getNotes.js'
import {renderAside} from "../view/renderAside.js"
import {renderNotes} from './controllerNotes.js'


export function load(){
    window.onload = async () => {
        // document.querySelector("main").className = "load"
        document.querySelector(".wrapper").style = "display: none;"
        const teste = document.querySelector(".farm-notes")
        const teste2 = document.querySelector(".events")
        const title = `<h2>Anotações da fazenda</h2>`
        const title2 = `<h2>Eventos dos talhões</h2>`

        const farm = await getFarm()
        const plantations = await getPlantations()
        const rain = await getRain()
        const notes = await getNotes()

        if (document.readyState === "complete"){
            try{
                await renderAside(farm, plantations, rain)
                await renderNotes(notes, plantations)
                teste.insertAdjacentHTML("beforebegin", title)
                teste2.insertAdjacentHTML("afterbegin", title2)
    
            } catch (e){
                console.log(e)
    
            } finally {
                document.querySelector("main").classList.remove("load")
                document.querySelector("[load]").style = "display: none;"
                document.querySelector(".wrapper").style = ""
            }
        
        }
    }
    
}
