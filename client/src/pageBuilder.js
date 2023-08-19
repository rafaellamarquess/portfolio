import { getBio, getList, getApiGitHub } from "./services.js";


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



const getRepository = () => {
    const gitResponse = getApiGitHub().then ((response) => {
        response.forEach ((item) => {
        carouselBuilder(item)
        })
    })
}


const carouselBuilder = (item) => {

    const carouselProject = document.querySelector("#carousel-project")
    // console.log(carouselProject)
    const divElement = document.createElement('div')
    divElement.setAttribute ("style", "width: 18rem;")
    divElement.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
        <img src="Assets/pasta.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Projeto: ${item.name}</h5>
                  <p class="card-text">Descrição: ${item.description}</p>
                  <p class="card-text">Linguagem mais utilizada: ${item.language}</p>
                  <a href="${item.html_url}" class="btn btn-primary">Ir para repositório</a>
            </div>
        </div>
     </div>
    `

    carouselProject.appendChild (divElement)
}

getRepository()