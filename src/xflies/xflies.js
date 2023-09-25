import './xflies.css';
import React, {useState} from 'react';
import alien from './ximg/alien.png';
import alien1 from './ximg/alien1.png';
import alien2 from './ximg/alien2.png';
import alien3 from './ximg/alien3.png';
import aliens from './ximg/aliens.png';
import area51 from './ximg/area-51.png';
import fullmoon from './ximg/full-moon.png';
import mars from './ximg/mars.png';
import solar from './ximg/solar-system.png';
import ufo from './ximg/ufo.png';
import xlogo from './ximg/xlogo.jpg';

const xflies=()=>{



    return(
        <main className='xApp'>
        <header className='xHeader'>
              <img src={aliens} className='xlogo'></img>
            <h1 className='xtitle'>X-FLIES</h1>
            <h3 className='xundertitle'>The First Alien Space Travel</h3>
        </header>

        </main>
    )
}

export default xflies;