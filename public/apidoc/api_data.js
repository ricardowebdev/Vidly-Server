define({ "api": [
  {
    "type": "delete",
    "url": "/api/client/:id",
    "title": "Remove um cliente",
    "name": "DeleteClient",
    "group": "Client",
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
    "groupTitle": "Client"
  },
  {
    "type": "put",
    "url": "/api/client/:id",
    "title": "Edita um cliente",
    "name": "EditClient",
    "group": "Client",
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
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/api/client/:id",
    "title": "Solicita um cliente pelo id",
    "name": "GetClient",
    "group": "Client",
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
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/api/client/",
    "title": "Solicita lista de clientes",
    "name": "GetClients",
    "group": "Client",
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
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/api/client",
    "title": "Insere um novo cliente",
    "name": "PostClient",
    "group": "Client",
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
    "groupTitle": "Client"
  },
  {
    "type": "delete",
    "url": "/api/genre/:id",
    "title": "Remove um gênero",
    "name": "DeleteGenre",
    "group": "Genre",
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
    "groupTitle": "Genre"
  },
  {
    "type": "put",
    "url": "/api/genre/:id",
    "title": "Edita um gênero",
    "name": "EditGenre",
    "group": "Genre",
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
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/api/genre/:id",
    "title": "Solicita um gênero pelo id",
    "name": "GetGenre",
    "group": "Genre",
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
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/api/gernres/",
    "title": "Solicita lista de generos",
    "name": "GetGenres",
    "group": "Genre",
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
    "groupTitle": "Genre"
  },
  {
    "type": "post",
    "url": "/api/genre",
    "title": "Insere um novo gênero",
    "name": "PostGenre",
    "group": "Genre",
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
    "groupTitle": "Genre"
  },
  {
    "type": "delete",
    "url": "/api/movie/:id",
    "title": "Remove um filme",
    "name": "DeleteMovie",
    "group": "Movie",
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
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/api/movies/:id",
    "title": "Solicita um filme pelo ID",
    "name": "GetMovie",
    "group": "Movie",
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
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/api/movies/",
    "title": "Solicita lista de filmes",
    "name": "GetMovies",
    "group": "Movie",
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
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "/api/client",
    "title": "Insere um novo filme",
    "name": "PostClient",
    "group": "Movie",
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
    "groupTitle": "Movie"
  },
  {
    "type": "put",
    "url": "/api/client/:id",
    "title": "Altera um cliente pelo id",
    "name": "PutClient",
    "group": "Movie",
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
    "groupTitle": "Movie"
  }
] });
