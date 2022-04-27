import { getFarm } from "./getFarm.js"


export async function renderAside(){

    const data = await getFarm().then(res => console.log(res))
}
