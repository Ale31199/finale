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
import xshop from './ximgshop/xshoplogo.png';
import cart from './ximgshop/shopping-cart.png';
import { memo } from 'react';


function Carousel(){
    const [time, settime]=useState(new Date())
    const [quantity, setquantity]=useState(0)
    



    


    const [products, setproducts]=useState([{
        name: 'Atomo',
        price:'€49.99',
        img: atom,
        desc:"Prendi il potere dell'infinitamente piccolo con il nostro Atomo. Questo oggetto unico rappresenta il fondamento della materia stessa. Con la sua forma elegante e dettagliata, l'Atomo è una scelta ideale per gli amanti della scienza e gli appassionati di esplorazione. Porta a casa una parte dell'universo in miniatura oggi stesso!"
    },
    {
        name: 'Braccio Bionico',
        price:'€2999.99',
        img: bionic,
        desc:"Rigenera la tua vita con il nostro braccio bionico all'avanguardia. Progettato per la massima funzionalità e precisione, il nostro braccio bionico offre un'esperienza unica e avanzata per coloro che cercano una soluzione al futuro. Con materiali di alta qualità e un design ergonomico, il braccio bionico ti permetterà di affrontare sfide quotidiane con facilità. Riottiene il controllo e la libertà con il braccio bionico, un passo avanti nell'evoluzione umana."
    },
    {
        name: 'Bitcoin',
        price:'€1557.99',
        img: bitcoin,
        desc:"Il Bitcoin è la pietra miliare della rivoluzione finanziaria digitale. Questa criptovaluta decentralizzata offre libertà e sicurezza senza precedenti nelle transazioni finanziarie. Con il Bitcoin, sei il tuo custode finanziario, senza bisogno di intermediari o banche. Investi nel futuro della moneta con il Bitcoin e sperimenta l'innovazione finanziaria alla sua massima espressione. La tua chiave per un mondo finanziario senza confini e senza controllo centrale."
    },
    {
        name: 'Blaster',
        price:'€10299.99',
        img: blaster,
        desc:"Il Blaster è l'arma futuristica definitiva, progettata per affrontare le sfide più impegnative dell'universo. Con un design elegante e potente, il Blaster è la tua arma di scelta per difenderti da minacce extraterrestri o per sfidare i nemici interstellari. Dotato di tecnologia avanzata e munizioni potenti, il Blaster ti offre il controllo completo della situazione in qualsiasi conflitto. Preparati per un'esperienza di combattimento eccezionale con il Blaster e assicurati di essere pronto per qualsiasi avventura nello spazio profondo."
    },
    {
        name: 'Kit Chimico',
        price:'€17.99',
        img: chemistry,
        desc:"Il Kit Chimico Avanzato è uno strumento indispensabile per gli aspiranti chimici e alchimisti dello spazio. Progettato per sperimentare e creare composti chimici in ambienti extraterrestri, questo kit offre un'ampia gamma di reagenti, strumenti di misurazione e un manuale dettagliato. Sia che tu stia cercando di sintetizzare nuovi materiali o analizzare le proprietà chimiche di pianeti alieni, il Kit Chimico Avanzato è il tuo compagno fidato nello studio delle scienze chimiche nello spazio siderale. Esplora le meraviglie della chimica in mondi sconosciuti con questo strumento essenziale."
    },
    {
        name: 'Computer',
        price:'€699.99',
        img: computer,
        desc:"Il Supercomputer Interstellare rappresenta l'apice dell'elaborazione dati nello spazio. Con una potenza di calcolo ineguagliabile, questo supercomputer è progettato per affrontare compiti computazionali complessi durante le missioni di esplorazione spaziale. Dotato di algoritmi avanzati e capacità di apprendimento automatico, è in grado di analizzare dati provenienti da telescopi, sonde spaziali e strumenti scientifici con una precisione straordinaria. Con il Supercomputer Interstellare, l'elaborazione dei dati nello spazio raggiunge un nuovo livello, consentendo scoperte scientifiche straordinarie e una maggiore comprensione dell'universo."
    },
    {
        name: 'Cpu',
        price:'€199.99',
        img: cpu,
        desc:"L'Unità di Elaborazione Cosmica è il cervello di ogni astronave e stazione spaziale avanzata. Progettata per gestire compiti computazionali complessi e fornire prestazioni affidabili nello spazio profondo, questa CPU è al centro di ogni operazione nello spazio. Con la sua architettura avanzata e la capacità di gestire simultaneamente una vasta gamma di operazioni, l'Unità di Elaborazione Cosmica garantisce che tutte le operazioni spaziali, dalla navigazione alla ricerca scientifica, vengano eseguite in modo efficiente e affidabile. È la spina dorsale della tecnologia spaziale e consente agli astronauti di esplorare l'universo con sicurezza e precisione."
    },
    {
        name: 'Dna',
        price:'€299.99',
        img: dna,
        desc:"L'Elica Cosmica del DNA è una struttura biologica straordinaria e unica, simile all'elica di una navicella spaziale, che contiene le istruzioni genetiche per la vita in tutto l'universo. Questa struttura molecolare incredibile è alla base di ogni forma di vita conosciuta e ha il potenziale per esistere anche su pianeti lontani. L'Elica Cosmica del DNA è responsabile della trasmissione delle caratteristiche ereditarie e della diversità biologica, consentendo la comparsa di nuove specie in ambienti spaziali diversi. È un elemento fondamentale per la comprensione dell'origine e dell'evoluzione della vita nell'intero universo, un vero capolavoro della natura che sfida la nostra comprensione dell'astrobiologia."
    },
    {
        name: 'Energia',
        price:'€29999.99',
        img: energy,
        desc:"La Sfera Energetica Stellare è una sorgente di energia avanzata che sfrutta la fusione nucleare simile a quella del sole per generare potenza in modo continuo e inesauribile. Questa sfera, progettata per l'uso su astronavi, basi spaziali e colonie extraterrestri, rappresenta una pietra miliare nell'approvvigionamento energetico. La fusione nucleare stellare garantisce un'energia pulita e sostenibile, aprendo le porte a un futuro di esplorazione spaziale senza limiti energetici."
    },
    {
        name: 'Auto Volante',
        price:'€59999.99',
        img: flycar,
        desc:"L'Auto Volante Quantum è la quintessenza della mobilità del futuro. Questo veicolo rivoluzionario è equipaggiato con tecnologia quantistica avanzata che gli consente di superare le leggi della fisica tradizionale, permettendo ai passeggeri di attraversare il cielo come se fossero uccelli liberi nel cielo. Con una struttura leggera ma robusta e un sistema di propulsione quantistica a zero emissioni, l'Auto Volante Quantum offre un'esperienza di viaggio senza pari. Non più ingorghi, semafori o limitazioni stradali: con questa auto volante, il cielo è il limite. L'Auto Volante Quantum è la soluzione definitiva per l'efficienza dei trasporti, garantendo un futuro sostenibile e privo di congestioni stradali."
    },
    {
        name: 'Ologramma',
        price:'€7999.99',
        img: hologram,
        desc:"L'Ologramma 3D HoloVision è una straordinaria innovazione nel mondo dell'intrattenimento e della comunicazione. Questo dispositivo utilizza la tecnologia olografica avanzata per proiettare immagini tridimensionali incredibilmente realistiche nello spazio circostante. Che tu stia cercando di comunicare con un amico dall'altra parte del mondo o di immergerti in un'esperienza di gioco mozzafiato, l'Ologramma 3D HoloVision offre una qualità visiva senza precedenti. Il dispositivo è compatto e portatile, consentendo di portare l'arte dell'olografia ovunque tu vada. Con HoloVision, il futuro delle presentazioni, dell'arte digitale e delle comunicazioni interattive è finalmente qui."
    },
    {
        name: 'Jetpack',
        price:'€1599.99',
        img: jetpack,
        desc:"Il Jetpack SkyMaster X9 è la soluzione definitiva per il tuo volo personale. Questo dispositivo compatto e potente ti consente di alzarti in aria e sfrecciare nei cieli con facilità e sicurezza. Con velocità fino a 300 km/h e un'autonomia di volo di fino a 3 ore, il Jetpack SkyMaster X9 ti offre un'esperienza di volo senza pari. È ideale per il trasporto personale e l'esplorazione aerea. Prendi il controllo del tuo destino e vola alto con stile e sicurezza."
    },
    {
        name: 'Ram',
        price:'€299.99',
        img: ram,
        desc:"La Memoria RAM HyperSpeed 32GB è la soluzione perfetta per migliorare le prestazioni del tuo computer. Con una capacità di 32 gigabyte, questa RAM ti offre la potenza di elaborazione di cui hai bisogno per eseguire le applicazioni più esigenti e multitasking senza problemi. L'HyperSpeed garantisce tempi di risposta rapidi e una maggiore efficienza energetica, consentendoti di svolgere le tue attività digitali in modo fluido. Aggiorna la tua RAM con l'HyperSpeed 32GB e goditi un'esperienza informatica superiore."
    },
    {
        name: 'Robot',
        price:'€4999.99',
        img: robot,
        desc:"Il Robot Assistente Multifunzione è la soluzione perfetta per semplificare la tua vita quotidiana. Con le sue capacità avanzate di intelligenza artificiale, questo robot è in grado di svolgere una varietà di compiti, dal pulire la casa all'aiutarti a gestire la tua agenda quotidiana. Il suo design elegante e compatto si adatta a qualsiasi ambiente, e la sua interfaccia utente intuitiva lo rende facile da usare. Grazie alle sue abilità di riconoscimento vocale, puoi interagire con il robot in modo naturale e chiedergli di eseguire molte attività diverse. Investi nel futuro con il Robot Assistente Multifunzione e scopri quanto può migliorare la tua vita."
    },
    {
        name: 'Razzo',
        price:'€1399.99',
        img: rocket,
        desc:"Il Razzo Spaziale Avanzato è la chiave per esplorare le profondità dello spazio. Con la sua tecnologia all'avanguardia, questo razzo offre un viaggio sicuro e confortevole nello spazio profondo. Dotato di motori potenti e sistemi di navigazione sofisticati, il razzo è in grado di raggiungere velocità straordinarie e esplorare nuovi mondi. La sua cabina spaziosa e comoda assicura che gli astronauti abbiano tutto il necessario per missioni di lunga durata. Che tu sia un esploratore spaziale o un appassionato di astronomia, il Razzo Spaziale Avanzato è la scelta ideale per raggiungere le stelle e oltre."
    },
    {
        name: 'Nave Spaziale',
        price:'€1.610999.99',
        img: spaceship,
        desc:"La Nave Spaziale Intergalattica è la sintesi dell'ingegneria avanzata e dell'innovazione tecnologica. Progettata per esplorare l'universo a velocità incredibili, questa nave offre un'esperienza senza precedenti nel viaggio spaziale. Con sistemi di propulsione all'avanguardia, è in grado di superare distanze cosmiche e raggiungere sistemi solari lontani. L'interno della nave è progettato per garantire il massimo comfort agli astronauti durante le lunghe missioni di esplorazione, con alloggi spaziosi e aree per l'addestramento scientifico. La Nave Spaziale Intergalattica rappresenta la frontiera finale dell'esplorazione spaziale e apre la strada a scoperte straordinarie in luoghi mai esplorati prima d'ora."
    },
    {
        name: 'Teletrasporto',
        price:'€6699.99',
        img: teleport,
        desc:"Il Dispositivo di Teletrasporto Avanzato è una rivoluzione nell'ambito dei viaggi. Con questa incredibile invenzione, puoi dire addio ai lunghi e noiosi viaggi e raggiungere istantaneamente qualsiasi luogo desiderato. Il dispositivo funziona dematerializzando la materia a un punto e rimaterializzandola istantaneamente in un altro, consentendoti di attraversare distanze enormi in un batter d'occhio. È una tecnologia sorprendente che cambierà per sempre il modo in cui esploriamo il mondo e ci connettiamo con luoghi lontani. Non c'è più bisogno di voli lunghi o di ore di guida; con il Dispositivo di Teletrasporto Avanzato, il mondo è letteralmente a portata di mano."
    },
    {
        name: 'Telescopio',
        price:'€1499.99',
        img: telescope,
        desc:"Il Telescopio Astronomico Avanzato è uno strumento di osservazione eccezionale progettato per esplorare le profondità insondabili dell'universo. Con una potente tecnologia di ingrandimento e una precisione straordinaria, questo telescopio ti consente di scrutare le stelle, le galassie e i pianeti con una chiarezza straordinaria. Rivela dettagli nascosti, pianeti distanti e nebulose misteriose, aprendo una finestra sulla bellezza e la vastità dell'universo. È lo strumento perfetto per gli astrofili e gli astronomi amatoriali che desiderano esplorare il cosmo e catturare immagini mozzafiato del cielo notturno. Con il Telescopio Astronomico Avanzato, puoi viaggiare attraverso le stelle senza mai lasciare la Terra."
    },
    {
        name: 'Titanio',
        price:'€699.99',
        img: titanium,
        desc:"Il titanio ultraleggero e resistente è un materiale incredibile che combina leggerezza e robustezza in un'unica soluzione. Conosciuto per la sua straordinaria resistenza alla corrosione e alla ruggine, il titanio è spesso utilizzato in applicazioni aerospaziali e mediche. Questo metallo avanzato è perfetto per situazioni in cui la leggerezza è essenziale senza compromettere la durata. Dai componenti degli aerei spaziali alle protesi mediche, il titanio è la scelta ideale per situazioni in cui la forza e la leggerezza sono fondamentali. Con il titanio ultraleggero e resistente, puoi affrontare le sfide più impegnative con fiducia, sapendo di avere un materiale affidabile dalla tua parte."
    },
    {
        name: 'Batteria',
        price:'€999.99',
        img: transformer,
        desc:"La batteria ad alta capacità e lunga durata è una soluzione innovativa per alimentare dispositivi elettronici in modo affidabile e prolungato. Questa batteria avanzata offre una capacità eccezionale per garantire che i tuoi dispositivi rimangano operativi più a lungo, consentendoti di godere di un utilizzo continuo senza interruzioni. Che tu stia lavorando, giocando o semplicemente esplorando il mondo digitale, puoi contare su questa batteria per mantenere la carica per un periodo straordinariamente lungo. Inoltre, la sua durata eccezionale significa meno preoccupazioni per la ricarica frequente e più tempo per concentrarti su ciò che conta di più per te. Con la batteria ad alta capacità e lunga durata, sei pronto per affrontare le tue giornate con energia e sicurezza."
    },
])



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
                <Link to='/xshop' className='xshop'>X-Shop</Link>
               </div>

            </header>
           
            
        <div className='background-shop'>
            <div className='shop-grid'>

            <div className='welcome-shop'><img src={xshop} className='shoplogo'></img></div>

        {products.map((item, index) => (
          <div className='item-box' key={index}>
            <img src={item.img} className='item-img' />
            <p className='item-title'>{item.name}</p>
            <p className='item-price'>{item.price}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>{item.desc}</p>
            </div>
            <select className='item-quantity'>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button className='item-cart'  >Aggiungi al carrello</button>
          </div>
        ))}
      </div>
      </div>

      <div className='cart-box'>
                <img src={cart} className='cart'></img>
                <p className='cart-quantity'>{quantity}</p>
                </div>

            </main>
    )

}

export default Carousel

