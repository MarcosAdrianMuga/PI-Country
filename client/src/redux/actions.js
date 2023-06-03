import axios from "axios";

export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_LETTER = "FILTER_BY_LETTER";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
export const PAGINATION = "PAGINATION"

export const getAllCountry = () => {
  return (dispatch) => {
    axios.get("/countries").then((res) => {
      const { data } = res;
      dispatch({ type: GET_ALL_COUNTRY, payload: data });
    });
  };
};

export const getAllActivities = () => {
  return (dispatch) => {
    axios.get("/activities").then((res) => {
      const { data } = res;
      dispatch({ type: GET_ALL_ACTIVITIES, payload: data });
    });
  };
};

export const getCountryByName = (name) => {
  return (dispatch) => {
    axios
      .get(`/countries?name=${name}`)
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
  if (continent === "Todos") {
    const result = state;
    return { type: FILTER_BY_CONTINENT, payload: { result, state } };
  } else {
    const result = state.filter((c) => c.continent === continent);
    return { type: FILTER_BY_CONTINENT, payload: { result, state } };
  }
};
export const filterByLetter = (orden, state, todos) => {
  if (orden === "az") {
    const result = [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
    return { type: FILTER_BY_LETTER, payload: { result, todos } };
  } else if (orden === "za") {
    const result = [...state].sort((a, b) => (a.name < b.name ? 1 : -1));
    return { type: FILTER_BY_LETTER, payload: { result, todos } };
  } else {
    const result = state;
    return { type: FILTER_BY_LETTER, payload: { result, todos } };
  }
};

export const filterByPopulation = (orden, state, todos) => {
  if(orden === "as") {
    const result = [...state].sort((a, b) => (a.population > b.population ? 1 : -1))
    return { type: FILTER_BY_POPULATION, payload: { result, todos }}
  } else if(orden === "de") {
    const result = [...state].sort((a, b) => (a.population > b.population ? -1 : 1))
    return { type: FILTER_BY_POPULATION, payload: { result, todos }}
  } else {
    const result = state;
    return { type: FILTER_BY_POPULATION, payload: { result, todos }}
  }
}

export const filterByActivity = (activity, target, state, allActivities) => {
  if (target === "Todos") {
    const result = allActivities;
    const allCountries = [];
    for (let i = 0; i < result.length; i++) {
      for (let k = 0; k < result[i].countries.length; k++) {
        allCountries.push(result[i].countries[k]);
      }
    }
    const duplica2 = [];
    const countries = [];
    allCountries.forEach((c) => {
      if (!duplica2.includes(c.id)) {
        duplica2.push(c.id);
        countries.push(c);
      }
    });
    return { type: FILTER_BY_ACTIVITY, payload: { countries, state } };
  } else {
    const result = activity.filter((c) => c.name === target);
    const { countries } = result[0];
    return { type: FILTER_BY_ACTIVITY, payload: { countries, state } };
  }
};

export const pagination = (current, direction) => {
  switch(direction){
    case "primero":
      return { type: PAGINATION, payload: 0}
    case "anterior":
      current --
      return { type: PAGINATION, payload: current}
    case "siguiente":
      current ++
      return { type: PAGINATION, payload: current}
    case "ultimo":
      return { type: PAGINATION, payload: current}
    default:
  }
}
