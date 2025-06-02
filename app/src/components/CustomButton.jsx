
import styles from '../styles';

const CustomButton = ({ title, handleClick, restStyles }) => {
  return (
    <button className={`${styles.btn} ${restStyles}`}
      onClick={handleClick}
      type="bytton"
    >
      { title }
    </button>
  )
}

export default CustomButton;