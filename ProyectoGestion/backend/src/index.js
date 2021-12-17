// se requieren las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

// configuracion del cuerpo del srevidor

app.set('Port',process.env.PORT || 4000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))


app.use('/roles',require('./routes/Roles.route'))
app.use('/usuarios',require('./routes/Usuarios.route'))
app.use('/registrocultivo',require('./routes/registrocultivo.route'))
app.use('/gestioncultivo',require('./routes/GestionCultivo.route'))
app.use('/gestionpredios',require('./routes/GestionPredios.routes'))
app.use('/parametroscultivo',require('./routes/ParametrosCultivos.route'))
app.use('/tipocultivo',require('./routes/TipoCultivo.route'))






app.listen(app.get('Port'),()=>{
    console.log('Servidor esta escuchando por el puerto',app.get('Port'))
})