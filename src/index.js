import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Skills from './skills';
import Proj from './proj';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Spotify from './spotify/HomePage';
import PixeL from './pixelnightmare/test';
import Calculator from './calcolatrice/Calculator';
import Xflies from './xflies/xflies';
import Xbook from './xflies/xtickets';
import Preordina from './xflies/preordina';
import Preordinagiove from './xflies/preordinagiove';
import Preordinamercurio from './xflies/preordinamerc';
import Preordinanet from './xflies/preordinanet';
import Preordinapluto from './xflies/preordinapluto';
import Preordinasatu from './xflies/preordinasatu';
import Preordinaurano from './xflies/preordinaurano';
import Preordinaven from './xflies/preordinaven';
import Preordinamarte from './xflies/preordinamarte';
import Preordinaluna from './xflies/preordinaluna';
import Preordinaextra from './xflies/preordinaextra';
import Xshop from './xflies/xshop';

export default function TheRouter(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Main/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/progetti' element={<Proj/>} />
        <Route path='/spotify' element={<Spotify/>}/>
        <Route path='/pixel' element={<PixeL/>}/>
        <Route path='/calco' element={<Calculator/>}/>
        <Route path='/xflies' element={<Xflies/>}/>
        <Route path='/xbook' element={<Xbook/>}/>
        <Route path='/terra' element={<Preordina/>}/>
        <Route path='/giove' element={<Preordinagiove/>}/>
        <Route path='/mercurio' element={<Preordinamercurio/>}/>
        <Route path='/nettuno' element={<Preordinanet/>}/>
        <Route path='/pluto' element={<Preordinapluto/>}/>
        <Route path='/saturno' element={<Preordinasatu/>}/>
        <Route path='/urano' element={<Preordinaurano/>}/>
        <Route path='/venere' element={<Preordinaven/>}/>
        <Route path='/marte' element={<Preordinamarte/>}/>
        <Route path='/luna' element={<Preordinaluna/>}/>
        <Route path='/extra' element={<Preordinaextra/>}/>
        <Route path='/xshop' element={<Xshop/>}/>
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
