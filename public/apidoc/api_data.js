define({ "api": [
  {
    "type": "delete",
    "url": "/api/clients/:id",
    "title": "Remove um cliente",
    "name": "DeleteClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do cliente</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isGold",
            "description": "<ul> <li>Se é cliente Gold Ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Telefone do cliente</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\",\n   \"isGold\": true,\n   \"name\": \"Ricardo dos Santos Souza\",\n   \"phone\": \"11991346177\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "put",
    "url": "/api/clients/:id",
    "title": "Edita um cliente",
    "name": "EditClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isGold",
            "description": "<ul> <li>Se é cliente Gold Ou não</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do cliente</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do cliente</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Telefone do cliente</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isGold",
            "description": "<ul> <li>Se é cliente Gold Ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Telefone do cliente</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\",\n   \"isGold\": true,\n   \"name\": \"Ricardo dos Santos Souza\",\n   \"phone\": \"11991346177\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/api/clients/:id",
    "title": "Solicita um cliente pelo id",
    "name": "GetClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do cliente.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isGold",
            "description": "<ul> <li>Se é cliente Gold Ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Telefone do cliente</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\",\n   \"isGold\": true,\n   \"name\": \"Ricardo dos Santos Souza\",\n   \"phone\": \"11991346177\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/api/clients/",
    "title": "Solicita lista de clientes",
    "name": "GetClients",
    "group": "Clients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isGold",
            "description": "<ul> <li>Se é cliente Gold Ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Telefone do cliente</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\", \n   \"isGold\": true,\n   \"name\": \"Ricardo dos Santos Souza\",\n   \"phone\": \"11991346177\"\n}, \n{\n   \"_id\": \"5bf4088f5d6b7145b98426d4\",\n   \"isGold\": true,\n   \"name\": \"Oswaldo Cruz\",\n   \"phone\": \"11924568399\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/api/clients",
    "title": "Insere um novo cliente",
    "name": "PostClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isGold",
            "description": "<ul> <li>Se é cliente Gold Ou não</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do cliente</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Telefone do cliente</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isGold",
            "description": "<ul> <li>Se é cliente Gold Ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id unico do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do cliente</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Telefone do cliente</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\",\n   \"isGold\": true,\n   \"name\": \"Ricardo dos Santos Souza\",\n   \"phone\": \"11991346177\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "delete",
    "url": "/api/genres/:id",
    "title": "Remove um gênero",
    "name": "DeleteGenre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do gênero</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do genero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\",\n   \"active\": true,\n   \"name\": \"Suspense\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genres.js",
    "groupTitle": "Genres"
  },
  {
    "type": "put",
    "url": "/api/genres/:id",
    "title": "Edita um gênero",
    "name": "EditGenre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do genero</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se é cliente está ativo ou não</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do gênero</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do genero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\",\n   \"active\": true,\n   \"name\": \"suspense\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genres.js",
    "groupTitle": "Genres"
  },
  {
    "type": "get",
    "url": "/api/genres/:id",
    "title": "Solicita um gênero pelo id",
    "name": "GetGenre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do cliente.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do genero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf7c785b9ff941f03a238bd\",\n   \"active\": true,\n   \"name\": \"Comedia\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genres.js",
    "groupTitle": "Genres"
  },
  {
    "type": "get",
    "url": "/api/gernres/",
    "title": "Solicita lista de generos",
    "name": "GetGenres",
    "group": "Genres",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do genero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf7c770b9ff941f03a238bb\", \n   \"active\": true,\n   \"name\": \"Suspense\",\n}, \n{\n   \"_id\": \"5bf7c785b9ff941f03a238bd\",\n   \"active\": false,\n   \"name\": \"Comedia\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genres.js",
    "groupTitle": "Genres"
  },
  {
    "type": "post",
    "url": "/api/genres",
    "title": "Insere um novo gênero",
    "name": "PostGenre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se é cliente está ativo ou não</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do gênero</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do genero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5bf4088f5d6b7145b98415c6\",\n   \"active\": true,\n   \"name\": \"Comedia\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genres.js",
    "groupTitle": "Genres"
  },
  {
    "type": "delete",
    "url": "/api/movies/:id",
    "title": "Remove um filme",
    "name": "DeleteMovie",
    "group": "Movies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do gênero</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "numberInStock",
            "description": "<ul> <li>Numero de filmes em stock</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dailyRentalRate",
            "description": "<ul> <li>Preço da diaria</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Titulo do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "genre",
            "description": "<ul> <li>Gênero do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre._id",
            "description": "<ul> <li>Id unico do gênero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.name",
            "description": "<ul> <li>Nome do Gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c16cac2932de1301f063d63\", \n   \"numberInStock\": 2,\n   \"dailyRentalRate\": 3,\n   \"title\": \"O pequenino\",\n   \"genre\": {\n     \"_id\": \"5bf7c785b9ff941f03a238bd\",\n     \"active\": true,\n     \"name\": \"comedy\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/movies.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/api/movies/:id",
    "title": "Solicita um filme pelo ID",
    "name": "GetMovie",
    "group": "Movies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberInStock",
            "description": "<ul> <li>Numero de filmes em stock</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "dailyRentalRate",
            "description": "<ul> <li>Preço da diaria</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Titulo do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "genre",
            "description": "<ul> <li>Gênero do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre._id",
            "description": "<ul> <li>Id unico do gênero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.name",
            "description": "<ul> <li>Nome do Gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c16cac2932de1301f063d63\", \n   \"numberInStock\": 2,\n   \"dailyRentalRate\": 3,\n   \"title\": \"O pequenino\",\n   \"genre\": {\n     \"_id\": \"5bf7c785b9ff941f03a238bd\",\n     \"active\": true,\n     \"name\": \"comedy\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/movies.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/api/movies/",
    "title": "Solicita lista de filmes",
    "name": "GetMovies",
    "group": "Movies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberInStock",
            "description": "<ul> <li>Numero de filmes em stock</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "dailyRentalRate",
            "description": "<ul> <li>Preço da diaria</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Titulo do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "genre",
            "description": "<ul> <li>Gênero do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre._id",
            "description": "<ul> <li>Id unico do gênero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.name",
            "description": "<ul> <li>Nome do Gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c16cac2932de1301f063d63\", \n   \"numberInStock\": 2,\n   \"dailyRentalRate\": 3,\n   \"title\": \"O pequenino\",\n   \"genre\": {\n     \"_id\": \"5bf7c785b9ff941f03a238bd\",\n     \"active\": true,\n     \"name\": \"comedy\"\n   }\n}, \n{\n   \"_id\": \"5c16cb83932de1301f063d72\", \n   \"numberInStock\": 1,\n   \"dailyRentalRate\": 5,\n   \"title\": \"Batman Begins\",\n   \"genre\": {\n     \"_id\": \"5bf7c770b9ff941f03a238bb\",\n     \"active\": true,\n     \"name\": \"Ação\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/movies.js",
    "groupTitle": "Movies"
  },
  {
    "type": "post",
    "url": "/api/movies",
    "title": "Insere um novo filme",
    "name": "PostMovies",
    "group": "Movies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberInStock",
            "description": "<ul> <li>Numero de filmes em stock</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dailyRentalRate",
            "description": "<ul> <li>Preço da diaria</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Titulo do filme</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "genre",
            "description": "<ul> <li>Gênero do filme</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genre.id",
            "description": "<ul> <li>Id unico do gênero</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "numberInStock",
            "description": "<ul> <li>Numero de filmes em stock</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dailyRentalRate",
            "description": "<ul> <li>Preço da diaria</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Titulo do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "genre",
            "description": "<ul> <li>Gênero do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre._id",
            "description": "<ul> <li>Id unico do gênero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.name",
            "description": "<ul> <li>Nome do Gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c16cac2932de1301f063d63\", \n   \"numberInStock\": 2,\n   \"dailyRentalRate\": 3,\n   \"title\": \"O pequenino\",\n   \"genre\": {\n     \"_id\": \"5bf7c785b9ff941f03a238bd\",\n     \"active\": true,\n     \"name\": \"comedy\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/movies.js",
    "groupTitle": "Movies"
  },
  {
    "type": "put",
    "url": "/api/movies/:id",
    "title": "Altera um cliente pelo id",
    "name": "PutMovies",
    "group": "Movies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do cliente.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberInStock",
            "description": "<ul> <li>Numero de filmes em stock</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dailyRentalRate",
            "description": "<ul> <li>Preço da diaria</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Titulo do filme</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "genre",
            "description": "<ul> <li>Gênero do filme</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genre.id",
            "description": "<ul> <li>Id unico do gênero</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "numberInStock",
            "description": "<ul> <li>Numero de filmes em stock</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dailyRentalRate",
            "description": "<ul> <li>Preço da diaria</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Titulo do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "genre",
            "description": "<ul> <li>Gênero do filme</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.active",
            "description": "<ul> <li>Se o gênero está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre._id",
            "description": "<ul> <li>Id unico do gênero</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre.name",
            "description": "<ul> <li>Nome do Gênero</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c16cac2932de1301f063d63\", \n   \"numberInStock\": 2,\n   \"dailyRentalRate\": 3,\n   \"title\": \"O pequenino\",\n   \"genre\": {\n     \"_id\": \"5bf7c785b9ff941f03a238bd\",\n     \"active\": true,\n     \"name\": \"comedy\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/movies.js",
    "groupTitle": "Movies"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "Edita um usuário no sistema",
    "name": "EditUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>unico do usuário</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se o usuário está ativo ou não</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do usuário</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>Telefone do usuário</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>Nova senha para o usuário</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do usuario</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>se o usuário está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do usuário</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>E-mail do usuário</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c18c072c726951a8657ba47\", \n   \"active\": true,\n   \"name\": \"ricardo.souza\",\n   \"email\": \"ricardo.tecnology@gmail.com\"\n},",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Solicita um usuário pelo seu ID",
    "name": "GetUser",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do usuario</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>se o usuário está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do usuário</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>E-mail do usuário</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c18c072c726951a8657ba47\", \n   \"active\": true,\n   \"name\": \"ricardo.souza\",\n   \"email\": \"ricardo.tecnology@gmail.com\"\n},",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Solicita lista de usuarios",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do usuario</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>se o usuário está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do usuário</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>E-mail do usuário</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c18c072c726951a8657ba47\", \n   \"active\": true,\n   \"name\": \"ricardo.souza\",\n   \"email\": \"ricardo.tecnology@gmail.com\"\n}, \n{\n   \"_id\": \"5c18c072c726951a8657ba47\",\n   \"isGold\": false,\n   \"name\": \"maria.cruz\",\n   \"phone\": \"maria.cruz@gmail.com\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Insere um novo usuário",
    "name": "PostUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>Se o usuário está ativo ou não</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>Nome do usuário</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>Senha do usuário</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>E-mail do usuário</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>id do usuario</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<ul> <li>se o usuário está ativo ou não</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>nome do usuário</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>E-mail do usuário</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c18c072c726951a8657ba47\", \n   \"active\": true,\n   \"name\": \"ricardo.souza\",\n   \"email\": \"ricardo.tecnology@gmail.com\"\n},",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
