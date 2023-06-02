
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
      alert("You must enter the name") 
      return false
    } else if(existe(activities , form.name)) {
      alert("The activity already exists")
      return false
    } else if(form.name.length > 50) {
      alert("Name too long")
      return false
    }
    if (!form.difficulty) {
      alert("You must indicate the difficulty")
      return false
    }
    if(form.durationMinutes > 59 || form.durationMinutes < 0){
        alert("Incorrect minutes")
        return false
    }
    if(form.durationHours < 0){
      alert("Incorrect duration")
      return false
    }
    if (!form.durationHours || !form.durationMinutes) {
      alert("You must enter the duration")
      return false  
    }
    if (!form.season) {
      alert("You must enter the season")
      return false
    }
    if (!form.countries || form.countries[0] === undefined || form.countries[0] === '') {
      alert("You must select at least one country")
      return false
    }
    return true
  };

  export default validate;