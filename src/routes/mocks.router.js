import { Router } from "express";
import { generarAnimales, generarUsuarios } from "../controller/mocking.controller.js";
import User from "../models/user.model.js";
import Pet from "../models/pet.model.js";

const router = Router();

// generar animales
router.post('/mockingpets', async (req, res) => {
    const cantidad = parseInt(req.query.cantidad, 10);
    if (isNaN(cantidad) || cantidad <= 0) {
        return res.status(400).json({ message: "La cantidad debe ser un número positivo" });
    }
    const pets = [];

    for (let i = 0; i < cantidad; i++) {
        await pets.push(generarAnimales());
    }
    res.json(pets);
});

// generar usuarios
router.get('/mockingusers', async (req, res) => {
    const count = parseInt(req.query.count, 10);
    if (!count || isNaN(count)) {
        return res.status(404).send({ message: "Error al recibir el parámetro de usuarios por query" });
    }

    try {
        const users = await generarUsuarios(count);
        res.send({
            message: "Hecho",
            users
        });
    } catch (error) {
        res.status(500).send({ message: "Error generando usuarios", error });
    }
});

// generate data
router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body;

    if (!users || !pets || isNaN(users) || isNaN(pets)) {
        return res.status(400).send({ message: "Los parámetros 'users' y 'pets' deben ser números válidos" });
    }

    try {
        // parte usuarios
        const generatedUsers = await generarUsuarios(users);
        await User.insertMany(generatedUsers);

        // parte mascotas
        const generatedPets = [];
        for (let i = 0; i < pets; i++) {
            generatedPets.push(generarAnimales());
        }
        await Pet.insertMany(generatedPets);

        res.send({
            message: "Datos generados e insertados correctamente",
            generatedUsers,
            generatedPets
        });
    } catch (error) {
        res.status(500).send({ message: "Error generando datos", error });
        console.log(error);
    }
});

// consultar usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send({ message: "Error obteniendo usuarios", error });
    }
});


// consultar mascotas

router.get('/pets', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).send({ message: "Error obteniendo mascotas", error });
    }
});




export default router;
