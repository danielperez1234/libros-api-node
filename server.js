var  Db = require('./dboperations');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});

router.route('/libros').get((request, response) => {
  Db.getLibros().then((data) => {
    response.json(data[0]);
  })
})
router.route('/autores').get((request, response) => {
  Db.getAutores().then((data) => {
    response.json(data[0]);
  })
})
router.route('/generos').get((request, response) => {
  Db.getGeneros().then((data) => {
    response.json(data[0]);
  })
})
router.route('/series').get((request, response) => {
  Db.getSeries().then((data) => {
    response.json(data[0]);
  })
})
router.route('/libros/:id').get((request, response) => {
  
  Db.getLibro(request.params.id).then((data) => {
    response.json(data[0]);
  })
})
router.route('/libros').post((request, response) => {
  let   order = { 
    
    autor: request.body.id_autor,
    Title: request.body.titulo,
    serie: request.body.id_serie,
    genero: request.body.id_genero,
    anio: request.body.anio,
    imagen: request.body.imagen//"https://m.media-amazon.com/images/I/517CC2BqPgL.jpg"

 }
  Db.addLibro(order).then(data  => {
    response.status(201).json(request.body);
  })
})

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);