const listaBio = ['uma cois', 'outra coisa']
const textoBio = `Sou estudante de Análise e Desenvolvimento de Sistemas pelo SENAC e busco constantemente me aprimorar por meio de cursos extras na área de
desenvolvimento web, o que me permite aprimorar minhas habilidades em  linguagens de programação e frameworks. Dentre minhas principais na área de tecnologia,
minha fluência em inglês, que me permite acessar e compreender conteúdos técnicos emblíngua estrangeira, além da capacidade  de trabalho em equipe e organização,
que são essenciais para o desenvolvimento de projetos colaborativos e eficientes.`


const showListaBio= (request, response) => {
	response.send(listaBio)
}

const showBio = (request, response) => {
	response.send(textoBio)
}



module.exports = {showBio, showListaBio}