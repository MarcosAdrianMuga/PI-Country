import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import styles from './Search.module.css'

export default function Search() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = e =>{
        e.preventDefault();
        setName(e.target.value);
        dispatch(getCountryByName(e.target.value));
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(getCountryByName(name));
        setName('');
    }

    return (
        <div className={styles.container}>
            <input 
                className={styles.input}
                type="text" 
                placeholder='Search'
                onChange={e => handleChange(e)}
                value={name}
            />
            <div 
                className={styles.submit}
                onClick={e => handleSubmit(e)}
            >
                <img 
                    className={styles.button} 
                    alt="search-button"
                    src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/search-512.png"
                />
            </div>
        </div>
    )
}


