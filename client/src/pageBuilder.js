import { getBio, getList } from "./services.js";


const buildBio = () => {
    const textoBio = getBio().then( (responseBio)  => {
        const divBio = document.querySelector('#bio')

        divBio.setAttribute ("class", "column right" )
        const paragrafoBio = document.createElement('p')
        paragrafoBio.innerHTML = responseBio
    
        divBio.appendChild(paragrafoBio)
        listaBio(divBio)
    } )
}

const listaBio = (divBio) => {
    const listaBio =  getList().then( (responseList)  => {
        console.log(responseList)
        responseList.forEach((item) => {
         const itemLista = document.createElement('li')
         itemLista.innerHTML = item

         divBio.appendChild(itemLista)
        })
    })
}

buildBio()