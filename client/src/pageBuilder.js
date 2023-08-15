import { getBio } from "./services.js";


const buildBio = () => {
    const textoBio = getBio().then( (responseBio)  => {
        const divBio = document.querySelector('#bio')

        divBio.setAttribute ("class", "column right" )
        const paragrafoBio = document.createElement('p')
        paragrafoBio.innerHTML = responseBio
    
        divBio.appendChild(paragrafoBio)
    } )
}

buildBio()