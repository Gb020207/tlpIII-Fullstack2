import { where } from "sequelize";
import { Peleadores } from "../models/crear.peleador.js";

export const crearPeleador = async (req, res) => {
  try {
    const { nombre, estilo, pais, victorias, derrotas } = req.body;
    if (nombre === "" || nombre === undefined) {
      return res.status(400).json({ msg: "El nombre no puede ser null" });
    }
    if (estilo === "" || estilo === undefined) {
      return res.status(400).json({ msg: "El nombre no puede ser null" });
    }
    if (pais === "" || pais === undefined) {
      return res.status(400).json({ msg: "El nombre no puede ser null" });
    }
    const peleador = await Peleadores.create({
      nombre,
      estilo,
      pais,
      victorias,
      derrotas,
    });
    return res.status(200).json({
      msg: "Peleador creado",
      data: peleador,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error del backend",
    });
  }
};
export const encontrarPeleador = async (req, res) => {
  try {
    const peleadores = await Peleadores.findAll();

    return res.json({
      count: peleadores.length,
      data: peleadores,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error del backend",
    });
  }
};
export const encontrarPeleadorporid = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id) || Number(id) <= 0) {
    return res.status(400).json({ msg: "El id debe ser un número positivo" });
  }
  try {
    const peleadores = await Peleadores.findByPk(id);

    if (!peleadores) {
      return res.status(404).json({ msg: "Peleador no encontrado" });
    }

    return res.status(200).json(peleadores);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error del backend",
    });
  }
};

export const actualizarPeleador = async (req, res) => {
  const { id } = req.params;
  const { nombre, victorias, derrotas } = req.body;
  if (isNaN(id) || Number(id) <= 0) {
    return res.status(400).json({ msg: "El id debe ser un número positivo" });
  }
  try {
    const peleador = await Peleadores.findByPk(id);
    if(nombre === "" || nombre === undefined){
        return res.status(400).json({
        msg:"El nombre del peleador no puede ser nulo"
        })
    }
    await Peleadores.update({nombre, victorias, derrotas},{where:{id}})
    return res.status(200).json({
        msg:"Peleador actualizado"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error del backend",
    });
  }
};
export const borrarPeleador = async (req, res) => {
    const {id} = req.params
  try {
    const peleador = await Peleadores.findByPk(id)
    if(!peleador){
        return res.status(404).json({
            msg:"El peleador no existe"
        })
    }
    await Peleadores.destroy({where:{id}})
    return res.status(200).json({
            msg:"Peleador eliminado correctamente"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error del backend",
    });
  }
};
