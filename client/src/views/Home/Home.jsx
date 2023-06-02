import { useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { getAllActivities } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  
  const paginas = []
  var contador = 0;
  var pagina = []
  for(let i = 0; i < countries.length; i++) {
    pagina.push(countries[i])
    if(contador > 8) {
      paginas.push(pagina)
      contador = 0;
      pagina = []
    }else if(i + 1 === countries.length) {
      paginas.push(pagina)
    } else {
      contador++
    }
  }

  useEffect(() => {
    dispatch(getAllActivities())
  },[dispatch])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Countries</h1>
      <CardsContainer countries={paginas} className={styles.cardsContainer}/>
      <Pagination paginas={paginas.length -1}/>
    </div>
  );
}
