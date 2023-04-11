import styles from './CardActivity.module.css';

export default function CardActivity(props) {
  return (
    <div className={styles.card}>
      <h1>Actividades</h1>
      {props.result.map((a)=>{
        return(
          <div key={a.id}>
            <p>Nombre: {a.name}</p>
            <p>Nivel de dificultad (del 1 al 5): {a.difficulty}</p>
            <p>Duracion: {a.duration} hs</p>
            <p>Temporada: {a.season}</p> 
            <hr/>
          </div>   
        )
      })}
    </div>
  )
}
