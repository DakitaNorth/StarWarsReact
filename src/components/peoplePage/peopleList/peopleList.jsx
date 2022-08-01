import styles from "./peopleList.module.css";

const PeopleList = props => {
    return (
        <li key={props.id} className={styles.list__item}>
            <a href="#">
                <img className={styles.person__photo} src={props.img} alt={props.name} />
                <span className={styles.person__name}>{props.name}</span>
            </a>
        </li>
    );
}

export default PeopleList;
