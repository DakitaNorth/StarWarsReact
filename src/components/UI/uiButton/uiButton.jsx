import cn from "classnames";

import styles from "./uiButton.module.css";

const UiButton = ({ text, onClick, disabled, theme="dark", classes }) => {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={cn(styles.button, styles[theme], classes)}>
                {text}
            </button>
        </>
    );
}

export default UiButton;
