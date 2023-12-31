import React from "react";
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  )
}

export default App;
