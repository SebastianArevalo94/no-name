import "../styles/NavBar.css";
import Home from "../assets/icons/home.png";
import Medal from "../assets/icons/medal.png";
import Stats from "../assets/icons/stats.png";
import Profile from "../assets/icons/profile.png";
import { useDispatch } from "react-redux";
import {logoutAsync} from '../redux/actions/actionLogin';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-section">
      <div onClick={()=> navigate('/')}>
          <div className="imgDIV">
            <img src={Home} alt="homeIcon" />
          </div>
          <span className="navbar-text">Inicio</span>
        </div>
      </div>
      <div className="navbar-section">
        <div onClick={()=> navigate('/')}>
          <div className="imgDIV">
            <img src={Medal} alt="medalIcon" width="40px" />
          </div>
          <span className="navbar-text">Marcadores</span>
        </div>
      </div>
      <div className="navbar-section">
        <div onClick={()=> navigate('/stats')}>
          <div className="imgDIV">
            <img src={Stats} alt="statsIcon" width="40px" />
          </div>
          <span className="navbar-text">Estadisticas</span>
        </div>
      </div>
      <div className="navbar-section" onClick={()=>dispatch(logoutAsync())}>
        <div className="imgDIV">
          <img src={Profile} alt="profileIcon" width="40px" />
        </div>
        <span className="navbar-text">Cerrar</span>
      </div>
    </div>
  );
};

export default NavBar;
