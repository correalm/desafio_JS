export async function getFarm(){
    const url = "https://justcors.com/tl_5cfd0d2/https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417"
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data

    } catch (e){
        console.log("Erro -> " , e)
    }
}

