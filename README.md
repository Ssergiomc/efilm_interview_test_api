<h1>Despliegue Version Español, PARTE API/ BACK</h1>

<h2>Nombre Proyecto</h2>

<h3>TASK APP</h3>


<h2>Características Back</h2>

<h3>Aplicación de tareas.</h3>

<h4> 🔹 Cifrado de contraseñas.</h4> 
<h4> 🔹 Rutas por componentes a través de router.</h4>   
<h4> 🔹 CRUD de tareas: GET / POST / PUT / DELETE.</h4>  
<h4> 🔹 Metodos CRUD con Form e Input y a traves de evento con botón.</h4>  
<h4> 🔹 Relación métodos CRUD con acción en bbdd.</h4> 
<h4> 🔹 Modelado de bbdd.</h4> 
<h4> 🔹 Conexión bbdd online MongoDB Atlas Database - The Cloud-Native Database.</h4>
<h4> 🔹 Protección ruta conexión (usuario y contraseña) bbdd online, MongoDB Atlas Database.</h4>


<h2>Tecnologías</h2>

![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white&labelColor=101010)
![Node.js](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&labelColor=101010)
![Mongo DB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=101010)
![Bcrypt](https://img.shields.io/badge/Bcrypt-CB3837?style=for-the-badge&logo=npm&logoColor=white&labelColor=101010)
![Dotenv](https://img.shields.io/badge/Dotenv-CB3837?style=for-the-badge&logo=npm&logoColor=white&labelColor=101010)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white&labelColor=101010)


<h2>Despliegue en Local</h2>

<h3>🟦 1.- Clonado repositorio</h3>
<h3>🟦 2.- Tras despliegue en Plataforma "Heroku". Se hace necesaria la creación de archivo ".env" con las variables de entorno para ejecutar la aplicación en local.</h3>
<h4>◻ 2.1.- Dentro de carpeta "efilm_interview_test_api" crear archivo ".env"</h3>
<h4>◻ 2.2.- Contenido archivo ".env" con la definición de las variables a emplear en local.</h3>
<ul>
   <li>PORT=9000</li>
   <li>MONGODB_URI= conexion a la bbdd remota en Mongo Atlas si estas interesado en ella deberas contactarme :)</li>
   <li>#MONGODB_URI= si tuviera coleccion en mongo local</li>
   <li>MONGODB_LOCATION=Conectado a BBDD remota Mongo Atlas</li>
   <li>CLIENT_PROTOCOL=http</li>
   <li>CLIENT_URL=localhost</li>
   <li>CLIENT_PORT=3000</li>
   
</ul>
<h3>🟦 3.- Editor Codigo (IDE) Terminal, acceder a la carpeta, con la ruta .../efilm_interview_test_api</h3>
<h3>🟦 4.- Ejecutar comando "npm i" ( o "npm install") para descargar las dependencias necesarias y la carpeta node modules.</h3>
<h3>🟦 5.- Arrancar la aplicación, parte api, con comando "npm start"</h3>
<h3>🟦 6.- Se recomienda arrancar en primer lugar, esta parte, back/ api, y posteriormente la parte del cliente (<a href="https://github.com/Ssergiomc/efilm_interview_test_client">Cliente</a>).</h3>
