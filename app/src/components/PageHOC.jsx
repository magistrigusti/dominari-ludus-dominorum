import { useNavigate } from 'react-route-dom';
import { logo, heroImg } from '../assets';
import styles from '../styles';

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div>

      </div>
    </div>
  )
}

export default PageHOC;