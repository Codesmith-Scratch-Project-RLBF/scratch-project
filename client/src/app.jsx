import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Main from './components/Main.jsx';
import Auth from './components/Auth.jsx';
const App = () => {
  const userName = useSelector((state) => {
    state.user.userName;
  });
  return (
    <Routes>
      <Route path='/' element={userName ? <Main /> : <Auth />} />
    </Routes>
  );
};

export default App;
