import styles from "./LoadingLabel.module.css"
const LoadingLabel = (props) => {

    return (
        <div>
            {props.loading == true && <div className={styles.txtLoadin}>Loading...</div>}
        </div>
    )
}

export default LoadingLabel;