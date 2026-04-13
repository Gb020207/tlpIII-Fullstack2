import sequelize from "../config/servidor.js";
import { DataTypes } from "sequelize";

export const Peleadores = sequelize.define("Peleadores", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estilo: {
        
        type: DataTypes.ENUM(
            'MMA',
            'Boxeo',
            'Sambo',
            'Muay Thai',
            'Jiu-Jitsu',
            'Karate',
            'Kickboxing',
            'Lucha',
            'Jeet Kune Do',
            'Tang Soo Do',
            'Wushu',
            'Hapkido',
            'Wing Chun',
            'Taekwondo'
        ),
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true
    },
    victorias: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    derrotas: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: false,
    tableName: 'peleadores'
});