# NodeApi

* Descrição do Projeto *

Estou construindo uma API com node + Mongodb e futuramente um front com angular para consumila e deixa-la de portifólio


Requisitos 

1 - Nodejs 8+

2 - Mongodb 3.6.3+ rodando na porta default

3 - Clonar o projeto

4 - Acessar a pasta do projeto pelo terminal, rodar o comando npm install

5 - Rodar o servidor node

6 - Acessar via POSTMAN ou qualquer outro serviço que consuma rotas HTTP

Como usar 

GET    /api/genres -> traz a lista de todos os generos cadastrados

POST   /api/genres -> body { name: "nome do genero" }

GET    /api/genres/:id -> lista genero selecionado

PUT    /api/genres/:id -> body { name: "novo nome" } edita o genero selecionado

DELETE /api/genre/:id -> deleta o genero pelo ID


GET   /api/movies -> lista dos filmes cadastrados

GET   /api/movies/:id -> traz o filme selecionado

POST  /api/movies -> 
{ 
   title:           "nome",
   numberInStock:   3,
   dailyRentalRate: 4.50,
   genre: {
       _id: iddegenero
   }
}

PUT /api/movies -> 
{ 
    title:           "nome",
    numberInStock:   3,
    dailyRentalRate: 4.50,
    genre: {
        _id:  iddegenero,
        name: nomedogenero
    }                          
} 

DELETE /api/movies/:id -> deleta o filme selecionado
