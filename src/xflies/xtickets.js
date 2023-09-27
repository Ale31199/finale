import React, {useState, useEffect} from 'react';
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
import chat from './ximg/chat.png';
import './xtickets.css';
import {Link} from 'react-router-dom';


function Carousel(){
    const [imma, setimma]=useState(mars);
    const [ttl, settl]=useState('MARTE')
    const [desc, setdesc]=useState("Vola con noi verso una delle destinazioni più amate di sempre, Marte! Oggi puoi prenotare il tuo primissmo volo nello spazio grazie alla nostra avanzata tecnologia di volo. Solo per te, il tuo primo viaggio avrà un costo a partire da €699 a persona. Avrai inoltre l'onore di incontrare i piloti! Prenota ora cliccando sul link qui sotto:");
    const [assist, setassist]=useState("Benvenuto all'assistenza automatica di X-Flies! Per utilizzare la chat di assistenza, seleziona una delle seguenti opzioni a te interessate.")
    const [opt1, setopt1]=useState("Dove acquistare oggetti originali X-Flies")
    const [opt2, setopt2]=useState("Richiesta di rimborso")
    const [opt3, setopt3]=useState("Come richiedere l'autografo dei piloti")
    const [opt4, setopt4]=useState("Richiedi l'assistenza dal vivo")
    const [openass, setopenass]=useState(false)
    const [time, settime]=useState(new Date())
    const [butlink, setbutlink]=useState(<Link to='/marte'>Prenota Ora</Link>)

      useEffect(()=>{
        const interval = setInterval(() => {
            settime(new Date())
        }, 1000);

        return ()=> clearInterval(interval)
      }, [])


    const caro={
     img: [mars, fullmoon, solar],
     title: ['MARTE','LUNA', 'VIAGGI INTERSPAZIALI'],
     des: ["Vola con noi verso una delle destinazioni più amate di sempre, Marte! Oggi puoi prenotare il tuo primissmo volo nello spazio grazie alla nostra avanzata tecnologia di volo. Solo per te, il tuo primo viaggio avrà un costo a partire da €699 a persona. Avrai inoltre l'onore di incontrare i piloti! Prenota ora cliccando sul link qui sotto:",
     "Vivi la magica esperienza a gravità 0 sulla Luna! La nostra tecnologia aliena permette a voi umani di poter viaggiare comodamente sulla Luna in soli 30 minuti. Prezzo di partenza a soli €499 a persona.",
    "Avventure spaziali uniche con i Viaggi Interspaziali! Con questo pacchetto puoi raggiungere destinazioni più lontane, come ad esempio il sistema solare Alfa Centauri, non troppo lontano dal sistema solare. Grazie ai nostri reattori ad alta potenza, i nostri piloti possono raggiungere il sistema solare in 1 settimana! Prezzo di partenza a partire da €1799 a persona."],
    
    bottoni: ['<','>'],
    }

    
    const ilCaro=()=>{
        if(imma === caro.img[0] && ttl === caro.title[0] && desc === caro.des[0]){
            setimma(caro.img[1]);
            settl(caro.title[1]);
            setdesc(caro.des[1]);
            setbutlink(<Link to='/luna'>Prenota Ora</Link>)
        } else if ( imma === caro.img[1] && ttl === caro.title[1] && desc === caro.des[1]){
            setimma(caro.img[2]);
            settl(caro.title[2]);
            setdesc(caro.des[2]);
            setbutlink(<Link to='/extra'>Prenota Ora</Link>)
        } else if (imma === caro.img[2] && ttl === caro.title[2] && desc === caro.des[2]){
            setimma(caro.img[0]);
            settl(caro.title[0]);
            setdesc(caro.des[0]);
            setbutlink(<Link to='/marte'>Prenota Ora</Link>)
        }
    }
    const ilCaro2=()=>{
        if(imma === caro.img[2] && ttl === caro.title[2] && desc === caro.des[2]){
            setimma(caro.img[1]);
            settl(caro.title[1]);
            setdesc(caro.des[1]);
            setbutlink(<Link to='/luna'>Prenota Ora</Link>)
        } else if ( imma === caro.img[1] && ttl === caro.title[1] && desc === caro.des[1]){
            setimma(caro.img[0]);
            settl(caro.title[0]);
            setdesc(caro.des[0]);
            setbutlink(<Link to='/marte'>Prenota Ora</Link>)
        }else if (imma === caro.img[0] && ttl === caro.title[0] && desc === caro.des[0]){
            setimma(caro.img[2]);
            settl(caro.title[2]);
            setdesc(caro.des[2]);
            setbutlink(<Link to='/extra'>Prenota Ora</Link>)
        }
    }



    const assistchat={
        assisttext: ["Benvenuto all'assistenza automatica di X-Flies! Per utilizzare la chat di assistenza, seleziona una delle seguenti opzioni a te interessate.", 
        "Puoi trovare tutti gli oggetti originali X-Flies nel nostro X-Shop, facilmente accessibile dal menu iniziale. Basta cliccare su X-Shop per esplorare i nostri prodotti esclusivi.",
        "Il rimborso verrà elaborato entro 7-10 giorni lavorativi dalla ricezione della tua richiesta via email inviata a assistenzaxflies@gmail.com. Ti ringraziamo per la tua comprensione e pazienza durante questo processo.",
        "Durante il tuo viaggio con XFlies, chiedi semplicemente un autografo quando incontri i nostri piloti alieni. Saranno felici di firmare un souvenir o una cartolina come ricordo del tuo viaggio spaziale!",
        "Per assistenza in tempo reale, ti preghiamo di inviare una email a assistenzaxflies@gmail.com. Il nostro team sarà lieto di rispondere prontamente alle tue domande e offrirti il supporto necessario."
    ],


        opzioni: ['Dove acquistare oggetti originali X-Flies', 'Richiesta di rimborso',"Come richiedere l'autografo dei piloti", "Richiedi l'assistenza dal vivo"]
        }

    const assistPro=()=>{
        if(assist === assistchat.assisttext[0] && opt1 === assistchat.opzioni[0]){
            setassist(assistchat.assisttext[1])
            setTimeout(()=>{
            setassist(assistchat.assisttext[0])
    }, 10000)
        }
}

const assistPro2=()=>{
    if(assist === assistchat.assisttext[0] && opt2 === assistchat.opzioni[1]){
        setassist(assistchat.assisttext[2])
        setTimeout(()=>{
        setassist(assistchat.assisttext[0])
}, 10000)
    }
}
const assistPro3=()=>{
    if(assist === assistchat.assisttext[0] && opt3 === assistchat.opzioni[2]){
        setassist(assistchat.assisttext[3])
        setTimeout(()=>{
        setassist(assistchat.assisttext[0])
}, 10000)
    }
}
const assistPro4=()=>{
    if(assist === assistchat.assisttext[0] && opt4 === assistchat.opzioni[3]){
        setassist(assistchat.assisttext[4])
        setTimeout(()=>{
        setassist(assistchat.assisttext[0])
}, 10000)
    }
}


     const openassistance=()=>{
        if(openass){
            setopenass(false)
        }else{
            setopenass(true)
        }
     }

     const apri = openass ?{
     visibility:'visible',
     }
     :{};




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
                <Link to='/xshop' className='xshop'>X-Shop</Link>
               </div>

            </header>
            <div className='carosellobox'>
            <div className='carosello'>
                <h1 className='caroricercati'>Voli più ricercati</h1>
            <img className='caroimg' src={imma}></img>
            <h3 className='carotext'><h1 className='carotitle'>{ttl}</h1>{desc}
            <button className='prenota'>{butlink}</button>
            </h3>
            </div> 
           
        <button className='caroprev' onClick={ilCaro2} >&lt;</button>
        <button className='caronext' onClick={ilCaro}>&gt;</button>
        </div>


            <div className='tickbox'>

        
            <h1 className='tickscopri'>Scopri gli altri voli</h1>
                <div className='tickets'>
                    <img src={earth} className='tickimg'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>TERRA</h1></div>
                    <h3 className='ticktext'>Abbraccia l'opportunità di una vita con il nostro viaggio verso la Terra! Vedrai la bellezza del tuo pianeta natale dall'alto dello spazio. Biglietti limitati disponibili a soli €499. Prenota ora e scopri la Terra da una prospettiva senza precedenti!</h3>
                    <Link to='/terra' className='tickpre'>Prenota ora</Link>
                </div>

                <div className='ticketsgiove'>
                    <img src={jupiter} className='tickimg'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>GIOVE</h1></div>
                    <h3 className='ticktext'>Preparati per un'esperienza straordinaria mentre viaggi verso Giove, il gigante gassoso del nostro sistema solare! Panorami mozzafiato e lune affascinanti ti aspettano. Biglietti limitati a soli €2,499. Prenota oggi stesso!</h3>
                    <Link to='/giove' className='tickpre'>Prenota ora</Link>
                </div>

                <div className='ticketsmercurio'>
                    <img src={mercury} className='tickimg'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>MERCURIO</h1></div>
                    <h3 className='ticktext'>Ti invitiamo a un viaggio emozionante verso Mercurio, il pianeta più vicino al Sole! Scopri paesaggi alieni e caldi tramonti con un viaggio che ti lascerà senza fiato. Biglietti limitati a soli €1,799. Prenota ora per questa esperienza unica!</h3>
                    <Link to='/mercurio' className='tickpre'>Prenota ora</Link>
                </div>

                <div className='ticketsnet'>
                    <img src={neptune} className='tickimg'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>NETTUNO</h1></div>
                    <h3 className='ticktext'>Immergiti nella maestosità di Nettuno, il pianeta più lontano dal Sole! Questa è la tua opportunità di esplorare gli oceani di gas, gli anelli incantevoli e le misteriose tempeste di Nettuno. Biglietti limitati a soli €1,299. Prenota ora e preparati per un'esperienza senza pari!</h3>
                    <Link to='/nettuno' className='tickpre'>Prenota ora</Link>
                </div>

                <div className='ticketsplu'>
                    <img src={pluto} className='tickimg'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>PLUTONE</h1></div>
                    <h3 className='ticktext'>Scopri il mistero e la bellezza di Plutone, il pianeta nano più lontano dal Sole! Sarai affascinato dalle sue pianure ghiacciate e dalle montagne di ghiaccio. Biglietti limitati a soli €3,999. Prenota ora per un'esperienza straordinaria che ti porterà ai confini del nostro sistema solare!</h3>
                    <Link to='/pluto' className='tickpre'>Prenota ora</Link>
                </div>

                <div className='ticketssat'>
                    <img src={saturn} className='tickimgs'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>SATURNO</h1></div>
                    <h3 className='ticktext'>Ti invitiamo a scoprire la bellezza incantevole di Saturno, il gigante con gli anelli. Ammira gli anelli scintillanti e le lune misteriose mentre ti immergi in un viaggio spaziale senza precedenti. Biglietti limitati a soli €2,999. Prenota ora per un'esperienza spaziale indimenticabile!</h3>
                    <Link to='/saturno' className='tickpre'>Prenota ora</Link>
                </div>

                <div className='ticketsura'>
                    <img src={uranus} className='tickimgu'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>URANO</h1></div>
                    <h3 className='ticktext'>Preparati per un'esperienza cosmica senza precedenti mentre ti avventuri verso Urano, il pianeta dai colori incredibili. Scopri gli anelli deboli e le atmosfere misteriose in questo viaggio spaziale unico. Biglietti limitati a soli €1,499. Prenota ora per un'immersione nell'incanto del nostro sistema solare!</h3>
                    <Link to='/urano' className='tickpre'>Prenota ora</Link>
                </div>

                <div className='ticketsven'>
                    <img src={venus} className='tickimg'></img>
                    <div className='tickttl'>
                    <h1 className='ticktitle'>VENERE</h1></div>
                    <h3 className='ticktext'>Scopri l'intensa bellezza di Venere, il pianeta più vicino al Sole! Attraversa nuvole di acido e osserva tramonti infuocati in questo viaggio unico. Biglietti limitati a soli €2,299. Prenota ora e preparati per un'esperienza ardente nell'esplorazione spaziale!</h3>
                    <Link to='/venere' className='tickpre'>Prenota ora</Link>
                </div>
            </div>

            <div className='tickassist' style={apri}>
             <p className='assisttext'>{assist}<br></br><br></br><br></br></p>
             <li className='listass' onClick={assistPro} >{opt1}</li><br></br>
             <li className='listass'onClick={assistPro2}>{opt2}</li><br></br>
             <li className='listass' onClick={assistPro3}>{opt3}</li><br></br>
             <li className='listass' onClick={assistPro4}>{opt4}</li>
             
            </div>

            <img src={chat} onClick={openassistance} className='tickchat'></img>


            </main>
    )

}

export default Carousel