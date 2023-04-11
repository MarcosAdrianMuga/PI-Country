import { useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Países</h1>
      <CardsContainer countries={countries} className={styles.cardsContainer}/>
    </div>
  );
}
