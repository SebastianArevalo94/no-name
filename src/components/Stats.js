import "../styles/Stats.css";
import star from '../assets/icons/star.png';
import check from '../assets/icons/check.png';
import error from '../assets/icons/error.png';
import {useEffect, useState} from 'react';

const Stats = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <div className="statsGlobalDIV">
      <div className="statsDIV">
        <div>
          <img
            className="profileImage"
            src={user.img}
            alt="ProfileImage"
          />
          <p className="profileName">{user.name}</p>
        </div>
        <div className="statsInfo">
            <div className="statStars">
                <span>Total de estrellas: {user.stars}</span>
                <img className="mb-2" src={star} width="42px" alt='star'/>
            </div>
            <div className="statSuccess">
                <span>Respuestas Acertadas: {user.correctAnswers}</span>
                <img className="mb-2" src={check} width="42px" alt='star'/>
            </div>
            <div className="statError">
                <span>Respuestas Fallidas: {user.incorrectAnswers}</span>
                <img className="mb-2" src={error} width="42px" alt='star'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
