import { getBio, getList, getApiGitHub } from "./services.js";


const buildBio = (responseBio) => {
    const divBio = document.querySelector('#bio')

    divBio.setAttribute("class", "column right")
    const paragrafoBio = document.createElement('p')
    paragrafoBio.innerHTML = responseBio

    divBio.appendChild(paragrafoBio)
    listaBio(divBio)
}


const fetchBio = () => {
    getBio().then((responseBio) => {
        buildBio(responseBio)
    }).catch(() => {
            buildBio(
                `Sou estudante de Análise e Desenvolvimento de Sistemas pelo SENAC e busco constantemente me aprimorar por meio de cursos extras na área de
        desenvolvimento web, o que me permite aprimorar minhas habilidades em  linguagens de programação e frameworks. Dentre minhas principais na área de tecnologia,
        minha fluência em inglês, que me permite acessar e compreender conteúdos técnicos emblíngua estrangeira, além da capacidade  de trabalho em equipe e organização,
        que são essenciais para o desenvolvimento de projetos colaborativos e eficientes.`
            )
            console.error("api não disponível")
        })
}



const listaBio = (divBio) => {
    const buildLista = (listaTexto) => {
        listaTexto.forEach((item) => {
            const itemLista = document.createElement('li')
            itemLista.innerHTML = item

            divBio.appendChild(itemLista)
        })
    }
    getList().then((responseList) => {
        buildLista(responseList)
    }).catch(() => buildLista(['Certificado em Lógica de Programação pelo IFRS EAD;',
        'Certificado em JavaScript pelo IFRS EAD;', 'Certificado de HTML: Introdução ao Desenvolvimento de Páginas Web pelo IFRS EAD;',
        'Certificado em Banco de Dados 1: Fundamentos pelo IFRS EAD;', 'Certificado de Administrando Banco de Dados pela Fundação Bradesco EAD;',
        'Certificado em Linguagem de Programação Java - Básico pela Fundação Bradesco EAD;', 'Certificado em Projetos de Sistemas de TI pela Fundação Bradesco EAD.',
        'Certificado em emplementação de Banco de Dados pela FUndação Bradesco']
    ))
}

fetchBio()



const getRepository = () => {
    const gitResponse = getApiGitHub().then((response) => {
        response.forEach((item) => {
            carouselBuilder(item)
        })
    })
}


const swipper = new Swiper(".swiper-container", {
    slidesPerView: 6,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        appendButtons: document.querySelector(".project-content"),
    },
})


const carouselBuilder = (item) => {
    const carouselProject = document.querySelector(".swiper-wrapper")
    const divElement = document.createElement("div")
    divElement.className = "swiper-slide card"
    divElement.innerHTML =
        `
            <img src="Assets/pasta.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Projeto: ${item.name}</h5>
                <p class="card-text">Linguagem mais utilizada: ${item.language}</p>
                <a href="${item.html_url}" class="btn btn-primary">Ir para repositório</a>
            </div>
        </div>
    `

    carouselProject.appendChild(divElement)
}

getRepository()