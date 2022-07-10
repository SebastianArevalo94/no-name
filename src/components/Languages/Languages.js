import { useNavigate } from "react-router-dom";
import "../../styles/Languages.css";

const Languages = () => {
  const navigate = useNavigate();
  return (
    <div className="languagesDIV">
      {/* English */}
      <div className="languageDIV">
        <img
          className="languageIMG"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/2560px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"
          alt="UK Flag"
        />
        <p className="languageTitle">Inglés</p>
        <div className="btnDIV">
          <a
            className="languageButton"
            href
            onClick={() => navigate("/english")}
          >
            Aprender
          </a>
        </div>
      </div>
      {/* French */}
      <div className="languageDIV">
        <img
          className="languageIMG"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
          alt="France Flag"
        />
        <p className="languageTitle">Francés</p>
        <div className="btnDIV">
          <a
            className="languageButton"
            href
            onClick={() => navigate("/french")}
          >
            Aprender
          </a>
        </div>
      </div>
      {/* Chinesse */}
      <div className="languageDIV">
        <img
          className="languageIMG"
          src="https://i.ibb.co/pdx9ynk/china.png"
          alt="China Flag"
        />
        <p className="languageTitle">Chino</p>
        <div className="btnDIV">
          <a
            className="languageButton"
            href
            onClick={() => navigate("/chinese")}
          >
            Aprender
          </a>
        </div>
      </div>
    </div>
  );
};

export default Languages;
