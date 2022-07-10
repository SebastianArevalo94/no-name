import "../../styles/BackButton.css";
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <img
      onClick={()=>navigate(-1)}
      className="backButton" 
      alt="backButtonIcon"
      src="https://img.icons8.com/ios-filled/70/000000/back.png"
    />
  );
};

export default BackButton;
