import React from 'react';
import ReactDOM from 'react-dom';
import Roteador from './componentes/roteador';
import reportWebVitals from './reportWebVitals';
import "../src/estilo/estilo.css";

ReactDOM.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
