import {Outlet, Link} from 'react-router-dom';
import React from 'react';
import './header.css';


 const Header=()=>{


    return(
        <div className='header'>
            <h1 className='titlew'>HomeCode</h1>
            <h1 className='title1x'>|</h1>
            <div className='menu'>
            <Link to="/" className='homeq'>Home</Link>
            <Link to="/skills" className='skills' >Skills</Link>
            <Link to="/progetti" className='progetti' >Progetti</Link>
            </div>
        <Outlet/>
        
      </div>
    );
  };

export default Header;