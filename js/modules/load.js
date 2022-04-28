import {renderAside} from "./renderAside.js"
import {renderNotes} from './renderNotes.js'

export function load(){
    window.onload = event => {
            document.querySelector(".load").style = "height: 100%;width: 100%;display: flex;align-items: center;justify-content: center;"
            document.querySelector(".wrapper").style = "display: none;"

            const teste = document.querySelector(".farm-notes")
            const teste2 = document.querySelector(".events")

            const title = `<h2>Anotações da fazenda</h2>`
            const title2 = `<h2>Eventos dos talhões</h2>`

            
            if (document.readyState === "complete"){
                console.log("completo")
                // setTimeout(function(){
                    document.querySelector(".load").style = "display: none;"
                    document.querySelector(".wrapper").style = ""
                    renderAside()

                    teste.insertAdjacentHTML("beforebegin", title)
                    teste2.insertAdjacentHTML("afterbegin", title2)
                    renderNotes()
            }
        else {
            console.log("ERRO")
        }
    }
    
}
