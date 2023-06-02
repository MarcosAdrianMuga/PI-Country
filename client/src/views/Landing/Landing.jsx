import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.fondo}>
    <div className={styles.container}>
      <h1>Welcome to my countries page</h1>
      <p>Here you can explore all the features and activities of different countries around the world.</p>
      <Link to="/home">
        <button className={styles.button}>Start</button>
      </Link>
    </div>
    </div>
  );
}
