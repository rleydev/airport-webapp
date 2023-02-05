import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AirportDetailedPage } from './pages/AirportDetailPage';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPaige';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <MainPage />}/>
        <Route path='/auth' element={ <AuthPage />}/>
        <Route path='/airport/:id' element={ <AirportDetailedPage />}/>
      </Routes>
    </>
  );
}

export default App;
