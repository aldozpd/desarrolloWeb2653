import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import DbConnection from './DB-connection';
import Login from './routes/Login';
import Formulario from './routes/Formulario';
import Registro from './routes/Registro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='db-connection' element={<DbConnection/>} />
      <Route path="registro" element={<Registro />} />
      <Route path="formulario" element={<Formulario />} />

    </Routes>
  </BrowserRouter>
);