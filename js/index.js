// import {renderAside} from "./modules/renderAside.js"

async function getFarm(){
    const url = "https://justcors.com/tl_288aad0/https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417"
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}

async function getPlantations(){
    const url = "https://justcors.com/tl_288aad0/https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=379238b5-705c-48bc-b8c9-27e26676b417"
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}

async function getNotes(){
    const url = "https://justcors.com/tl_288aad0/https://farmbox.cc/api/public/technical_visit_report/notes.json?token=379238b5-705c-48bc-b8c9-27e26676b417"
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}

// elementos do DOM
const farmName = document.querySelector('[farm-name]')
const dataVisita = document.querySelector('[data-da-visita]')
const safra = document.querySelector('[safra]')
const tecnico = document.querySelector('[nome-tecnico]')
const initials = document.querySelector('[initials]')
const obsFazenda = document.querySelector('[obs-fazenda]')

async function renderAside(){

    const data = await getFarm().then(res => {
        return res
    })

    farmName.textContent = data.farm.name

    // config a data
    const date = data.details.date
    const newDate = date.split("-")
    dataVisita.textContent = `${newDate[2]}/${newDate[1]}/${newDate[0]}`

    safra.textContent = data.harvest.name
    tecnico.textContent = data.owner.name
    initials.textContent = data.owner.initials
    obsFazenda.textContent = data.details.observation

}
renderAside()


// PLANTATIONS

// async function renderPlantations(){
//     const plantations = await getPlantations().then(res => {
//         console.log(res)
//         return res
//     })

//     plantations.results.forEach(element => {
//         console.log(element)
//         renderHeader(element)
//         });

    
// }
// renderPlantations()


async function renderNotes(){
    const notes = await getNotes().then(res => {
        return res
    })

    // console.log(notes)
    
    const plantations = await getPlantations().then(res => {
        return res
    })
    // console.log(plantations)

    
    // pegando os cards da fazenda
    notes.results.forEach(element => {
        if (element.location_type === "Farm"){
            renderCardFarm(element)
        }
    });


    let ids = []
    plantations.results.forEach((element, index) => {
        // ids.push(element.id)
        console.log(element)
        renderHeader(element)

        notes.results.forEach(note => {
            if (note.location_type === "Plantation"){
                if (element.id === note.location.id){
                    renderCard(note)
                } 
            }
        });
       
    });
    

    
}
renderNotes()



function renderCardFarm(element){
    const divCardFarm = document.querySelector(".farm-notes")

    // Verificando se há imagens no card
    if (element.attachments.images.length !== 0){
        //Add cada url de img para poder acessar
        const urls = []
        element.attachments.images.forEach( el => {
            urls.push(el.thumb_url)
        })
        
        // Criando o Card
        const card = `
            <div class="card">
                <h3><span><i class="fa-solid fa-pencil"></i></span>Anotação</h3>
                <div class="image">
                    ${urls.map(e => `<img src="${e}" alt="img" class="img">`).join("")}
                </div>
                <p>${element.description}</p>
            </div>
            `
        // Add o card a estrutura do html
        divCardFarm.insertAdjacentHTML('afterbegin', card)
    
    } else {
        // caso não haja imagens, construa o card sem a div img
        const card = `
            <div class="card">
                <h3><span><i class="fa-solid fa-pencil"></i></span>Anotação</h3>
                <p>${element.description}</p>
            </div>
            `
        divCardFarm.insertAdjacentHTML('afterbegin', card)
    }      
}

function renderCard(element){
    const divHeader = document.querySelector("[data-he]")

    // Verificando se há imagens no card
    if (element.attachments.images.length !== 0){
        //Add cada url de img para poder acessar
        const urls = []
        element.attachments.images.forEach( el => {
            urls.push(el.thumb_url)
        })

        // Criando o Card
        const card = `
            <div class="card">
                <h3><span><i class="fa-solid fa-pencil"></i></span>Anotação</h3>
                <div class="image">
                    ${urls.map(e => `<img src="${e}" alt="img" class="img">`).join("")}
                </div>
                <p>${element.description}</p>
            </div>
            `
        
        // Add o card a estrutura do html
        divHeader.insertAdjacentHTML('afterbegin', card)
        // console.log(card)
    
    } else {
        // caso não haja imagens, construa o card sem a div img
        const card = `
            <div class="card">
                <h3><span><i class="fa-solid fa-pencil"></i></span>Anotação</h3>
                <p>${element.description}</p>
            </div>
            `
        divHeader.insertAdjacentHTML('afterbegin', card)

    }
          
}

function renderHeader(element){
    const divHeader = document.querySelector(".events")
    const header = `
    <div class="event" >
    <div class="event event-header" >
        <div class="events-header-farm-title">
            <div class="event-header-title">
                <h3 header-title>${element.name}</h3>
                <span class="ciclo">${element.cycle}° ciclo</span>
            </div>
       
            <p cultivar><span size>${element.variety.name} - ${element.area}ha</span> </p>
                <div class="plantado">
            <p plantado>${element.state == "active" ? 'plantado' : ""}</p>
        </div>
   </div>
   
   <div class="events-header-dates">
       <div class="dates-info">
           <p>Data de platio</p>
           <p>Emergência</p>
           <p>Colheita</p>
       </div>
       <div class="dates-date">
           <p>${element.date !== null ? element.date.split('-').reverse().join('/') : "Não informado"}</p>
           <p>${element.emergence_date ? element.emergence_date.split('-').reverse().join('/') : 'Não informado'}</p>
           <p>${element.harvest_prediction_date !== null ? element.harvest_prediction_date.split('-').reverse().join('/') : "Não informado"}</p>
       </div>
   </div>

   <div class="events-container-arrow">
       <i class="fa-solid fa-chevron-up" id="events-arrow" arrow></i>
   </div>

</div>
<div class="farm-notes" data-he>
</div>

</div>`

divHeader.insertAdjacentHTML('beforeend', header)
}

