import React from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';

export default function CardsContainer(props) {
  const { countries } = props;
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Countries</h2>
      </div>
      <div className={style.cards} path="/detail">
        {countries.map((c, index) => {
          return <Card key={index} country={c} detailID={c.id}/>;
        })}
      </div>
    </div>
  );
}
