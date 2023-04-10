// import { useSelector } from "react-redux";
// import CardsContainer from "../../components/CardsContainer/CardsContainer";
// import React from 'react'

// export default function Home() {
//     const countries = useSelector((state) => state.countries)
//   return (
//     <div>
//       <CardsContainer countries={countries}/>
//     </div>
//   )
// }

import { useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore the World</h1>
      <CardsContainer countries={countries}/>
    </div>
  );
}
