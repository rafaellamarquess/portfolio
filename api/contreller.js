const listaBio = ['Certificado em Lógica de Programação pelo IFRS EAD;',
'Certificado em JavaScript pelo IFRS EAD;', 'Certificado de HTML: Introdução ao Desenvolvimento de Páginas Web pelo IFRS EAD;',
'Certificado em Banco de Dados 1: Fundamentos pelo IFRS EAD;', 'Certificado de Administrando Banco de Dados pela Fundação Bradesco EAD;',
'Certificado em Linguagem de Programação Java - Básico pela Fundação Bradesco EAD;', 'Certificado em Projetos de Sistemas de TI pela Fundação Bradesco EAD.',
'Certificado em emplementação de Banco de Dados pela FUndação Bradesco' ]
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