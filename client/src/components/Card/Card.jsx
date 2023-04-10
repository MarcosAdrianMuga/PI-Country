import { Link } from "react-router-dom"
import style from "./Card.module.css"
import React from "react"

const Card = (props) => {
    const { name, image, continent } = props.country
    return( 
    <Link to={`/country/${props.detailID}`}>
        <div className={style.card}>
           
            <img src={image} alt="bandera"></img>
            <p>{name}</p>
            <p>{continent}</p>
         
        </div>
        </Link>
    )
}

export default Card