import { Peleadores } from "../models/crear.peleador.js";

export const crearPeleador = async (req,res) => {
    try {
        const {nombre,estilo,pais,victorias,derrotas} = req.body;
        if (nombre === "" || nombre === undefined){
            return res.status(400).json({msg:"El nombre no puede ser null"})
        }
          if (estilo === "" || estilo === undefined){
              return res.status(400).json({msg:"El nombre no puede ser null"})
        }
            if (pais === "" || pais === undefined){
              return res.status(400).json({msg:"El nombre no puede ser null"})
        }
        const peleador = await Peleadores.create({nombre,estilo,pais,victorias,derrotas})
        return res.status(200).json({
            msg: "Peleador creado",
            data:peleador,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Error del backend"
        })
    }
    
}
export const encontrarPeleador = async (req,res) => {
    try {
         const peleadores = await Peleadores.findAll();
    
        return res.json({
          count: peleadores.length,
          data: peleadores
        });
    } catch (error) {
          console.log(error)
        return res.status(500).json({
            msg:"Error del backend"
        })
    }
   
} 
export const encontrarPeleadorporid = async (req,res) => {
        const {id} = req.params
    try {
           const peleadores = await Peleadores.findByPk(id);
    
        return res.json({
          count: peleadores.length,
          data: peleadores
        });
    } catch (error) {
          console.log(error)
        return res.status(500).json({
            msg:"Error del backend"
        })
    }
}

export const actualizarPeleador = async (req,res) => {
    try {
        
    } catch (error) {
          console.log(error)
        return res.status(500).json({
            msg:"Error del backend"
        })
    }
}
export const borrarPeleador = async (req,res) => {
    try {
        
    } catch (error) {
          console.log(error)
        return res.status(500).json({
            msg:"Error del backend"
        })
    }
} 

