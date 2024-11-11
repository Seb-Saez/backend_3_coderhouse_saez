import express from "express";
import dotenv from 'dotenv';
import { __dirname } from "./utils/utils.js";
import mongoose from "mongoose";
// import routes
import mocksRouter from './routes/mocks.router.js';




// config de las variables de entrono
dotenv.config();
const PORT = process.env.PORT || 3030;

// instanciamos server
const app = express()


// config para json

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes

app.use('/api/mocks', mocksRouter);

// conectamos BBDD

mongoose.connect(process.env.MONGO_STRING, { dbName: 'coderBackend_3'})
.then(() => console.log('BBDD conectada'))
.catch(()=>{
    console.log('Error al conectar a la BBDD')
})

// escuchar puerto
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});


