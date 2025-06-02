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

        <div className={styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${styles.headText} head-text`}>
              { title }
            </h1>
          </div>

          <p>{ description }</p>

          <Component />
        </div>
      </div>
    </div>
  )
}

export default PageHOC;