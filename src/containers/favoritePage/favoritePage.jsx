import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import PeopleList from "@components/peoplePage/peopleList/peopleList";

import styles from "./favoritePage.module.css";

const FavoritePage = () => {

    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    img: item[1].img
                }
            });
            setPeople(res);
            console.log(people);
        }
    }, []);

    return (
        <>
            <h1>Favorites</h1>
            {people.length
                ? <PeopleList people={people} />
                : <h2 className={styles.comment}>No data...</h2>
            }
        </>
    );
}

export default FavoritePage;
