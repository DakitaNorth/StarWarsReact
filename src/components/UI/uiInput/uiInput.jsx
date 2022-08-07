import cn from "classnames";

import icon from './img/cancel.svg';

import styles from "./uiInput.module.css";

const UiInput = ({ inputValue, handleInputChange, placeholder, classes }) => {
    return (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                onClick={() => inputValue && handleInputChange('')}
                src={icon}
                className={cn(styles.clear, !inputValue && styles.clear__disabled)}
                alt="Clear"
            />
        </div>
    );
}

export default UiInput;
