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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='db-connection' element={<DbConnection/>} />
    </Routes>
  </BrowserRouter>
);