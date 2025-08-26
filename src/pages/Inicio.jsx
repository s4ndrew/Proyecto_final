import React, { Fragment } from "react";
import imgNosotros from "../assets/images/Nosotros.jpg";
import galeria1 from "../assets/galeria/galeria1.jpg";
import galeria2 from "../assets/galeria/galeria2.jpg";
import galeria3 from "../assets/galeria/galeria3.jpg";
import galeria4 from "../assets/galeria/galeria4.jpg";
import galeria5 from "../assets/galeria/galeria5.jpg";
import galeria6 from "../assets/galeria/galeria6.jpg";
import galeria7 from "../assets/galeria/galeria7.jpg";
import galeria8 from "../assets/galeria/galeria8.jpg";
import galeria9 from "../assets/galeria/galeria9.jpg";
import galeria10 from "../assets/galeria/galeria10.jpg";
import galeria11 from "../assets/galeria/galeria11.jpg";
import galeria12 from "../assets/galeria/galeria12.jpg";

import { useState, useEffect } from "react";
import { Banner } from "../components/Banner";

export const Inicio = () => {
  const fotos = [
    { img: galeria1 },
    { img: galeria2 },
    { img: galeria3 },
    { img: galeria4 },
    { img: galeria5 },
    { img: galeria6 },
    { img: galeria7 },
    { img: galeria8 },
    { img: galeria9 },
    { img: galeria10 },
    { img: galeria11 },
    { img: galeria12 },
  ];

  return (
    <Fragment>
      <Banner
        titulo="Bienvenidos a Detalles Unicos"
        mensaje="Crea decoraciones y arreglos personalizados, llenos de estilo y detalles únicos."
      />
      <section className="Nosotros" id="nosotros">
        <div className="contenedor">
          <article className="articulo">
            <h2>
              Nosotros Somos{" "}
              <span className="personalizado">Detalles Unicos</span>
            </h2>
            <p className="descripcion">
              El proyecto web “Detalles Únicos” es un sitio web que muestra los
              diferentes opciones de regalos cada uno con un detalle diferentes,
              únicos es decir personalizado. A través de este proyecto, las
              personas podrán escoger, personalizar y crear un detalle para las
              personas o persona a quien se la quieran dirigir y asi expresar su
              cariño, amor, admiración.
            </p>
          </article>
          <div className="imagen-Nosotros">
            <img src={imgNosotros} alt="nosotros" />
          </div>
        </div>
      </section>

      <section className="galeria">
        <h2>
          Nuestra <span className="personalizado">Galeria</span>
        </h2>
        <div className="contenedor-galeria">
          {fotos.map((item1, index) => (
            <img src={item1.img} key={index} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};
