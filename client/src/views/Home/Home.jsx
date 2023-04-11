import { useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { getAllActivities } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Home() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities())
  },[dispatch])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Países</h1>
      <CardsContainer countries={countries} className={styles.cardsContainer}/>
    </div>
  );
}
