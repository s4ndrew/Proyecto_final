import React, { Fragment, useState } from "react";
import card1 from '../assets/tarjetas/card1.jpg'
import card2 from "../assets/tarjetas/card2.jpg";
import card3 from "../assets/tarjetas/card3.jpg";
import card4 from "../assets/tarjetas/card4.jpg";
import card5 from "../assets/tarjetas/card5.jpg";
import card6 from "../assets/tarjetas/card6.jpg";
import card7 from "../assets/tarjetas/card7.jpg";
import card8 from "../assets/tarjetas/card8.jpg";
import card9 from "../assets/tarjetas/card9.jpg";
import { CardItem } from './CardItem';
import { Cart } from "./Cart";
import Swal from "sweetalert2";

export const Card = () => {

    const mostrarAlerta = (cantidad) => {
    let mensaje;

    if (cantidad === 1) {
        mensaje = `Se ha agregado ${cantidad} producto al carrito.`;
    } else {
        mensaje = `Se han agregado ${cantidad} productos al carrito.`;
    }

    Swal.fire({
        title: "¡Éxito!",
        text: mensaje,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#17a2b8",
    });
};

    const [cartCount, setCartCount] = useState(0);

    const agregarAlCarrito = (cantidad) => {
        if (cantidad > 0) {
            setCartCount(cartCount + cantidad);
            mostrarAlerta(cantidad); // ✅ aquí pasamos la cantidad
        }
    };

    const card = [
        {   img: card1, 
            nombre: "Ramo Primaveral Girasoles", 
            precio: "S/ 89.00"
        },
        {
            img: card2,
            nombre: "Ramo Sunshine Rosas Variadas",
            precio: "S/ 73.65",
        },
        {
            img: card3,
            nombre: "Florero Armonia 3 Tulipanes",
            precio: "S/ 112.40",
        },
        {
            img: card4,
            nombre: "Arreglo de Flores Corazon Arcoiris",
            precio: "S/ 145.00",
        },
        {
            img: card5, 
            nombre: "Árbol de la Vida Rosado", 
            precio: "S/ 169.00" 
        },
        {
            img: card6, 
            nombre: "Arreglo Amor Rosas Preservadas", 
            precio: "S/ 210.00" 
        },
        {
            img: card7, 
            nombre: "Coleccion Amor Romantico", 
            precio: "S/ 95.90" 
        },
        {
            img: card8, 
            nombre: "Arreglo con Tulipanes y Flores", 
            precio: "S/ 159.00" 
        },
        {
            img: card9, 
            nombre: "Arreglo con Girasoles y Rosas", 
            precio: "S/ 169.00" 
        }

    ];

    return (
        <Fragment>
            <div className="container-cart">
                <Cart cartCount={cartCount} /> 
            </div>
            <div className="card-container">
                <div className='container'>
                    {card.map((item, index) => (
                        <CardItem 
                            key={index} 
                            img={item.img} 
                            nombre={item.nombre} 
                            precio={item.precio} 
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

