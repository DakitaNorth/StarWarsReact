import { useState, useEffect } from "react";
import cn from "classnames";

import loaderBlack from "./img/loader-black.svg";
import loaderBlue from "./img/loader-blue.svg";
import loaderWhite from "./img/loader-white.svg";

import styles from "./uiLoading.module.css";

const UiLoading = ({ theme="white", isShadow=true, classes }) => {

    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch(theme) {
            case "black":
                setLoaderIcon(loaderBlack);
                break;
            case "whute":
                setLoaderIcon(loaderWhite);
                break;
            case "blue":
                setLoaderIcon(loaderBlue);
                break;
            default: setLoaderIcon(loaderWhite);
        }
    }, []);

    return (
        <img className={cn(styles.loader, isShadow && styles.shadow, classes)} src={loaderIcon} alt="Loading..." />
    );
}

export default UiLoading;
