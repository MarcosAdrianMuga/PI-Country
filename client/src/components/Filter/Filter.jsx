import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, filterByLetter, filterByPopulation, filterByActivity } from "../../redux/actions";
import styles from "./Filter.module.css"
export default function Filter() {
  const allCountries = useSelector((state) => state.allCountries)
  const countriesf = useSelector((state) => state.filteredCountry);
  const countries = useSelector((state) => state.countries)
  const dispatch = useDispatch();
  const continents = allCountries.map((c) => c.continent);
  const filteredcontinents = continents.filter(
    (el, index) => continents.indexOf(el) === index
  );
  const allActivities = useSelector((state) => state.allActivities)
  const handleSelect = (e) => {
    dispatch(filterByContinent(e.target.value , countriesf));
  };

  const handleAlfa = (e) => {
    dispatch(filterByLetter(e.target.value , countries, allCountries))
  }

  const handlePobla = (e) => {
    dispatch(filterByPopulation(e.target.value , countries, allCountries))
  }

  const handleActivity = (e) => {
    // const result = countriesf.filter(c => c.activities[0] !== undefined)
    dispatch(filterByActivity(allActivities, e.target.value, countries, allActivities))
  }

  return (
    <div className={styles["filter-container"]}>
  <label className={styles["filter-label"]} key="texto">Filter by:</label>
  <select className={styles["filter-select"]} key="select" onChange={handleSelect}>
    <option key="" value="" >-- Filter by continent --</option>
    <option key="Todos" value="Todos">All</option>
    {filteredcontinents.map((u) => {
      return (
        <option key={u} value={u}>
          {u}
        </option>
      );
    })}
  </select>
  <div>
    <select onChange={handleAlfa}>
      <option value="">-- Filter by alphabetical order --</option>
      <option value="az">A to Z</option>
      <option value="za">Z to A</option>
    </select>
  </div>
  <div>
    <select onChange={handlePobla}>
      <option value="">-- Filter by population --</option>
      <option value="as">Upward</option>
      <option value="de">Downward</option>
    </select>
  </div>
  <div>
    <select onChange={handleActivity}>
      <option key="" value="">-- Filter by activities --</option>
      <option key="Todos" value="Todos">All</option>
      {allActivities.map((a,index) => {
        return (
          <option key={index} value={a.name}>
            {a.name}
          </option>
        )
      })}
    </select>
  </div>
</div>

  );
}
