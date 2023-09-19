import {Outlet, Link} from 'react-router-dom';
import React, {useState} from 'react';
import './header.css';


 const Header=()=>{
const [sel, setsel] = useState(false);
const [sel2, setsel2] = useState(false);
const [sel3, setsel3] = useState(false);


const selected=()=>{
  if (sel){
    setsel(false)
  } else {
    setsel(true)
  }
}
const selected2=()=>{
  if (sel2){
    setsel2(false)
  } else {
    setsel2(true)
  }
}
const selected3=()=>{
  if (sel3){
    setsel3(false)
  } else {
    setsel3(true)
  }
}

const home = sel ?{
  boxShadow:'orange 0px 0px 0px 0px'
  }
  :{};

const skills = sel2 ?{
  boxShadow:'orange 0px 6px 0px 0px',
  }
 
  :{};

  const prj = sel3 ?{
    boxShadow:'orange 0px 6px 0px 0px'
    }
    :{};


    return(
        <div className='header'>
            <h1 className='title'>HomeCode</h1>
            <h1 className='title1'>|</h1>
            <Link to="/" className='home' style={home} onClick={selected}>Home</Link>
            <Link to="/skills" className='skills' style={skills} onClick={selected2}>Skills</Link>
            <Link to="/progetti" className='progetti' style={prj} onClick={selected3}>Progetti</Link>
        <Outlet/>
        
      </div>
    );
  };

export default Header;