import {Outlet, Link} from 'react-router-dom';
import React from 'react';
import './header.css';


 const Header=()=>{

  const [homeee, sethomeee]=useState(false)
  const [skillsss, setskillsss]=useState(false)
  const [progettiii, setprogettiii]=useState(false)


  const onHome=()=>{
    if(homeee){
      sethomeee(false)
    } else {
      sethomeee(true)
      setskillsss(false)
      setprogettiii(false)
    }
  }
  const onSkill=()=>{
    if(skillsss){
    setskillsss(false)
    } else {
      setskillsss(true)
      sethomeee(false)
      setprogettiii(false)
    }
  }
  const onProgetti=()=>{
    if(progettiii){
      setprogettiii(false)
    } else {
      setprogettiii(true)
      sethomeee(false)
      setskillsss(false)
    }
  }



  const homeE = homeee ?{
    color: 'orange',
    boxShadow: 'orange 0px 6px 0px 0px'
  }:{};
  const skillsS = skillsss ?{
    color: 'orange',
    boxShadow: 'orange 0px 6px 0px 0px'
  }:{};
  const progettiI = progettiii ?{
    color: 'orange',
    boxShadow: 'orange 0px 6px 0px 0px'
  }:{};
  


    return(
        <div className='header'>
            <h1 className='titlew'>HomeCode</h1>
            <h1 className='title1x'>|</h1>
            <div className='menu'>
            <Link to="/" className='homeq'style={homeE} onClick={onHome}>Home</Link>
            <Link to="/skills" className='skills' style={skillsS} onClick={onSkill}>Skills</Link>
            <Link to="/progetti" className='progetti'style={progettiI}onClick={onProgetti} >Progetti</Link>
            </div>
        <Outlet/>
        
      </div>
    );
  };

export default Header;