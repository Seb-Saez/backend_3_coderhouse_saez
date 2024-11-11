█ Instrucciones para utilizar la API

►  Generar usuarios:

Realizar una request GET a:  http://localhost:8080/api/mocks/mockingusers?count=3    (valor numerico a eleccion)



► Generar animales:

Realizar una reques POST a:  http://localhost:8080/api/mocks/mockingpets?cantidad=3    (valor numerico a eleccion)


► Agregar usuarios y mascotas a la base de datos:


Realizar una request POST a:  http://localhost:8080/api/mocks/generatedata

y por body enviar en tipo json:

{
  "users": 10,  (cantidad de usuarios)
  "pets": 5    (cantidad de mascotas)
}



► Consultar usuarios:

Realizar una request GET a:   http://localhost:8080/api/mocks/users



► Consultar mascotas:

Realizar una request GET a:   http://localhost:8080/api/mocks/pets

