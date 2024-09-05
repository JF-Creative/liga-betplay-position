import "./teams.css";
import data from "../resultados.json";
import { useState, useEffect } from "react";

export default function Teams() {
  const [tabla, setTabla] = useState([]);

  useEffect(() => {
    const newOrder = orderPosition(data);
    setTabla(newOrder);
  }, []);

  return (
    <div className="containerTable">
      {tabla.map((obj, index) => (
        <div className="team" key={index}> 
          <div className="posLogo">
            <p>{index + 1}</p>
            <img src={obj.shield} alt={obj.name}/>
          </div>
          <h5>{obj.name}</h5>
          <div className="info">
            <span>PJ: {obj.PJ}</span>
            <span>PG: {obj.PG}</span>
            <span>PE: {obj.PE}</span>
            <span>PP: {obj.PP}</span>
            <span>GF: {obj.GF}</span>
            <span>GC: {obj.GC}</span>
            <span>GD: {obj.GD}</span>
          </div>
          <div className="puntos">
            <span>
              <b>PUNTOS: </b>{obj.PUNTOS}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function orderPosition(equipos) {
  return equipos.sort((a, b) => {
    if (b.PUNTOS !== a.PUNTOS) {
      return b.PUNTOS - a.PUNTOS; // Ordenar por puntos
    } else if (b.GD !== a.GD) {
      return b.GD - a.GD; // Desempatar por diferencia de goles
    } else if (b.GF !== a.GF) {
      return b.GF - a.GF; // Desempatar por goles a favor
    } else if (a.enfrentamientoDirecto && b.enfrentamientoDirecto) {
      return b.enfrentamientoDirecto - a.enfrentamientoDirecto; // Desempatar por enfrentamientos directos
    } else {
      return 0; // Si todos los criterios son iguales
    }
  });
}
