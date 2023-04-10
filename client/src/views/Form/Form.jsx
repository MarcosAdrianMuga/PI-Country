import { useState } from "react";
import styles from "./Form.module.css";
// import { createActivity } from "../../redux/actions";
import { useSelector } from "react-redux";
import validate from "./validate";
import axios from 'axios'

export default function Form() {
  const allCountries = useSelector((state) => state.allCountries);
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    durationHours: "",
    durationMinutes: "",
    season: "",
    countries: [],
  });

  const borrarHandler = (country) => {
    const newCountries = form.countries.filter((c) => c !== country);
    setForm({ ...form, countries: newCountries });
  };
  
  const submitHandler = (e) => {
    const validado = validate(form)
    if(validado){
      const countriesId = []
      for(let i = 0; i < form.countries.length; i++){
        for(let k = 0; k < allCountries.length; k++){
          if(form.countries[i] === allCountries[k].name) countriesId.push(allCountries[k].id)
        }
      }
     
      const {name, difficulty, durationHours, durationMinutes, season} = form
      const duration = durationHours.toString() + "." + durationMinutes.toString()
    
      axios.post("http://localhost:3001/activities", {
        "name": name,
        "difficulty": difficulty,
        "duration": duration,
        "season": season,
        "country": countriesId
      })
      e.preventDefault()
      alert("La actividad se creo correctamente")
    } else {
       e.preventDefault()
    }
   
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    if (property === "countries") {
      if (form.countries.includes(value)) {
        alert(`El pais ${value} ya ah sido seleccionado`);
      } else {
        setForm({ ...form, countries: [...form.countries, value] });
      }
    } else {
      setForm({ ...form, [property]: value });
    }
  };

  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input onChange={handleChange} name="name" type="text" value={form.name} />
      </div>
      <div>
        <label htmlFor="dificultad">
          Selecciona la dificultad (ten en cuenta que 1 seria muy fácil y 5 muy
          difícil):
        </label>
        <div className={styles.estrellas}>
          <label>1.</label>
          <input
            onChange={handleChange}
            type="radio"
            name="difficulty"
            value="1"
            checked={form.difficulty === "1"}
          />
          <label>2.</label>
          <input
            onChange={handleChange}
            type="radio"
            name="difficulty"
            value="2"
            checked={form.difficulty === "2"}
          />
          <label>3.</label>
          <input
            onChange={handleChange}
            type="radio"
            name="difficulty"
            value="3"
            checked={form.difficulty === "3"}
          />
          <label>4.</label>
          <input
            onChange={handleChange}
            type="radio"
            name="difficulty"
            value="4"
            checked={form.difficulty === "4"}
          />
          <label>5.</label>
          <input
            onChange={handleChange}
            type="radio"
            name="difficulty"
            value="5"
            checked={form.difficulty === "5"}
          />
        </div>
      </div>
      <div>
        <label>Duracion:</label>
        <input
          name="durationHours"
          type="number"
          min="0"
          value={form.duration}
          onChange={handleChange}
        />{" "}
        horas
        <input
          name="durationMinutes"
          type="number"
          min="0"
          max="59"
          value={form.durationMinutes}
          onChange={handleChange}
        />{" "}
        minutos
      </div>
      <div>
        <label>Temporada:</label>
        <select name="season" onChange={handleChange}>
          <option>-- Seleccionar temporada --</option>
          <option value="summer">Verano</option>
          <option value="sutumn">Otoño</option>
          <option value="winter">Invierno</option>
          <option value="spring">Primavera</option>
        </select>
      </div>
      <div>
        <label>Paises en donde se realiza la actividad:</label>
        <select name="countries" onChange={handleChange}>
          <option key="" value="">
            -- Seleccionar pais/es --
          </option>
          {allCountries.map((u) => {
            return (
              <option key={u.name} value={u.name}>
                {u.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {form.countries.map((c) => (
    <div key={c} value={c} onChange={() => handleChange(c)} className="selected-country">
      {c} <button onClick={() => borrarHandler(c)} name={c}>x</button>
    </div>
  ))}
      </div>
      <button onClick={submitHandler} type="submit">
        Crear actividad!
      </button>
    </form>
  );
}
