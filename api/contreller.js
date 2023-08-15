

const returnIndex = (request, response) => {
	response.send('aaaaaaa')
}

const showBio = (request, response) => {
	response.send('Sou estudante de Análise e Desenvolvimento de Sistemas pelo SENAC e busco constantemente me aprimorar por meio de cursos extras na área de desenvolvimento web, o que me permite aprimorar minhas habilidades em  linguagens de programação e frameworks. Dentre minhas principais na área de tecnologia, minha fluência em inglês, que me permite acessar e compreender conteúdos técnicos emblíngua estrangeira, além da capacidade  de trabalho em equipe e organização, que são essenciais para o desenvolvimento de projetos colaborativos e eficientes.')
}


module.exports = { returnIndex, showBio}