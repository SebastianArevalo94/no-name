import one from "../../assets/icons/1-English.png";
import "../../styles/Languages/English.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

const English = () => {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <>
      <BackButton />
      <div className="globalDIV">
      {/* <BackButton /> */}
        {user.languageStats.English >= 1 ? (
          <div className="completed">
            <div className="firstLevel" onClick={() => navigate("/question")}>
              <img width="128px" height="128px" src={one} alt="" />
              <p className="intro">Intro</p>
            </div>
            <img
              className="check"
              src="https://img.icons8.com/material/50/79ea02/checked--v1.png"
              alt="checkIcon"
            />
          </div>
        ) : (
          <div className="uncompleted">
            <div className="firstLevel" onClick={() => navigate("/question")}>
              <img width="128px" height="128px" src={one} alt="" />
              <p className="intro">Intro</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default English;
