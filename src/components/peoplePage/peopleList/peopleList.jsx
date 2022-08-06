import { Link } from "react-router-dom";

import styles from "./peopleList.module.css";

const PeopleList = ({ people }) => {

    const peopleStandart = people.map(({ id, name, img }) => {
        return (
            <li key={id} className={styles.list__item}>
                <Link to={`/people/${id}`}>
                    <img className={styles.person__photo} src={img} alt={name} />
                    <span className={styles.person__name}>{name}</span>
                </Link>
            </li>
        )
    });

    return (
        <ul className={styles.list__container}>
            {peopleStandart}
        </ul>
    );
}

export default PeopleList;
