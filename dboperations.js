var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getLibros() {
  try {
    let  pool = await  sql.connect(config);
    let  libros = await  pool.request().query("SELECT * from libro");
    return  libros.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
async  function  getLibro(libroId) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, libroId)
    .query("SELECT l.id_libro as id_libro, l.titulo as titulo,l.anio as anio, l.imagen as imagen,  a.nombre AS autor, s.nombre AS serie, g.nombre AS genero "+
    "FROM libro l "+
    "INNER JOIN autor a ON l.id_autor = a.id_autor "+
    "INNER JOIN serie s ON l.id_serie = s.id_serie "+
    "INNER JOIN genero g ON l.id_genero = g.id_genero "+
    "WHERE l.id_libro = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
async  function  addLibro(libro) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('titulo', sql.NVarChar, libro.Title)
    .input('autor', sql.Int, libro.autor)
    .input('anio', sql.NVarChar, libro.anio)
    .input('serie',sql.Int,libro.serie)
    .input('genero', sql.Int, libro.genero)
    .input('imagen', sql.NVarChar, "https://m.media-amazon.com/images/I/517CC2BqPgL.jpg")
    .query('Insert Into libro (id_autor,titulo,id_serie,id_genero,anio,imagen) values (@autor,@titulo,@serie,@genero,@anio,@imagen)');
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}
async  function  getSeries() {
  try {
    let  pool = await  sql.connect(config);
    let  serie = await  pool.request().query("SELECT * from serie");
    return  serie.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
async  function  getAutores() {
  try {
    let  pool = await  sql.connect(config);
    let  autor = await  pool.request().query("SELECT * from autor");
    return  autor.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
async  function  getGeneros() {
  try {
    let  pool = await  sql.connect(config);
    let  genero = await  pool.request().query("SELECT * from genero");
    return  genero.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = { getLibros, getLibro, addLibro ,getSeries, getGeneros, getAutores};