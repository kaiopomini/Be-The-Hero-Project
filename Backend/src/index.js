const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //converte os json em um objeto - colocar antes das requests
app.use(routes);

/**
 *  Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros enviados na rota (nomeados) apos o simbolo "?" - (filtros, paginação)
 * Rouse Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * DB
  * SQL: MySQL, => SQLite, PostgreeSQL, Oracle, Microssoft SQL Server
  * NoSQL: MongDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   * using here - knex
   */
  


app.listen(3333);
