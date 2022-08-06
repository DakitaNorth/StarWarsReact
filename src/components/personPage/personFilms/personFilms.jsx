import { useState, useEffect } from "react";

import { makeConcurrentRequest, changeHTTP } from "@utils/network";

import styles from "./personFilms.module.css";

const PersonFilms = ({ personFilms }) => {

    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(URL => changeHTTP(URL));
            const response = await makeConcurrentRequest(filmsHTTPS);

            setFilmsName(response);
        })();
    }, [personFilms]);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName.sort((a, z) => a.episode_id - z.episode_id).map(({ title, episode_id }) => (
                    <li key={episode_id} className={styles.list__item}>
                        <span className={styles.item__episode}>Episode {episode_id}</span>
                        <span className={styles.item__colon}>:</span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonFilms;
