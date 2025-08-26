import React, { Fragment } from 'react'

export const Banner = ({ titulo, mensaje }) => {
    return (
        <Fragment>
            <div className="banner-container">
            <section className="hero">
                <h1>{titulo}</h1>
                <p>{mensaje}</p>
            </section>
            </div>
        </Fragment>
    );
}
