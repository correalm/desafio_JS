export function renderCard(note, type,  currentid = null){
    const divHeader = document.querySelector(`[data-he${currentid}]`)
    const divCardFarm = document.querySelector(".farm-notes")

    // Verificando se há imagens no card
    if (note.attachments.images.length !== 0){
        //Add cada url de img para poder acessar
        const urls = note.attachments.images.map( el => el.medium_url)

        // if type === farm 
            // divCardFarm.insertAdjacentHTML('afterbegin', card)
        
 

        // Criando o Card
        const card = `
            <div class="card">
                <h3><span><i class="fa-solid fa-pencil"></i></span>Anotação</h3>
                <div class="image">
                    ${urls.map(url => `<img src="${url}" alt="img" class="img">`).join("")}
                </div>
                <p>${note.description}</p>
            </div>
        `
        
        // Add o card a estrutura do html
        if (type === "Farm"){
            divCardFarm.insertAdjacentHTML('afterbegin', card)
        } else {
            divHeader.insertAdjacentHTML('afterbegin', card)
        }
        
    
    } else {
        // caso não haja imagens, construa o card sem a div img
        const card = `
            <div class="card">
                <h3><span><i class="fa-solid fa-pencil"></i></span>Anotação</h3>
                <p>${note.description}</p>
            </div>
        `
            if (type === "Farm"){
                divCardFarm.insertAdjacentHTML('afterbegin', card)
            } else {
                divHeader.insertAdjacentHTML('afterbegin', card)
            }
    }
          
}