export async function renderAside(farm, plantations, rain){

    const wrapper = document.querySelector(".wrapper")

    // config a data
    const date = farm.details.date
    const newDate = date.split("-")
    const dataVisita = `${newDate[2]}/${newDate[1]}/${newDate[0]}`

    const farmName = farm.farm.name
    const talhoes = plantations.results.length
    const safra = farm.harvest.name
    const tecnico = farm.owner.name
    const initials = farm.owner.initials
    const obsFarm = farm.details.observation


    const aside = `
        <aside>
                <div class="title">
                    <h3>Fazenda</h3>
                    <p farm-name>${farmName}</p>
                    <p class="p-talhoes">${talhoes > 1 ? `${talhoes + rain.plots} talhões` : `1 talhão`}</p> 
                </div>
                <div class="info">
                    <div class="date">
                        <div class="visit">
                            <h3>Data da visita</h3>
                            <p data-da-visita>${dataVisita}</p>
                        </div>
                        <div class="safra">
                            <h3>Safra</h3>
                            <p safra>${safra}</p>
                        </div>
                    </div>
                    <div class="wrapperAside">
                        <div class="name">
                            <div class="tecnico">
                                <h3>Realizada por:</h3>
                                <p nome-tecnico>${tecnico}</p>
                            </div>
                            <div class="init">
                                <p initials>${initials}</p>
                            </div>  
                        </div>
                    <div class="pluv">
                            <h3>Pluviometria</h3>
                            <p><span><i class="fa-solid fa-droplet"></i></span>${rain.rain_until_date}mm</p>
                            <p class="acumulo">Acumulado na safra</p>
                        </div> 
                    </div> 
                </div>
                <div class="obs">
                    <h3>Observações</h3>
                    <p obs-fazenda>${obsFarm}</p>
                </div>
                <div class="press">
                    <button class="btn">
                        <span><i class="fa-solid fa-print"></i></span>
                        IMPRIMIR
                    </button>
                </div>
        </aside> 
    `
    wrapper.insertAdjacentHTML('afterbegin', aside)
    document.querySelector(".btn").addEventListener("click", function(){
        const press = document.querySelector(".press")
        press.style.display = "none"
        window.print()
        press.style.display = ""

    })

}
