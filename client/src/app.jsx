import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Register from './components/Register';
import Auth from './components/Auth';
import { useSelector, useDispatch } from 'react-redux';
import Main from './components/Main';

const App = () => {
  <Routes>
    <Route path="/" element={<Main />} />
  </Routes>;
};

export default App;
