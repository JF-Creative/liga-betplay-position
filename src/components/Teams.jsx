import "./teams.css";
import data from "../resultados.json";
import { useState, useEffect } from "react";

export default function Teams() {
  const [tabla, setTabla] = useState([]);
  const [indexShow, setNewIndex] = useState(0);

  useEffect(() => {
    const newOrder = orderPosition(data);
    setTabla(showResult(newOrder, indexShow));

    const interval = setInterval(() => {
      setNewIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? 1 : 0;
        setTabla(showResult(newOrder, newIndex));
        return newIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [indexShow]);

  return (
    <div className="containerTable">
      {tabla.map((obj, index) => (
        <div className="team" key={index}>
          <div className="posLogo">
            <p>{obj.tablePosition}</p>
            <img src={obj.shield} alt={obj.name} />
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
              <b>PUNTOS: </b>
              {obj.PUNTOS}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function orderPosition(equipos) {
  const sortedEquipos =  equipos.sort((a, b) => {
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
  }
);
return sortedEquipos.map((equipo, index) => ({
    ...equipo, 
    tablePosition: index + 1, 
  }));
}

function showResult(listEquipos, indexShow = 0) {
  let newResults = listEquipos.slice(0, 10);
  let newResults2 = listEquipos.slice(10);

  if (indexShow === 0) {
    return newResults;
  } else if (indexShow === 1) {
    return newResults2;
  }
}
