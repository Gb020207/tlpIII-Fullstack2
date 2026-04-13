import { useState,useEffect } from "react";

export function App(){
    const [fetch,setFetch] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:3000/api/peleadores`)
        .then(response => response.json())
        .then(data => setFetch(fetch))
        .catch(error => console.error("Error:", error))
    },[])
    return(
        <div>
            {fetch.map(peleador => <p key={peleador.id}>{peleador.nombre},{peleador.pais},{peleador.estilo},{peleador.victorias},{peleador.derrotas}</p>)}
        </div>
    )
}