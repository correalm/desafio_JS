import {getFarm, getRain} from './getFarm.js'
import {getPlantations} from './getPlantations.js'

export async function renderAside(){

    const data = await getFarm().then(res => {
        return res
    })

    // const plantations = await getPlantations().then(res => {
    //     console.log(res)
    //     return res  
    // })
    const farm = {
        results : [
            {
                area: 30.00,
                date: "2025-11-01",
                emergence_date: "2025-11-21",
                emergence_prediction_date: "2026-11-21",
                harvest_prediction_date: "2026-12-12",
                cycle: 1,
                harvest: {
                    name: "2025/26"
                },
                id: 66666,
                name: "Testando Obj",
                state: "active",
                variety: {
                    name: "coloridão"
                }
            },
            {
                area: 60.00,
                date: "1999-07-26",
                emergence_date: "2025-11-17",
                emergence_prediction_date: "2023-08-09",
                harvest_prediction_date: "1984-01-01",
                cycle: 1,
                harvest: {
                    name: "1984/99"
                },
                id: 66667,
                name: "Absurdo",
                state: "active",
                variety: {
                    name: "Amarelão"
                }
            },
            {
                area: 90.00,
                date: "1889-07-26",
                emergence_date: "2155-11-17",
                emergence_prediction_date: "2333-08-09",
                harvest_prediction_date: "1900-01-01",
                cycle: 1,
                harvest: {
                    name: "2000/01"
                },
                id: 66668,
                name: "Absurdamente certo",
                state: "active",
                variety: {
                    name: "Verdão"
                }
            },
            {
                area: 120.00,
                date: "1988-01-01",
                emergence_date: "1988-02-02",
                emergence_prediction_date: "1988-03-03",
                harvest_prediction_date: "1988-04-04",
                cycle: 1,
                harvest: {
                    name: "1988/99"
                },
                id: 66669,
                name: "Absurdamente certo novamente",
                state: "active",
                variety: {
                    name: "Constituição"
                }
            }
    
        ]
    }

    const plantations= farm

    const rain = await getRain().then(res => {
        return res
    })
   
    const wrapper = document.querySelector(".wrapper")

    // config a data
    const date = data.details.date
    const newDate = date.split("-")
    const dataVisita = `${newDate[2]}/${newDate[1]}/${newDate[0]}`

    const farmName = data.farm.name
    const talhoes = plantations.results.length
    const safra = data.harvest.name
    const tecnico = data.owner.name
    const initials = data.owner.initials
    const obsFazenda = data.details.observation


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
                    <p obs-fazenda>${obsFazenda}</p>
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