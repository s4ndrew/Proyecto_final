import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/servicios/decoracion_cumpleaños.jpg";
import img2 from "../assets/servicios/decoracion_añoNuevo.jpg";
import img3 from "../assets/servicios/arreglo_15.jpg";
import img4 from "../assets/servicios/babyShower.jpg";
import img5 from "../assets/servicios/bautizo.jpg";
import img6 from "../assets/servicios/matri.jpg";
import img7 from "../assets/servicios/bodas_oro.jpg";
import img8 from "../assets/servicios/bodas_plata.jpg";
import img9 from "../assets/servicios/bodas_bonce.jpeg";
const Decoraciones = () => {
  const decoraciones = [
    {
      imagen: img1,
      titulo: "Decoración cumpleaños",
      parrafo:
        "🎉 Creamos ambientes mágicos y personalizados para hacer de cada cumpleaños un momento inolvidable.",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img2,
      titulo: "Decoración para Año Nuevo",
      parrafo:
        "🎆 Recibe el nuevo año con estilo: decoraciones temáticas y festivas que marcarán el inicio perfecto.",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img3,
      titulo: "Arreglo de 15 años",
      parrafo:
        "👑 Diseñamos arreglos únicos y elegantes que combinan con el vestido y estilo de la quinceañera.",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img4,
      titulo: "Baby Shower",
      parrafo:
        "🍼 Celebra la llegada del nuevo bebé con un tierno arreglo. Detalles pensados para sorprender a tu pareja.",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img5,
      titulo: "Bautizo",
      parrafo:
        "✨ Decoración floral con dulces artesanales y chocolates Sublime, perfecta para un bautizo lleno de amor y significado.",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img6,
      titulo: "Matrimonios",
      parrafo:
        "💍 Arreglo de rosas con chocolate Vizzio y bolsa de regalo sorpresa",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img7,
      titulo: "Bodas de oro",
      parrafo:
        "Celebra 50 años de amor con una decoración dorada, globos vibrantes y estantes elegantes para tortas y dulces.",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img8,
      titulo: "Bodas de plata",
      parrafo:
        "Arreglos florales sofisticados acompañados de exquisitos chocolates, ideales para conmemorar 25 años de unión",
      textBoton: "ADQUIRIR AHORA!",
    },
    {
      imagen: img9,
      titulo: "Bodas de bronce",
      parrafo:
        "Un detalle especial con flores finas, una bolsa sorpresa y deliciosos chocolates para una celebración inolvidable.",
      textBoton: "ADQUIRIR AHORA!",
    },
  ];

  return (
    <Fragment>
      <section>
        <h6>DECORACIONES</h6>
        <section className="contenedor_carts">
          {decoraciones.map((item, index) => (
            <div className="cartas" key={index}>
              <div className="contenedor_imgCart">
                <img src={item.imagen} alt="" />
              </div>
              <h4>{item.titulo}</h4>
              <p>{item.parrafo}</p>
              <Link to="/contacto" className="btn-deco">{item.textBoton}</Link>
            </div>
          ))}
        </section>
      </section>
    </Fragment>
  );
};

export default Decoraciones;
