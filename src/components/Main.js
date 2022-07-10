import React from "react";
import Languages from "./Languages/Languages";
import '../styles/Main.css';

const Main = () => {
  return (
    <div>
      <h1 className="selectLanguage">Selecciona un idioma</h1>
      <div className="globalLG-DIV">
        <Languages />
      </div>
    </div>
  );
};

export default Main;
