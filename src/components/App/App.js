import React from 'react';
// import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Coaches from '../Coaches/Coaches';
// import Footer from '../Footer/Footer';
import '../../vendor/fonts/fonts.css';
import './App.css';
import TrainerPageMain from '../Coaches/TrainerPage/TrainerPageMain';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/coaches" element={<Coaches/>}/>
            <Route path="/coaches/ash" element={<TrainerPageMain />} />
          </Routes>
    </div>
  );
}

export default App;
