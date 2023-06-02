import styles from './CardActivity.module.css';

export default function CardActivity(props) {
  return (
    <div className={styles.card}>
      <h1>Activities</h1>
      {props.result.map((a)=>{
        return(
          <div key={a.id}>
            <p>Name: {a.name}</p>
            <p>Difficulty level (1 to 5): {a.difficulty}</p>
            <p>Duration: {a.duration} hs</p>
            <p>Season: {a.season}</p> 
            <hr/>
          </div>   
        )
      })}
    </div>
  )
}
