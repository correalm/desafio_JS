import {renderAside} from "./renderAside.js"
import {renderNotes} from './renderNotes.js'

export function load(){
    window.onload = async () => {
        document.querySelector(".wrapper").style = "display: none;"
        const teste = document.querySelector(".farm-notes")
        const teste2 = document.querySelector(".events")
        const title = `<h2>Anotações da fazenda</h2>`
        const title2 = `<h2>Eventos dos talhões</h2>`

        if (document.readyState === "complete"){
            try{
                await renderAside()
                await renderNotes()
                teste.insertAdjacentHTML("beforebegin", title)
                teste2.insertAdjacentHTML("afterbegin", title2)
    
            } catch (e){
                console.log(e)
    
            } finally {
    
                document.querySelector(".load").style = "display: none;"
                document.querySelector(".wrapper").style = ""
            }
        
        }
    }
    
}
