const fetch = require('node-fetch') 

// function creatFetch(method, url, body = null){
    
//     function hendleError(response){
//         if(!response.ok){
//             throw Error(response.status + ": " + response.statusText)
//         }
//         return response
//     }
    
//     return fetch(url, {
//         method,
//         body,
//         headers: {
//             "Content-Type": "application/json;charset=UTF-8",
//         }
//     })
//         .then(response => hendleError(response))
//         .then(response => response.json())
// }
const url = "https://justcors.com/tl_5cfd0d2/https://farmbox.cc/api/public/technical_visit_report/notes.json?token=379238b5-705c-48bc-b8c9-27e26676b417"

async function getData(data){
    try{
        const response = await fetch(data)
        let teste = (await response.json()).results
        return teste

    } catch(e){
        console.log(e)
    }
}




getData(url).then(dado => pegaDado(dado))






// BRINCANDO














