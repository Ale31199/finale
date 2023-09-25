import React, {useState} from 'react';
import fullmoon from './ximg/full-moon.png';
import mars from './ximg/mars.png';
import solar from './ximg/solar-system.png';
import alien from './ximg/alien.png';
import earth from './ximg/earth.png';
import jupiter from './ximg/jupiter.png';
import mercury from './ximg/mercury.png';
import neptune from './ximg/neptune.png';
import pluto from './ximg/pluto.png';
import saturn from './ximg/saturn.png';
import uranus from './ximg/uranus.png';
import venus from './ximg/venus.png';
import './xtickets.css';
import {Link} from 'react-router-dom';


function Carousel(){
    const [imma, setimma]=useState(mars);
    const [ttl, settl]=useState('MARTE')
    const [desc, setdesc]=useState("Vola con noi verso una delle destinazioni più amate di sempre, Marte! Oggi puoi prenotare il tuo primissmo volo nello spazio grazie alla nostra avanzata tecnologia di volo. Solo per te, il tuo primo viaggio avrà un costo a partire da 500 SpaceCoin (€700) a persona. Avrai inoltre l'onore di incontrare i piloti! Prenota ora cliccando sul link qui sotto:");
    
    
    const caro={
     img: [mars, fullmoon, solar],
     title: ['MARTE','LUNA', 'VIAGGI INTERSPAZIALI'],
     des: ["Vola con noi verso una delle destinazioni più amate di sempre, Marte! Oggi puoi prenotare il tuo primissmo volo nello spazio grazie alla nostra avanzata tecnologia di volo. Solo per te, il tuo primo viaggio avrà un costo a partire da 500 SpaceCoin (€700) a persona. Avrai inoltre l'onore di incontrare i piloti! Prenota ora cliccando sul link qui sotto:",
     "Vivi la magica esperienza a gravità 0 sulla Luna! La nostra tecnologia aliena permette a voi umani di poter viaggiare comodamente sulla Luna in soli 30 minuti. Prezzo di partenza a soli 300 SpaceCoin (€500) a persona.",
    "Avventure spaziali uniche con i Viaggi Interspaziali! Con questo pacchetto puoi raggiungere destinazioni più lontane, come ad esempio il sistema solare Alfa Centauri, non troppo lontano dal sistema solare. Grazie ai nostri reattori ad alta potenza, i nostri piloti possono raggiungere il sistema solare in 1 settimana! Prezzo di partenza a partire da 1300 SpaceCoin (€1800) a persona."],
    
    bottoni: ['<','>'],
    }
    
    
    const ilCaro=()=>{
        if(imma === caro.img[0] && ttl === caro.title[0] && desc === caro.des[0]){
            setimma(caro.img[1]);
            settl(caro.title[1]);
            setdesc(caro.des[1]);
        } else if ( imma === caro.img[1] && ttl === caro.title[1] && desc === caro.des[1]){
            setimma(caro.img[2]);
            settl(caro.title[2]);
            setdesc(caro.des[2]);
        } else if (imma === caro.img[2] && ttl === caro.title[2] && desc === caro.des[2]){
            setimma(caro.img[0]);
            settl(caro.title[0]);
            setdesc(caro.des[0]);
        }
    }
    const ilCaro2=()=>{
        if(imma === caro.img[2] && ttl === caro.title[2] && desc === caro.des[2]){
            setimma(caro.img[1]);
            settl(caro.title[1]);
            setdesc(caro.des[1]);
        } else if ( imma === caro.img[1] && ttl === caro.title[1] && desc === caro.des[1]){
            setimma(caro.img[0]);
            settl(caro.title[0]);
            setdesc(caro.des[0]);
        }else if (imma === caro.img[0] && ttl === caro.title[0] && desc === caro.des[0]){
            setimma(caro.img[2]);
            settl(caro.title[2]);
            setdesc(caro.des[2]);
        }
    }

    return(
<main className='xApp'>
            <header className='xHeader'>
                  <img src={alien} className='xlogo'></img>
                <h1 className='xtitle'>X-FLIES</h1>
                <h3 className='xundertitle'>Your First Alien Space Travel</h3>
               <div className='xmenu'>
                <Link to='/xflies' className='xhome'>HomePage</Link>
                <p className='xbook'>Buy Tickets</p>
                <p className='xshop'>X-Shop</p>
               </div>

            </header>
            <div className='carosellobox'>
            <div className='carosello'>
            <img className='caroimg' src={imma}></img>
            <h3 className='carotext'><h1 className='carotitle'>{ttl}</h1>{desc}
            <button className='prenota'>Prenota ora</button>
            </h3>
            </div> 
           
        <button className='caroprev' onClick={ilCaro2}>&lt;</button>
        <button className='caronext' onClick={ilCaro}>&gt;</button>
        </div>




            </main>
    )

}

export default Carousel