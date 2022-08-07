import { Link } from "react-router-dom";

import styles from "./searchPageInfo.module.css";

const SearchPageInfo = ({ people }) => {

    const searchInfoStandart = people.map(({ id, name, img }) => (
        <li key={id} className={styles.list__item}>
            <Link to={`/people/${id}`}>
                <img className={styles.person__photo} src={img} alt={name} />
                <span className={styles.person__name}>{name}</span>
            </Link>
        </li>
    ));

    return (
        <>
            {people.length
                ? <ul className={styles.list__container}>{searchInfoStandart}</ul>
                : <h2 className={styles.person__comment}>No results...</h2>
            }
        </>
    );
}

export default SearchPageInfo;
