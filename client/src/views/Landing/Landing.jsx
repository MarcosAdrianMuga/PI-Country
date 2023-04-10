import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';

export default function Landing() {
  return (
    <div className={style.container}>
      <h1>Bienvenido a mi pagina de paises</h1>
      <p>Aqui podras ver todas las caracteristicas y actividades de los distintos paises del mundo!</p>
      <Link to="/home">
        <button className={style.button}>Comenzar</button>
      </Link>
    </div>
  );
}
