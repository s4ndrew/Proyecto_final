import React, { Fragment } from "react";
import imgFb from "../assets/images/facebook.png";
import imgIg from "../assets/images/logotipo-de-instagram.png";
import imgWsp from "../assets/images/whatsapp.png";
import imgTw from "../assets/images/signo-de-twitter.png";

export const Footer = () => {
  const redes = [
    { img: imgFb, url: "https://facebook.com" },
    { img: imgIg, url: "https://instagram.com" },
    { img: imgWsp, url: "https://wa.me/tu-numero" },
    { img: imgTw, url: "https://twitter.com" },
  ];

  const secciones = [
    {
      titulo: "Inicio",
      items: ["Contacto", "Productos"],
    },
    {
      titulo: "Servicios",
      items: ["Términos y condiciones", "Reseñas"],
    },
    {
      titulo: "Política de Privacidad",
      items: ["Política de Reclamo", "Síguenos"],
    },
  ];

  return (
    <Fragment>
      <footer className="contenedor-footer">
        {secciones.map((sec, index) => (
          <div key={index} className="textos">
            <p className="negrita">{sec.titulo}</p>
            {sec.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}

            {sec.titulo === "Política de Privacidad" && (
              <div className="iconos">
                {redes.map((item2, index) => (
                  <img src={item2.img} key={index} alt="img2" />
                ))}
              </div>
            )}
          </div>
        ))}
      </footer>
    </Fragment>
  );
};
