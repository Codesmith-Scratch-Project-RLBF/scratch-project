import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Main from './components/Main.jsx';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

  );
};

export default App;
