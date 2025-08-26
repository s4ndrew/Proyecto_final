import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
//Fecha y hora
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
    useEffect(() => {
      setInterval(() => {
        const fecha = new Date();
        setFecha(fecha.toLocaleDateString());
        setHora(fecha.toLocaleTimeString());
      }, 1000);
    });
  return (
    <Fragment>
      <header className="Encabezado">
        <div className="contenedor_encabezado">
          <div className="contenedor-titulo">
            <h2 className="titulo-personalizado">
              Detalles <span>Unicos</span>
            </h2>
          </div>
          <div className="fecha_hora">
            <p className="">{fecha}</p>
            <p className="">{hora}</p>
          </div>
          <nav className="navegacion">
            <Link to="/">Inicio</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/servicios">Servicios</Link>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};
