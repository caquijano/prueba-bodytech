import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<p>Cargando...</p>}>
      
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
