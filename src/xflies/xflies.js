import './xflies.css';
import React, {useState, useEffect} from 'react';
import alien from './ximg/alien.png';
import alien1 from './ximg/alien1.png';
import alien2 from './ximg/alien2.png';
import alien3 from './ximg/alien3.png';
import aliens from './ximg/aliens.png';
import area51 from './ximg/area-51.png';
import ufo from './ximg/ufo.png';
import hand from './ximg/handshake.png';
import chat from './ximg/chat.png';
import {Link} from 'react-router-dom';




function Xmain(){
const [time, settime]=useState(new Date())

 useEffect(()=>{
        const nowtime = setTimeout(()=>{
                settime(new Date())
        }, 1000)
        return()=> clearInterval(nowtime)
 })

        return(
            <main className='xApp'>

            <header className='xHeader'>
                  <img src={alien} className='xlogo'></img>
                <h1 className='xtitle'>X-FLIES</h1>
                <h3 className='xundertitle'>Your First Alien Space Travel</h3>
                <p className='xtime'>Ora Locale: {time.toLocaleTimeString()}</p>
               <div className='xmenu'>
                <Link to='/xflies' className='xhome'>HomePage</Link>
                <Link to='/xbook' className='xbook'>Biglietti</Link>
                <Link to='/xshop' className='xshop'>X-Shop</Link>
               </div>
            </header>


    
            <div className='flies-welcome'>
         <img src={hand} className='flies-alien'></img>
         <h3 className='flies-text'><h1 className='flies-title'>Benvenuti su XFlies!</h1>
        Saluti dalla nostra galassia all'incrocio delle stelle! Siamo gli alieni di XFlies, pronti a portarvi in avventure spaziali indimenticabili.
        Viaggiate con noi e scoprite le meraviglie degli infiniti confini dell'universo. La nostra missione è rendere accessibili le stelle, perché crediamo che il viaggio spaziale dovrebbe essere un'esperienza straordinaria per tutti.
        Da esploratori dello spazio di lunga data, comprendiamo l'importanza di un servizio affidabile e di qualità. Qui su XFlies, troverete una vasta gamma di destinazioni spaziali, dalle lune lontane ai pianeti misteriosi. Siamo qui per rendere i vostri sogni di viaggio spaziale una realtà.
        Non preoccupatevi se non parlate fluentemente la nostra lingua aliena; il nostro team multilingue è pronto ad assistervi in ogni fase del viaggio. Dalla prenotazione dei biglietti all'addestramento pre-viaggio, siamo qui per voi.
        Esplorate il nostro sito, pianificate il vostro viaggio e iniziate il conto alla rovescia per l'emozione dello spazio. Siamo entusiasti di darvi il benvenuto a bordo di XFlies, dove i sogni si trasformano in realtà galattica.
        Pronti per partire? Siete solo a un passo dall'emozione spaziale!
        <br></br><br></br>
        Con affetto cosmico,<br></br><br></br>
        [Nebulox]
        Team XFlies
         </h3>
        </div>
        <div className='flies-friends'>
         <img src={alien1} className='flies-alien2'></img>
         <h3 className='flies-text2'><h1 className='flies-title'>Messaggio ai nostri amici terrestri</h1>
         Ci è giunta voce della vostra incredibile avventura sulla Terra e del vostro incessante desiderio di esplorare l'universo. Siamo qui per celebrare l'unità intergalattica e il progresso con voi, amici terrestri.
        Nella Galassia di Zoraxia, abbiamo sempre creduto che il potere dell'esplorazione e della scoperta possa portare il progresso e la comprensione. È con questo spirito che abbiamo creato XFlies, una piattaforma dove le vostre ambizioni spaziali possono prendere il volo.
        La nostra missione è quella di avvicinare le culture, di condividere conoscenze e di coltivare l'amicizia attraverso il viaggio. La vostra Terra è un luogo straordinario, e siamo onorati di essere parte del vostro cammino verso le stelle.
        Qui su XFlies, trovate un team dedicato di esploratori spaziali alieni e umani, pronti a lavorare insieme per rendere ogni viaggio spaziale un'esperienza straordinaria. Siamo qui per condividere la nostra conoscenza, per imparare da voi e per contribuire al vostro progresso scientifico e culturale.
        Vi invitiamo a unirvi a noi in questo viaggio straordinario. Insieme, possiamo raggiungere le vette più alte della conoscenza e dell'amicizia interstellare. Siamo ansiosi di condividere le meraviglie dell'universo con voi e di crescere insieme come una sola comunità galattica.
         </h3>
        </div>
        <div className='flies-about'>
         <img src={ufo} className='flies-alien3'></img>
         <h3 className='flies-text3'><h1 className='flies-title'>L'Eccellenza dei Nostri Piloti</h1>
        In XFlies, la professionalità e la competenza dei nostri piloti rappresentano il cuore della nostra missione di offrire viaggi spaziali sicuri ed emozionanti. I nostri piloti sono selezionati attraverso un rigoroso processo di reclutamento che include un'analisi dettagliata delle loro competenze di pilotaggio, delle loro capacità di gestione del rischio e delle loro esperienze nel guidare navi spaziali.
        Ogni pilota è altamente addestrato e ha dedicato anni allo studio e alla pratica del pilotaggio nello spazio interstellare. Hanno affrontato e superato le sfide delle condizioni spaziali uniche, tra cui la mancanza di atmosfera, le forze gravitazionali variabili e la navigazione interstellare. Questa esperienza è ciò che consente loro di condurre le nostre navi spaziali in modo sicuro e competente attraverso il vasto universo.
         </h3>
        </div>
        <div className='flies-license'>
         <img src={alien3} className='flies-alien4'></img>
         <h3 className='flies-text4'><h1 className='flies-title3'>Licenze di Volo su XFlies</h1>
        Il processo di ottenimento delle licenze di volo su XFlies è estremamente rigoroso e accurato. La nostra scuola di volo offre corsi di formazione spaziale approvati a livello intergalattico, che comprendono una serie di fasi di apprendimento essenziali. Questi corsi preparano gli aspiranti astronauti a diventare piloti spaziali qualificati e responsabili.
        Addestramento Fisico: I corsi iniziano con un addestramento fisico completo. Questo include esercizi per adattarsi alle condizioni di microgravità e per gestire lo stress fisico associato al viaggio spaziale. Gli aspiranti piloti imparano anche a indossare e utilizzare le tute spaziali in modo sicuro ed efficiente.
        Formazione Tecnica: La formazione tecnica comprende l'apprendimento delle tecnologie avanzate di navigazione, della manutenzione delle navi spaziali e delle procedure di emergenza. Gli studenti acquisiscono una comprensione approfondita delle complesse operazioni spaziali.
        Simulazioni di Volo: Prima di ottenere una licenza di volo, gli studenti devono completare con successo simulazioni di volo realistiche. Queste simulazioni testano le loro capacità di prendere decisioni rapide e corrette durante situazioni di emergenza e di navigare in modo sicuro in diverse condizioni spaziali.
        Esame di Licenza: Una volta completata la formazione, gli studenti devono superare un esame di licenza di volo rigoroso e approvato a livello intergalattico per dimostrare le loro competenze e conoscenze.
         </h3>
        </div>
        <div className='flies-area'>
         <img src={area51} className='flies-alien5'></img>
         <h3 className='flies-text5'><h1 className='flies-title'>L'Area 51 su XFlies</h1>
        Vogliamo dissipare qualsiasi mistero o speculazione riguardo all'Area 51 su XFlies. La nostra politica è di essere aperti e trasparenti riguardo a tutte le nostre attività. L'Area 51 non è un luogo segreto o oscuro all'interno della nostra operazione. È una struttura dedicata alla ricerca avanzata e allo sviluppo di tecnologie spaziali per migliorare ulteriormente l'esperienza dei nostri viaggi spaziali.
        Non ci sono segreti nascosti o cospirazioni oscure all'interno di XFlies. Siamo impegnati a garantire la sicurezza, il benessere e la chiarezza per tutti i nostri viaggiatori mentre esplorano l'universo con noi.
        In sintesi, XFlies offre un ambiente di formazione professionale e un servizio di viaggio spaziale sicuro e aperto, guidato da piloti altamente addestrati e con licenze di volo rigorosamente ottenute, senza segreti nascosti nell'Area 51. Siamo pronti a darvi il benvenuto a bordo per avventure spaziali eccezionali.
         </h3>
        </div>
        </main>
)
        
}




export default Xmain