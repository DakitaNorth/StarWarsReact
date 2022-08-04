import { Link } from "react-router-dom";

import UiButton from "@UI/uiButton/uiButton";

import styles from "./peopleNavigation.module.css";

const PeopleNavigation = ({ getResource, counterPage, prevPage, nextPage }) => {

    const handleChangePrev = () => getResource(prevPage);
    const handleChangeNext = () => getResource(nextPage);

    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                    classes
                />
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    );
}

export default PeopleNavigation;
