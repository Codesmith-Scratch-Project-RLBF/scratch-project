import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main.jsx';
import Auth from './components/Auth.jsx';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />a
      <Route path='/main' element={<Main />} />
    </Routes>
  );
};

export default App;
