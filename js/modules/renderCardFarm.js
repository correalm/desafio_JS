export function renderCardFarm(element){
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