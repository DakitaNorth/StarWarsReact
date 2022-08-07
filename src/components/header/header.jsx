import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useTheme, THEME_LIGTH, THEME_DARK, THEME_NEUTRAL } from "@context/ThemeProvider";

import Favorite from "@components/favorite/favorite";

import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import styles from "./header.module.css";


const Header = () => {

    const isTheme = useTheme();

    const [icon, setIcon] = useState(imgDroid);

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGTH:
                setIcon(imgLightsaber);
                break;
            case THEME_DARK:
                setIcon(imgSpaceStation);
                break;
            case THEME_NEUTRAL:
                setIcon(imgDroid);
                break;
            default: setIcon(imgDroid);
        }
    }, [isTheme]);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="logo" />

            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
            </ul>

            <Favorite />
        </div>
    )
};

export default Header;
