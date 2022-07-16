import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import Api from './components/Api';
// import ApiFetch from './api/ApiFetch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  {/* <App /> */}
  <Api />
  </BrowserRouter>
  </>
);