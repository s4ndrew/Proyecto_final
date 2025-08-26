import React, { useState } from 'react';

export const CardItem = ({ img, nombre, precio, agregarAlCarrito }) => {
    //controlador de botones
    const [contador, setContador] = useState(1);

    //botones de sumar y restar
    const sumar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        if (contador > 1) {
        setContador(contador - 1);
        }
    };

    //agregar al carrito final 
    const finalAgregar = () => {
        agregarAlCarrito(contador); 
    };

    return (
        <section className="card">
        <article className="img-card">
            <img src={img} alt={nombre} />
        </article>
        <article className="info-card">
            <h3 className="producto">{nombre}</h3>
            <p className="precio">{precio}</p>
            <div className="adicionar">
            <button className="btn-card" onClick={restar}>
                -
            </button>
            <p className="cantidad">{contador}</p>
            <button className="btn-card" onClick={sumar}>
                +
            </button>
            </div>
            <button className="btn-agregar" onClick={finalAgregar}>
            Agregar al Carrito
            </button>
        </article>
        </section>
    );
};
