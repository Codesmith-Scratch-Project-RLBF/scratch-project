import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './src/app.jsx';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
