import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";
import CardActivity from "../../components/CardActivity/CardActivity";

export default function Detail() {
  const [state, setState] = useState({
    detail: {},
    activities: []
  });
  const allAcitivities = useSelector((state) => state.allActivities)
 
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/countries/${id}`).then((res) => {
      const { data } = res;
      data.population = data.population.toLocaleString();
      setState({ detail: data, activities: filteredActivities });
    });
  }, [id]);

  const result = []
  const filteredActivities = allAcitivities.map((a) => a.countries.forEach(element => {
    if(element.id === id) {
      const { name, difficulty, duration, season, id } = a 
      result.push({
        name,
        difficulty,
        duration,
        season,
        id
      })
    }
  }))
  console.log(result);

  const { name, image, continent, capital, subregion, area, population } = state.detail;

  return (
    <div className={style.container}>
      <div className={style.flagContainer}>
        <img className={style.flag} src={image} alt="bandera" />
      </div>
      <div className={style.infoContainer}>
        <h1>{name}</h1>
        <h5>También puedes encontrarlo por su id "{id}"</h5>
        <div className={style.info}>
          <p>
            <b>Continente:</b> {continent}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
          <p>
            <b>Subregión:</b> {subregion}
          </p>
          <p>
            <b>Área:</b> {area}
          </p>
          <p>
            <b>Población:</b> {population}
          </p>
          <div>
            {result.length ?<CardActivity result={result}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
