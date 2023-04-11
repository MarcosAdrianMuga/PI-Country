import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.fondo}>
    <div className={styles.container}>
      <h1>Bienvenido a mi página de países</h1>
      <p>Aquí podrás ver todas las características y actividades de los distintos países del mundo.</p>
      <Link to="/home">
        <button className={styles.button}>Comenzar</button>
      </Link>
    </div>
    </div>
  );
}
