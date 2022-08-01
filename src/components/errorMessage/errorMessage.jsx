import styles from "./errorMessage.module.css";

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.message}>
                The dark side of the force has won.<br/>
                We cannot display data.<br/>
                Come back when we fix everything
            </p>
        </>
    );
}

export default ErrorMessage;
