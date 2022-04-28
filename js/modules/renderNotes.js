import {getNotes} from './getNotes.js'
import {getPlantations} from './getPlantations.js'
import {renderCard} from './renderCard.js'
import {renderCardFarm} from './renderCardFarm.js'
import {renderHeader} from './renderHeader.js'

export async function renderNotes(){
    const notes = await getNotes().then(res => {
        return res
    })
    
    const plantations = await getPlantations().then(res => {
        return res
    })
    
    // pegando os cards da fazenda
    notes.results.forEach((element) => {
        if (element.location_type === "Farm"){
            renderCardFarm(element)
        }
    });

    let notasPlantation = []
   
    notes.results.forEach( nota => {
        plantations.results.forEach (plantation => {
            if (plantation.id === nota.location.id){
                notasPlantation.push(nota)
            }
        })
    })

    
    plantations.results.forEach( (plantation, index) => {
        let test = false

        notes.results.forEach( nota => {
            if (nota.location.id === plantation.id){
                test = true
            } 
        })

        renderHeader(plantation, index, test)

        notasPlantation.forEach( nota => {
            if (plantation.id === nota.location.id){
                let currentid = nota.location.id
                renderCard(nota, currentid) 
            }
        })   
    });
}