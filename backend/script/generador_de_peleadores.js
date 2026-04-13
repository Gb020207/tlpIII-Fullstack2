import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    password: '', 
};

// Lista masiva de peleadores reales
const peleadoresReales = [
    // --- LEYENDAS UFC / MMA ---
    { nombre: "Conor McGregor", estilo: "MMA", pais: "Irlanda" },
    { nombre: "Jon Jones", estilo: "MMA", pais: "EE.UU." },
    { nombre: "Khabib Nurmagomedov", estilo: "Sambo", pais: "Rusia" },
    { nombre: "Anderson Silva", estilo: "Muay Thai", pais: "Brasil" },
    { nombre: "Georges St-Pierre", estilo: "Karate", pais: "Canadá" },
    { nombre: "Amanda Nunes", estilo: "Jiu-Jitsu", pais: "Brasil" },
    { nombre: "Israel Adesanya", estilo: "Kickboxing", pais: "Nigeria" },
    { nombre: "Francis Ngannou", estilo: "MMA", pais: "Camerún" },
    { nombre: "Charles Oliveira", estilo: "Jiu-Jitsu", pais: "Brasil" },
    { nombre: "Ilia Topuria", estilo: "MMA", pais: "España" },
    { nombre: "Alexander Volkanovski", estilo: "MMA", pais: "Australia" },
    { nombre: "Kamaru Usman", estilo: "Lucha", pais: "Nigeria" },
    { nombre: "Sean O'Malley", estilo: "MMA", pais: "EE.UU." },
    { nombre: "Valentina Shevchenko", estilo: "Muay Thai", pais: "Kirguistán" },
    { nombre: "Alex Pereira", estilo: "Kickboxing", pais: "Brasil" },

    // --- LEYENDAS DEL BOXEO ---
    { nombre: "Muhammad Ali", estilo: "Boxeo", pais: "EE.UU." },
    { nombre: "Mike Tyson", estilo: "Boxeo", pais: "EE.UU." },
    { nombre: "Canelo Álvarez", estilo: "Boxeo", pais: "México" },
    { nombre: "Floyd Mayweather", estilo: "Boxeo", pais: "EE.UU." },
    { nombre: "Manny Pacquiao", estilo: "Boxeo", pais: "Filipinas" },
    { nombre: "Tyson Fury", estilo: "Boxeo", pais: "Reino Unido" },
    { nombre: "Sugar Ray Robinson", estilo: "Boxeo", pais: "EE.UU." },
    { nombre: "Julio César Chávez", estilo: "Boxeo", pais: "México" },
    { nombre: "Roberto Durán", estilo: "Boxeo", pais: "Panamá" },
    { nombre: "Gennady Golovkin", estilo: "Boxeo", pais: "Kazajistán" },

    // --- ICONOS DE ARTES MARCIALES ---
    { nombre: "Bruce Lee", estilo: "Jeet Kune Do", pais: "Hong Kong" },
    { nombre: "Chuck Norris", estilo: "Tang Soo Do", pais: "EE.UU." },
    { nombre: "Jet Li", estilo: "Wushu", pais: "China" },
    { nombre: "Jackie Chan", estilo: "Hapkido", pais: "China" },
    { nombre: "Donnie Yen", estilo: "Wing Chun", pais: "China" },

    // --- NUEVA GENERACIÓN Y OTROS ---
    { nombre: "Islam Makhachev", estilo: "Sambo", pais: "Rusia" },
    { nombre: "Dustin Poirier", estilo: "MMA", pais: "EE.UU." },
    { nombre: "Justin Gaethje", estilo: "MMA", pais: "EE.UU." },
    { nombre: "Max Holloway", estilo: "MMA", pais: "EE.UU." },
    { nombre: "Zhang Weili", estilo: "MMA", pais: "China" },
    { nombre: "Brandon Moreno", estilo: "MMA", pais: "México" },
    { nombre: "Yair Rodríguez", estilo: "Taekwondo", pais: "México" },
    { nombre: "Chito Vera", estilo: "Muay Thai", pais: "Ecuador" },
    { nombre: "Santiago Ponzinibbio", estilo: "MMA", pais: "Argentina" },
    { nombre: "Emiliano Sordi", estilo: "MMA", pais: "Argentina" }
];

async function cargarBaseDeDatos() {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        console.log("🔗 Conectado a MySQL...");

        await connection.query(`CREATE DATABASE IF NOT EXISTS gran_torneo`);
        await connection.query(`USE gran_torneo`);
        
        // Tabla sin el campo de nivel de poder
        await connection.query(`
            CREATE TABLE IF NOT EXISTS peleadores (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(100),
                estilo VARCHAR(50),
                pais VARCHAR(50),
                victorias INT,
                derrotas INT
            )
        `);

        // Preparar los datos (sin nivel_poder)
        const valores = peleadoresReales.map(p => [
            p.nombre,
            p.estilo,
            p.pais,
            Math.floor(Math.random() * 41) + 10, // Victorias aleatorias entre 10 y 50
            Math.floor(Math.random() * 6)        // Derrotas aleatorias entre 0 y 5
        ]);

        // Limpiar la tabla antes de insertar para evitar duplicados
        await connection.query("DELETE FROM peleadores");

        const sql = "INSERT INTO peleadores (nombre, estilo, pais, victorias, derrotas) VALUES ?";
        await connection.query(sql, [valores]);

        console.log(`🥊 ¡Éxito! Se han insertado ${peleadoresReales.length} peleadores reales (sin nivel de poder).`);

    } catch (error) {
        console.error("❌ Error en el script:", error);
    } finally {
        if (connection) await connection.end();
        console.log("🔌 Conexión cerrada.");
    }
}

cargarBaseDeDatos();