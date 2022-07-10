import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Login from "../components/Login";
import Main from '../components/Main';
import English from '../components/Languages/English';
import French from '../components/Languages/French';
import Chinese from '../components/Languages/Chinese';
import Stats from '../components/Stats';
import Question from '../components/Question';

const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/question" element={<Question />} />
        <Route path="/english" element={<English />} />
        <Route path="/french" element={<French />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
    </div>
  );
};

export default DashboardRouters;
