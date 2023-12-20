import React, {useState} from 'react';
import styles from './search.module.css';
import { FaSearch } from "react-icons/fa";

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("Search influencers by username, first name, last name, tags");

    return(
        <div className={styles.search_body}>
            <input
            type="search"
            className={styles.search_input}
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={styles.search_Icon}><FaSearch/>Search </div>
        {/* <button className={styles.searchButton}>
            Search
       </button> */}
        </div>
    )
}