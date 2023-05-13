import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Register from './components/Register';
import Auth from './components/Auth';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  <Routes>
    <Route path="/" element={<Auth />} />
  </Routes>;
};

export default App;
