import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";
import CardActivity from "../../components/CardActivity/CardActivity";

export default function Detail() {
  const [state, setState] = useState({
    detail: {},
  });

  // const activities = useSelector((state) => state.allActivities)
  // console.log(activities);
  const [activity, setActivity] = useState({
    activities: {}
  })
  const { actId } = useParams();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/countries/${id}`).then((res) => {
      const { data } = res;
      data.population = data.population.toLocaleString();
      setState({ detail: data });
    });
  }, [id]);

  const { name, image, continent, capital, subregion, area, population } =
    state.detail;
  
  useEffect(() => {
    axios.get("http://localhost:3001/activities").then((res) => {
      const { data } = res;
      setActivity({ activities: data})
    })
  },[actId])

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
            <CardActivity activities={activity}/>
          </div>
        </div>
      </div>
    </div>
  );
}
