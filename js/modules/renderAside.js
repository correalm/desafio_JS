import {getFarm} from './getFarm.js'

export async function renderAside(){

    const data = await getFarm().then(res => {
        return res
    })
    const farmName = document.querySelector('[farm-name]')
    const dataVisita = document.querySelector('[data-da-visita]')
    const safra = document.querySelector('[safra]')
    const tecnico = document.querySelector('[nome-tecnico]')
    const initials = document.querySelector('[initials]')
    const obsFazenda = document.querySelector('[obs-fazenda]')
    const titleHeader = document.querySelector('[title]')

    // config a data
    const date = data.details.date
    const newDate = date.split("-")
    dataVisita.textContent = `${newDate[2]}/${newDate[1]}/${newDate[0]}`
    farmName.textContent = data.farm.name



    safra.textContent = data.harvest.name
    tecnico.textContent = data.owner.name
    initials.textContent = data.owner.initials
    obsFazenda.textContent = data.details.observation

}