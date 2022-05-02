export function renderHeader(element, boolean){
    const divHeader = document.querySelector(".events")

    if (boolean) {
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
                <p plantado>${element.state == "active" ? 'Plantado' : ""}</p>
            </div>
       </div>
       
       <div class="events-header-dates">
           <div class="dates-info">
               <p>Data de platio</p>
               <p>Emergência</p>
               <p>Colheita</p>
           </div>
           <div class="dates-date">
               <p>${element.date !== null ? element.date.split('-').reverse().join('/') : "Sem data"}</p>
               <p>${element.emergence_date ? element.emergence_date.split('-').reverse().join('/') : 'Sem data'}</p>
               <p>${element.harvest_prediction_date !== null ? element.harvest_prediction_date.split('-').reverse().join('/') : "Sem data"}</p>
           </div>
       </div>
    
       <div class="events-container-arrow">
           <i class="fa-solid fa-chevron-up" id="events-arrow${element.id}" arrow></i>
       </div>
    
    </div>
    <div class="farm-notes" data-he${element.id}>
    </div>
    
    </div>`
    
    divHeader.insertAdjacentHTML('beforeend', header)
    
    
    const btn = document.querySelector(`#events-arrow${element.id}`)
    const esconder = document.querySelector(`[data-he${element.id}]`)

    btn.addEventListener("click", function(){
    
        if (esconder.classList.contains("escondi")){
            btn.style.transform = ""
            esconder.style.display = ""
            esconder.classList.remove("escondi")
            console.log(esconder.classList.contains("escondi"))
            console.log("CLIQUEI")
        } else {
            btn.style.transform = "rotateX(180deg)"
            // btn.style.transform = "rotateX(360deg)"
            // btn.style.transform = "rotateX(180deg)"
            esconder.classList.add("escondi")
            esconder.style.display = "none"
        }
    })
    return false
    } 
    else {
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
           <i class="fa-solid fa-chevron-up" id="events-arrow${element.id}" style="transform: rotateX(180deg);" arrow></i>
       </div>
    
    </div>
    <div class="farm-notes escondi" data-he${element.id} style="display: none;">
    </div>
    
    </div>`
    
    divHeader.insertAdjacentHTML('beforeend', header)
    
    
    const btn = document.querySelector(`#events-arrow${element.id}`)
    const esconder = document.querySelector(`[data-he${element.id}]`)
    
    btn.addEventListener("click", function(){
    
        if (esconder.classList.contains("escondi")){
            btn.style.transform = ""
            esconder.style.display = ""
            esconder.classList.remove("escondi")
        } else {
            btn.style.transform = "rotateX(180deg)"
            esconder.classList.add("escondi")
            esconder.style.display = "none"
        }
    })
    return true
    }
}
