import { getBio } from "./services.js";


const buildBio = () => {
    const textoBio = getBio().then( (responseBio)  => {
        const divBio = document.querySelector('#bio')

        const paragrafoBio = document.createElement('p')
        paragrafoBio.innerHTML = responseBio
    
        divBio.appendChild(paragrafoBio)
    } )
}

buildBio()