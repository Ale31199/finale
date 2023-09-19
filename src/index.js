import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Skills from './skills';
import Proj from './proj';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';


export default function TheRouter(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Main/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/progetti' element={<Proj/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TheRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
