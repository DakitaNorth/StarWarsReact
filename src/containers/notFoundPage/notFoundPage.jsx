import { useLocation } from "react-router-dom";

import styles from "./notFoundPage.module.css";

import img from "./img/not-found.png";

const NotFoundPage = () => {

    let location = useLocation();

    return (
        <div className={styles.wrappers}>
            <img className={styles.img} src={img} alt="Not found page" />
            <span className={styles.text}>No match for <u>{location.pathname}</u></span>
        </div>
    );
}

export default NotFoundPage;
