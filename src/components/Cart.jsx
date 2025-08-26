import React, { Fragment } from 'react'
import imgCart from '../assets/images/carrito.jpg'

export const Cart = ({cartCount}) => {
    return (
        <Fragment>
            <button className="cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <img src={imgCart} alt="imgCarrito" />
                <p className="counter">{cartCount}</p>
            </button>
        </Fragment>
    );
};
