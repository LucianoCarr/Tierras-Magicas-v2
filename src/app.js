require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const createError = require('http-errors')
const methodOverride = require('method-override')

const indexRouter = require('./routers/index.Routes')
const characterRouter = require('./routers/character.Routes')

const app = express()
const port = 5000

//configuracion de vistas
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use(cookieParser())

//Middleware para archivos estáticos
app.use(express.static(path.join(__dirname + '/../public')))

//Rutas
app.use('/', indexRouter)
app.use('/character', characterRouter)


//errores
app.use(function(req, res, next) {
    next(createError(404));
  });

  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(port, () => {
    console.log(`Servidor: Tierras Magicas ==> http://localhost:${port}`);
})