import styles from "./personInfo.module.css";

const PersonInfo = ({ personInfo }) => {

    const personInfoStandart = personInfo.map(({ title, data }) => (
        data !== "n/a" && (
            <li key={title} className={styles.list__item}>
                <span className={styles.item__title}>{title}</span>
                <span>: {data}</span>
            </li>
        )
    ));

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {personInfoStandart}
            </ul>

        </div>
    );
}

export default PersonInfo;
