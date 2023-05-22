
const validate = (form, activities) => {
  console.log(form.countries);
  const existe = (activities, name) => {
    let ayuda = false;
    for(let i = 0; i < activities.length; i++){
      if(activities[i].name === name) {
        ayuda = true
        return ayuda
      }
    }
    return ayuda
 }
    if (!form.name) {
      alert("Debe ingresar el nombre") 
      return false
    } else if(existe(activities , form.name)) {
      alert("La actividad ya existe")
      return false
    } else if(form.name.length > 50) {
      alert("Nombre demasiado largo")
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
    if (!form.countries || form.countries[0] === undefined || form.countries[0] === '') {
      alert("Debe seleccionar al menos un pais")
      return false
    }
    return true
  };

  export default validate;