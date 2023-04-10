import { GET_ALL_COUNTRY, GET_COUNTRY_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_LETTER, GET_ALL_ACTIVITIES } from "./actions"

const initialState = {
    allCountries: [],
    countries: [],
    filteredCountry: [],
    allActivities: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRY:
            return {...state, countries: action.payload, filteredCountry: action.payload, allCountries: action.payload}
        case GET_COUNTRY_BY_NAME:
            return {...state, countries: action.payload}

        case FILTER_BY_CONTINENT:
          return {...state,
             filteredCountry: action.payload.state,
            countries: action.payload.result}
        case FILTER_BY_LETTER:
            return {...state, filteredCountry: action.payload.todos, countries: action.payload.result}
        case GET_ALL_ACTIVITIES:
            return {...state, allActivities: action.payload}
            default:
                return {...state}
    }
}

export default rootReducer;