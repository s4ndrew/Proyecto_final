import React, { Fragment } from 'react';
import Decoraciones from '../components/Decoraciones';
import { Banner } from '../components/Banner';

export const Servicios = () => {
  return (
    <div>
      <Fragment>
        <Banner
          titulo="Nuestros Servicios"
          mensaje="Ofrecemos servicios personalizados de decoración y arreglos únicos, adaptados a tu estilo y necesidades. ¡Haz que cada detalle cuente!"
        />
        <Decoraciones />
      </Fragment>
    </div>
  );
};
