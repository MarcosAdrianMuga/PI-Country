import { Link } from "react-router-dom"
import style from "./NavBar.module.css"
import Search from "../Search/Search"
import Filter from "../Filter/Filter"

const NavBar = () => {
    return(
        <div className={style.mainContainer}>
            <Link to="/home">HOME</Link>
            <Filter/>
            <Search/>
            <Link to="/create">FORM</Link>
        </div>
    )
}

export default NavBar;