import React, { Fragment } from 'react';
import { Card } from '../components/Card';
import { Cart } from '../components/Cart';
import { Banner } from '../components/Banner';

export const Productos = () => {

  return (
    <Fragment>
      <Banner
        titulo="Productos Únicos"
        mensaje="Descubre nuestra variedad de arreglos personalizados y encuentra productos únicos hechos especialmente para ti."
      />
      <Cart />
      <Card />
    </Fragment>
  );
};
