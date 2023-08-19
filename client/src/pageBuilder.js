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



const repositorios = document.querySelector(".project-content")
const getApiGitHub = () => {
    fetch('https://api.github.com/users/rafaellamarquess/repos').then(async res => {
        if (!res.ok) {
            throw new Error(res.status)
        }

        let data = await res.json();
        data.map (item => {
            let projetos = document.createElement('div')
            projetos.innerHTML = `
            <div class="project-content">
            <div class="card" style="width: 18rem;">
            <img src="Assets/wikimedieval.png" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text"> ${item.name}</p>
            </div>
            <div>
            <span class= "language"><span class= "circle"></span>${item.language}</span>
            <a href="${item.html_url}" target="_black">${item.html_url}</a>
            </div>
        </div>`
            
            repositorios.appendChild(projetos)
        })
    })
}

getApiGitHub()