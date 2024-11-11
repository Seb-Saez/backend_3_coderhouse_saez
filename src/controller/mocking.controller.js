import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

// funcion con faker para generar usuarios
export const generarUsuarios = async (count) => {
    const cantidad = Number(count);
    const users = [];
    const hashedPassword = await bcrypt.hash('coder123', 10); // coder123 hasheado

    for (let i = 0; i < cantidad; i++) {
        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            rol: i % 3 === 0 ? 'admin' : 'user',
            password: hashedPassword, 
            pets: [] 
        };
        users.push(user);
    }
    return users;
};

// Función con Faker para crear animales
export const generarAnimales = () => {
    return {
        name: faker.animal.petName(),
        type: faker.animal.type(),
        owner: null, // Seteado a null para evitar errores de ObjectId vacío
        adopted: false
    };
};
