import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../components/Main';
// import CrudProperties from "../components/CrudProperties";
// import Carrito from "../components/Carrito";
// import Favoritos from "../components/Favoritos";
// import SearchPropertie from "../components/SearchPropertie";
// import NavBar from "../components/NavBar";
// import Perfil from "../components/Perfil";

const DashboardRouters = () => {
  return (
    <div>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </div>
  );
};

export default DashboardRouters;
