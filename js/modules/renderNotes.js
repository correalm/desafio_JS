import {getNotes} from './getNotes.js'
import {getPlantations} from './getPlantations.js'
import {renderCard} from './renderCard.js'
import {renderCardFarm} from './renderCardFarm.js'
import {renderHeader} from './renderHeader.js'

export async function renderNotes(){
    /*
        Coleta as notas ("Farm" e "Plantations") e plantations (talhões))
    */

    const notes = await getNotes().then(res => {
        return res
    })

    const plantations = await getPlantations().then(res => {
        return res
    })

    // pegando os cards da fazenda
    let notasFarm = [] 
    notes.results.forEach((element) => {
        if (element.location_type === "Farm"){
            notasFarm.unshift(element)
        }
    });

    // Renderizando os cards da fazenda 
    notasFarm.forEach( nota => {
        renderCardFarm(nota)
    })

    // pegando as notas dos talhões
    let notasPlantation = [] 
    notes.results.forEach( nota => {
        plantations.results.forEach (plantation => {
            if (plantation.id === nota.location.id){
                notasPlantation.unshift(nota)
            }
        })
    })


    // Renderizando os cards e cabeçalhos dos talhões 
    let test = false
    plantations.results.forEach( (plantation) => {
        if (test === false) {
            notes.results.forEach( nota => {
                if (nota.location.id === plantation.id){
                    test = true
                }
            })
            renderHeader(plantation, test) 
        } else {
            renderHeader(plantation, false)
        }

        notasPlantation.forEach( nota => {
            if (plantation.id === nota.location.id){
                let currentid = nota.location.id
                renderCard(nota, currentid) 
            }
        })   
    });
}
