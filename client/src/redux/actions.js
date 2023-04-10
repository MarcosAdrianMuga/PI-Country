import axios from "axios";

export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_BY_LETTER = "FILTER_BY_LETTER"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES"

export const getAllCountry = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/countries").then((res) => {
      const { data } = res;
      dispatch({ type: GET_ALL_COUNTRY, payload: data });
    });
  };
};

export const getAllActivities = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/activities").then((res) => {
      const { data } = res;
      console.log(data);
      dispatch({ type: GET_ALL_ACTIVITIES, payload: data})
    })
  }
}

export const getCountryByName = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: GET_COUNTRY_BY_NAME,
          payload: data,
        });
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };
};

export const filterByContinent = (continent, state) => {
    if(continent === "Todos"){
      const result = state
        return{type: FILTER_BY_CONTINENT, payload: {result,state}}
       } else {
        const result = state.filter(c => c.continent === continent)
            return{type: FILTER_BY_CONTINENT, payload: {result,state}}
          }
}
export const filterByLetter = (orden, state, todos) => { 
  if(orden === 'az') {
    const result = [...state].sort((a, b) => (a.name > b.name ? 1: -1));
    return{type: FILTER_BY_LETTER, payload: {result,todos}}
  }
  else if(orden === 'za'){
    const result = [...state].sort((a, b) => (a.name < b.name ? 1: -1));
    return{type: FILTER_BY_LETTER, payload: {result,todos}}
  } else {
    const result = state
    return{type: FILTER_BY_LETTER, payload: {result,todos}}
  }
}

export const createActivity = (form) => {

  return{type: CREATE_ACTIVITY, payload: form}
}