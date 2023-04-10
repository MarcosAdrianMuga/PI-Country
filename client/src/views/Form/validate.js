
const validate = (form) => {
    if (!form.name) {
      alert("Debe ingresar el nombre") 
      return false
    }
    if (!form.difficulty) {
      alert("Debe indicar la dificultad")
      return false
    }
    if(form.durationMinutes > 59 || form.durationMinutes < 0){
        alert("Minutos incorrectos")
        return false
    }
    if(form.durationHours < 0){
      alert("Duracion incorrecta")
      return false
    }
    if (!form.durationHours || !form.durationMinutes) {
      alert("Debe ingresar la duración")
      return false  
    }
    if (!form.season) {
      alert("Debe ingresar en que temporada se realiza la actividad")
      return false
    }
    if (!form.countries) {
      alert("Debe seleccionar al menos un pais")
      return false
    }
    return true
  };

  export default validate;