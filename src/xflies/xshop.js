import React, {useState, useEffect} from 'react';
import './xtickets.css';
import './xshop.css';
import {Link} from 'react-router-dom';
import alien from './ximg/alien.png';
import atom from './ximgshop/atom.png';
import bionic from './ximgshop/bionic-hand.png';
import bitcoin from './ximgshop/bitcoin.png';
import blaster from './ximgshop/blaster.png';
import chemistry from './ximgshop/chemistry.png';
import computer from './ximgshop/computer.png';
import cpu from './ximgshop/cpu.png';
import dna from './ximgshop/dna.png';
import energy from './ximgshop/energy.png';
import flycar from './ximgshop/flying-car.png';
import hologram from './ximgshop/hologram.png';
import jetpack from './ximgshop/jetpack.png';
import ram from './ximgshop/memory.png';
import robot from './ximgshop/robot-assistant.png';
import rocket from './ximgshop/rocket.png';
import spaceship from './ximgshop/spaceship.png';
import teleport from './ximgshop/teleport.png';
import telescope from './ximgshop/telescope.png';
import titanium from './ximgshop/titanium.png';
import transformer from './ximgshop/transformer.png';


function Carousel(){
    const [time, settime]=useState(new Date())
    const [list, setlist]=useState([])
    const [itemname, setitemname]=useState('Atomo')
    const [itemimg, setitemimg]=useState({atom})
    const [itemprice, setitemprice]=useState('€17.99')
    const [itemdesc, setitemdesc]=useState('this is a description.')


    useEffect(()=>{
      const newtime=setInterval(()=> settime(new Date()))
        return()=> clearInterval(newtime)
    })




    return(
<main className='xApp'>
            <header className='xHeader'>
                  <img src={alien} className='xlogo'></img>
                <h1 className='xtitle'>X-FLIES</h1>
                <h3 className='xundertitle'>Your First Alien Space Travel</h3>

                <p className='time'>Ora Locale: {time.toLocaleTimeString()}</p>
               <div className='xmenu'>
                <Link to='/xflies' className='xhome'>HomePage</Link>
                <Link to='/xbook' className='xbook'>Biglietti</Link>
                <p className='xshop'>X-Shop</p>
               </div>

            </header>
           
            <div className='shop-grid'>
                <div className='item-box'>
                 <img src={atom} className='item-img'></img>
                 <p className='item-title'>Atomo</p>
                 <p className='item-price'>€17.99</p>
                 <div className='item-desc'>
                    <p className='item-desc-text'>this is a description.</p>
                 </div>
                 <select className='item-quantity'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                 </select>
                 <button className='item-cart'>Aggiungi al carrello</button>
                </div>
                </div>

                <div className='shop-grid'>
            <div className='item-box'>
                 <img src={atom} className='item-img'></img>
                 <p className='item-title'>Atomo</p>
                 <p className='item-price'>€17.99</p>
                 <div className='item-desc'>
                    <p className='item-desc-text'>this is a description.</p>
                 </div>
                 <select className='item-quantity'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                 </select>
                 <button className='item-cart'>Aggiungi al carrello</button>
                </div>

                
               

            </div>


             
            

        
            </main>
    )

}

export default Carousel

