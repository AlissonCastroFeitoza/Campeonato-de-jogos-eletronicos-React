import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '../src/Style/GlobalStyle'
import Rotas  from './routes';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Rotas/>
  </React.StrictMode>
);

