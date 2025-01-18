# Ler-Prevencion
Este repositorio contiene la solución a la prueba técnica proporcionada por Ler Prevencion.


Instrucciones para Correr el Proyecto
# 1. Requisitos Previos:
Asegúrate de tener instalados los siguientes programas:

Node.js: Necesario para ejecutar el backend y frontend.
PostgreSQL (v12 o superior): Base de datos utilizada por el proyecto.
Angular CLI: Herramienta de línea de comandos para trabajar con Angular.

# 2. Repositorio:
Puedes descargar tanto el frontend como el backend desde el repositorio https://github.com/gordosaurio/Ler-Prevencion

# 3. Backend
Crear Base de Datos: Si no tienes una base de datos creada para la prueba, sigue los siguientes pasos para crearla:

Accede a la terminal y ejecuta el siguiente comando para conectarte a PostgreSQL: psql -U postgres

Luego, crea la base de datos ejecutando el siguiente comando: CREATE DATABASE prueba_tecnica;

Insertar Datos en la Base de Datos: Inserta algunos datos de prueba en la tabla usuarios para que el sistema pueda extraerlos: INSERT INTO usuarios (nombre, correo, edad) VALUES ('Andrés Mendoza', 'andres@example.com', 23), ('María Pérez', 'maria@example.com', 30), ('Juan López', 'juan@example.com', 28);

Abre la carpeta microservicio-backend del repositorio en tu IDE (por ejemplo, Visual Studio Code).

En la terminal del IDE, ejecuta el siguiente comando para instalar las dependencias: npm install

Luego, configura el archivo .env con los datos de la base de datos que desees usar. Aunque es una mala práctica incluir el .env en el repositorio, en este caso se hace por conveniencia.

Inicia el servidor con el siguiente comando: npm start

# 4. Fronted 


