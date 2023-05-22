import { GET_ALL_COUNTRY, GET_COUNTRY_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_LETTER, GET_ALL_ACTIVITIES, FILTER_BY_ACTIVITY, FILTER_BY_POPULATION, PAGINATION } from "./actions"

const initialState = {
    allCountries: [],
    countries: [],
    filteredCountry: [],
    allActivities: [],
    currentPage: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRY:
            return {...state, countries: action.payload, filteredCountry: action.payload, allCountries: action.payload}
        case GET_COUNTRY_BY_NAME:
            return {...state, countries: action.payload, currentPage: 0}
        case FILTER_BY_CONTINENT:
          return {...state,
             filteredCountry: action.payload.state,
            countries: action.payload.result, currentPage: 0}
        case FILTER_BY_LETTER:
            return {...state, filteredCountry: action.payload.todos, countries: action.payload.result}
        case GET_ALL_ACTIVITIES:
            return {...state, allActivities: action.payload}
        case FILTER_BY_ACTIVITY:
            return {...state, countries: action.payload.countries, filteredCountry: action.payload.state, currentPage: 0}
        case FILTER_BY_POPULATION:
            return {...state, filteredCountry: action.payload.todos, countries: action.payload.result}
        case PAGINATION:
            return {...state,currentPage: action.payload}
            default:
                return {...state}
    }
}

export default rootReducer;