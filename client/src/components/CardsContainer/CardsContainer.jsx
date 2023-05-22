import React from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';

export default function CardsContainer(props) {
  const { countries } = props;
  const currentPage = useSelector((state) => state.currentPage)
  return (
    <div className={style.container}>
      <div className={style.title}></div>
      <div className={style.cards} path="/detail">
        {countries.length ? (
          countries[currentPage].map((c, index) => (
            <Card key={index} country={c} detailID={c.id} />
          ))
        ) : (
          <p>No hay países para mostrar</p>
        )}
      </div>
    </div>
  );
}







