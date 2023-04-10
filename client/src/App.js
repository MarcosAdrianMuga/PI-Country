import { Route, useLocation  } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Home, Landing, Detail, Form} from "./views"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCountry, getAllActivities } from "./redux/actions";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountry())
  },[dispatch])

  useEffect(() => {
    dispatch(getAllActivities())
  },[dispatch])

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing}/>
      <Route path="/country/:id" render={() =><Detail/>}/>
      <Route exact path="/create" component={Form}/>
      <Route exact path="/home" render={() => <Home/>}/>
    </div>
  );
}

export default App;
