import cn from "classnames";

import { useTheme, THEME_LIGTH, THEME_DARK, THEME_NEUTRAL } from "@context/ThemeProvider";

import imgLigthSide from "./img/light-side.jpg"
import imgDarkSide from "./img/dark-side.jpg"
import imgNeutralSide from "./img/falcon.jpg"

import styles from "./chooseSide.module.css";

const ChooseSide = () => {

    const isTheme = useTheme();

    const elements = [
        {
            theme: THEME_LIGTH,
            text: "Light Side",
            img: imgLigthSide,
            classes: styles.item__light
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDarkSide,
            classes: styles.item__dark
        },
        {
            theme: THEME_NEUTRAL,
            text: "I'm Han Solo!",
            img: imgNeutralSide,
            classes: styles.item__neutral
        }
    ];

    const chooseStandart = elements.map(({ theme, text, img, classes }) => (
        <div onClick={() => { isTheme.change(theme) }} className={cn(styles.item, classes)} key={theme}>
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    ));

    return (
        <div className={styles.container}>
            {chooseStandart}
        </div>
    );
}

export default ChooseSide;
