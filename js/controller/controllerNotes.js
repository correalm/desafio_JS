import {renderCard} from '../view/renderCard.js'
import {renderHeader} from '../view/renderHeader.js'

export async function renderNotes(notes, plantations){

    // construindo os cards da fazenda
    notes.results.forEach( note => {
        if (note.location_type === "Farm"){
            renderCard(note, "Farm")
        }
    })


    // Renderizando os cards e cabeçalhos dos talhões 
    plantations.results.forEach( (plantation, index) => {
        if (index === 0) {
            renderHeader(plantation, true)
        } else {
            renderHeader(plantation, false)
        }

        notes.results.forEach( note => {
            if (plantation.id === note.location.id){
                let currentid = note.location.id
                renderCard(note, "Plantation", currentid) 
            }
        })   
    });
}
