import { useState, useEffect } from "react";
export const CrearPeleadores = () => {
  const [peleador, setPeleador] = useState("");
  const [loading, setLoading] = useState(false);
  const enviarDatos = async () => {
    e.preventDefault();
    setLoading(true);
    const peleador = {
      nombre: nombre,
      estilo: "Boxeo",
      pais: "",
      victorias: 0,
      derrotas: 0,
    };

    try {
      const res = await fetch("http://localhost:3000/api/peleadores/crear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(peleador),
      });
      if(res.ok){
        const resultado = await res.json()
        console.log("Peleador Guardado",resultado)
        alert("Peleador añadido al ring")
        setPeleador('')
      } else{
        console.error("Error en el servidor ", res.statusText)
      }
    } catch (error) {
        console.log(error)
    } finally{
        setLoading(false)
    }
  };
  return (
    <form onSubmit={enviarDatos}>
      <input 
        type="text" 
        placeholder="Nombre del Peleador" 
        value={nombre}
        onChange={(e) => setPeleador(e.target.value)}
        required 
      />
      
      <button type="submit" disabled={cargando}>
        {cargando ? 'Enviando...' : 'Crear Peleador'}
      </button>
    </form>
  );
};

