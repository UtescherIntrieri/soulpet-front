# SoulPet API (Front-End)
Bem-vindo(a), aqui você irá aprender como a API funciona e como utilizá-la. 

Back-End -> [README.md]

>[MIT License  
Copyright (c) 2023 SoulPet]

#

## Index
- [Para que serve a API](#para-que-serve-a-api)
- [O que conseguirei dessa API](#o-que-conseguirei-dessa-api)
- [Instalação](#instalação)
  - [Dependências necessárias](#dependências-necessárias)
  - [Ferramentas necessárias](#ferramentas-necessárias-necessárias)
- [Utilização](#utilização)
  - [Inicialização](#inicialização)
  - [Rotas Disponíveis](#rotas-disponíveis)
- [Devs](#devs)


#

## Para que serve a API? 
&ensp;&ensp;A SoulPet API é uma aplicação para sistemas internos de petshops, que provê a integração de um banco de dados para cadastro e manipulação de clientes, pets, produtos, serviços e pedidos.  
&ensp;&ensp;A clareza visual é um foco para essa API, onde os funcionários que estarão trabalhando com ela têm uma interface clara e amigável, facilitando o fluxo de trabalho. Além disso, todas os dados são validados de acordo com seu tipo e informação.

#
 ## O que conseguirei dessa API?
### &ensp;&ensp;A API oferece diversos recursos e ferramentas, assim como:
- A realização e manutenção do cadastro de clientes, com seu nome, e-mail e telefone, assim como a de seus respectivos pets, com nome, tipo, porte, e data de nascimento. 
- Cadastrar produtos e checar sua disponibilidade em estoque. 
- O agendamentos de serviços
- Criação e organização de pedidos   
- E muito mais.  

&ensp;&ensp;Com a utilização dessa API, os petshops mantem um banco de dados único que otimiza o trabalho e o fluxo de informações dentro da empresa, indiretamente diminuindo erros e tempo desperdiçado.  

# Instalação
&ensp;&ensp;Realizar um `Git Clone` do repositório.  
&ensp;&ensp;`npm install` para instalar todas as dependências necessárias.

## Dependências Necessárias

>[axios] | [bootstrap] | [bootstrap-icons] | [react] | [react-bootstrap] | [react-dom] | [react-hook-form] | [react-hot-toast] | [react-router-dom] | [react-scripts] | [web-vitals]  

## Ferramentas necessárias:
>[MySQl]  
[Git]  
[Node js]  


# Utilização
&ensp;&ensp;Deve-se primeiro inicializar o repositório
## Inicialização
`npm start`  
&ensp;&ensp; Abre em: http://localhost:3000

## Rotas disponíveis:
- Home http://localhost:3000/  
- Listar todos os clientes http://localhost:3000/clientes  
  - Cadastrar um novo cliente http://localhost:3000/clientes/novo  
  - Editar os dados de um cliente http://localhost:3000/clientes/editar/:id  
- Listar todos os pets http://localhost:3000/pets  
  - Cadastrar um novo pet http://localhost:3000/pets/novo  
  - Editar os dados de um pet http://localhost:3000/pets/editar/:id  
- Listar todos os produtos http://localhost:3000/produtos  
  - Cadastrar um novo produto http://localhost:3000/produtos/novo  
  - Editar dados de um produto http://localhost:3000/produtos/editar/:id  
- Listar todos os agendamentos http://localhost:3000/agendamentos  
  - Cadastrar um agendamento novo http://localhost:3000/agendamentos/novo  
- Listar todos os serviços http://localhost:3000/servicos

*Obs: :id = id do objeto no mySQL*  
&ensp;&ensp;*Para editar o pet de id 1 -> localhost:3000/pets/editar/1*  
&ensp;&ensp;*Para verificar os padrões de validação verifique o [README.md] do back-end*

#
## Devs:
>## - [Nai Utescher]
>## - [Juliana Andrade]
>## - [Gabriel Camilo]
>## - [Yuri Schuery]
>## - [Daniela Guilhoto]
#

[MIT License  
Copyright (c) 2023 SoulPet]: LICENSE.md
[README.md]: ../soulpet-back/README.md
[axios]: https://axios-http.com
[bootstrap]: https://getbootstrap.com
[bootstrap-icons]: https://icons.getbootstrap.com
[react]: https://react.dev
[react-bootstrap]: https://react-bootstrap.github.io
[react-dom]: https://www.npmjs.com/package/react-dom
[react-hook-form]: https://react-hook-form.com
[react-hot-toast]: https://react-hot-toast.com
[react-router-dom]: https://www.npmjs.com/package/react-router-dom
[react-scripts]: https://www.npmjs.com/package/react-scripts
[web-vitals]: https://www.npmjs.com/package/web-vitals
[MySQl]: https://dev.mysql.com/downloads/installer/
[Git]: https://git-scm.com/downloads
[Node js]: https://nodejs.org/en/download
[Nai Utescher]: https://github.com/UtescherIntrieri
[Juliana Andrade]: https://github.com/andradeju
[Gabriel Camilo]: https://github.com/gabrielcamilo21
[Yuri Schuery]: https://github.com/souzaschuery
[Daniela Guilhoto]: https://github.com/DGuilhoto