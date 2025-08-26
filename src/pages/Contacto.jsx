import React, { Fragment } from 'react'
import Contactanos from '../components/Contactanos'
import { Banner } from '../components/Banner'

export const Contacto = () => {
    return (
        <Fragment>
            <Banner
                titulo="Contáctanos"
                mensaje="Usa nuestro formulario para enviarnos tus consultas o pedidos. Además, descubre nuestra ubicación y visítanos para conocer todos nuestros detalles únicos."
            />
            <Contactanos />
        </Fragment>
    )
}
