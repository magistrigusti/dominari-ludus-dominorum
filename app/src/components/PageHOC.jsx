import { useNavigate } from 'react-router-dom';
import { logo } from '../assets/';
import styles from '../styles';

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hocContainer}>
      <div className={styles.hocContentBox}>
        <img className={styles.hocLogo}
          src={logo} alt="logo" 
          onClick={() => navigate('/')}
        />
        
      </div>
    </div>
  )
}

export default PageHOC;