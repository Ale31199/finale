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
import visa from './ximg/visa.png';
import master from './ximg/card.png';
import american from './ximg/american-express.png';
import paypal from './ximg/paypal.png';


function Carousel(){
    const [time, settime]=useState(new Date())
    const [quantity, setQuantity]=useState(0)
    const [addvalue, setAddvalue]=useState(1)
    const [added, setAdded]=useState('')
    const [added2, setAdded2]=useState('')
    const [added3, setAdded3]=useState('')
    const [added4, setAdded4]=useState('')
    const [added5, setAdded5]=useState('')
    const [added6, setAdded6]=useState('')
    const [added7, setAdded7]=useState('')
    const [added8, setAdded8]=useState('')
    const [added9, setAdded9]=useState('')
    const [added10, setAdded10]=useState('')
    const [added11, setAdded11]=useState('')
    const [added12, setAdded12]=useState('')
    const [added13, setAdded13]=useState('')
    const [added14, setAdded14]=useState('')
    const [added15, setAdded15]=useState('')
    const [added16, setAdded16]=useState('')
    const [added17, setAdded17]=useState('')
    const [added18, setAdded18]=useState('')
    const [added19, setAdded19]=useState('')
    const [added20, setAdded20]=useState('')
    
    const [carton, setcarton]=useState(false)
    const [namecart, setnamecart]=useState('Nessun prodotto nel carrello...')
    const [imgcart, setimgcart]=useState(alien)
    const [pricecart, setpricecart]=useState('€ --')

     /* const  prod_name=[ 'Atomo', 'Braccio Bionico', 'Bitcoin', 'Blaster', 'Kit Chimico', 'Computer', 'CPU', 'DNA', 'Energia', 'Auto Volante', 'Ologramma', 'Jetpack', 'RAM', 'Robot', 'Razzo', 'Nave Spaziale', 
        'Teletrasporto', 'Telescopio', 'Titanio', 'Batteria'];*/
   
      const  prod_price=[49.99, 2999.99, 1557.99, 499.99, 29.99, 749.99, 249.99, 49.99, 149.99, 12999.99, 449.99, 3999.99, 189.99, 2499.99, 459.99, 649999.99,
       1499999.99, 169.99, 19.99, 79.99];
   
   /*   const  prod_img=[atom, bionic, bitcoin, blaster, chemistry, computer, cpu, dna, energy, flycar, hologram, jetpack, ram, robot, rocket, spaceship, teleport, telescope, titanium, transformer]*/

    const [cartt, setCart]=useState([{
        name: 'Atomo',
       price:prod_price[0], 
        img:atom,
    },
    {
        name: 'Braccio Bionico',
        price:prod_price[1], 
        img: bionic,
    },
    {
        name: 'Bitcoin', 
        price:prod_price[2],
        img: bitcoin, 
    },
    {
        name:'Blaster',
        price:prod_price[3],
        img: blaster,
    },
    {
        name:  'Kit Chimico', 
        price:prod_price[4], 
        img: chemistry, 
    },
    {
        name:'Computer', 
        price: prod_price[5], 
        img: computer, 
    },
    {
        name:'CPU',
        price: prod_price[6],
        img: cpu, 
    },
    {
        name: 'DNA', 
        price: prod_price[7], 
        img:dna, 
    },
    {
        name:'Energia', 
        price: prod_price[8], 
        img: energy, 
    },
    {
        name:  'Auto Volante',
        price:prod_price[9], 
        img: flycar, 
    },
    {
        name:  'Ologramma',
        price:prod_price[10], 
        img:hologram, 
    },
    {
        name: 'Jetpack',
        price:prod_price[11],
        img: jetpack, 
    },
    {
        name: 'RAM',
        price:prod_price[12],
        img: ram, 
    },
    {
        name:  'Robot',
        price:prod_price[13],
        img: robot, 
    },
    {
        name: 'Razzo',
        price: prod_price[14],
        img: rocket, 
    },
    {
        name: 'Nave Spaziale', 
        price:prod_price[15],
        img:spaceship, 
    },
    {
        name:'Teletrasporto',
        price:prod_price[16], 
        img:teleport, 
    },
    {
        name:  'Telescopio',
        price: prod_price[17], 
        img:telescope,
    },
    {
        name:  'Titanio',
        price: prod_price[18], 
        img: titanium, 
    },
    {
        name: 'Batteria',
        price: prod_price[19],
        img: transformer
    },

])



    const CartQt=()=>{
        setQuantity(quantity + addvalue)
        setAdded('Added to the cart')
        setTimeout(()=>{
            setAdded('')
        }, 3000)
    }
    const CartQt2=()=>{
        setQuantity(quantity + addvalue)
        setAdded2('Added to the cart')
        setTimeout(()=>{
            setAdded2('')
        }, 3000)
    }
    const CartQt3=()=>{
        setQuantity(quantity + addvalue)
        setAdded3('Added to the cart')
        setTimeout(()=>{
            setAdded3('')
        }, 3000)
    }
    const CartQt4=()=>{
        setQuantity(quantity + addvalue)
        setAdded4('Added to the cart')
        setTimeout(()=>{
            setAdded4('')
        }, 3000)
    }
    const CartQt5=()=>{
        setQuantity(quantity + addvalue)
        setAdded5('Added to the cart')
        setTimeout(()=>{
            setAdded5('')
        }, 3000)
    }
    const CartQt6=()=>{
        setQuantity(quantity + addvalue)
        setAdded6('Added to the cart')
        setTimeout(()=>{
            setAdded6('')
        }, 3000)
    }
    const CartQt7=()=>{
        setQuantity(quantity + addvalue)
        setAdded7('Added to the cart')
        setTimeout(()=>{
            setAdded7('')
        }, 3000)
    }
    const CartQt8=()=>{
        setQuantity(quantity + addvalue)
        setAdded8('Added to the cart')
        setTimeout(()=>{
            setAdded8('')
        }, 3000)
    }
    const CartQt9=()=>{
        setQuantity(quantity + addvalue)
        setAdded9('Added to the cart')
        setTimeout(()=>{
            setAdded9('')
        }, 3000)
    }
    const CartQt10=()=>{
        setQuantity(quantity + addvalue)
        setAdded10('Added to the cart')
        setTimeout(()=>{
            setAdded10('')
        }, 3000)
    }
    const CartQt11=()=>{
        setQuantity(quantity + addvalue)
        setAdded11('Added to the cart')
        setTimeout(()=>{
            setAdded11('')
        }, 3000)
    }
    const CartQt12=()=>{
        setQuantity(quantity + addvalue)
        setAdded12('Added to the cart')
        setTimeout(()=>{
            setAdded12('')
        }, 3000)
    }
    const CartQt13=()=>{
        setQuantity(quantity + addvalue)
        setAdded13('Added to the cart')
        setTimeout(()=>{
            setAdded13('')
        }, 3000)
    }
    const CartQt14=()=>{
        setQuantity(quantity + addvalue)
        setAdded14('Added to the cart')
        setTimeout(()=>{
            setAdded14('')
        }, 3000)
    }
    const CartQt15=()=>{
        setQuantity(quantity + addvalue)
        setAdded15('Added to the cart')
        setTimeout(()=>{
            setAdded15('')
        }, 3000)
    }
    const CartQt16=()=>{
        setQuantity(quantity + addvalue)
        setAdded16('Added to the cart')
        setTimeout(()=>{
            setAdded16('')
        }, 3000)
    }
    const CartQt17=()=>{
        setQuantity(quantity + addvalue)
        setAdded17('Added to the cart')
        setTimeout(()=>{
            setAdded17('')
        }, 3000)
    }
    const CartQt18=()=>{
        setQuantity(quantity + addvalue)
        setAdded18('Added to the cart')
        setTimeout(()=>{
            setAdded18('')
        }, 3000)
    }
    const CartQt19=()=>{
        setQuantity(quantity + addvalue)
        setAdded19('Added to the cart')
        setTimeout(()=>{
            setAdded19('')
        }, 3000)
    }
    const CartQt20=()=>{
        setQuantity(quantity + addvalue)
        setAdded20('Added to the cart')
        setTimeout(()=>{
            setAdded20('')
        }, 3000)
    }
    

    useEffect(()=>{
      const newtime=setInterval(()=> settime(new Date()))
        return()=> clearInterval(newtime)
    })



    const CtOn=()=>{
        if (carton){
            setcarton(false)
        } else {
            setcarton(true)
        }
    }

    const cartPage = carton ?{
   visibility: 'visible'
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
           
            
        <div className='background-shop'>
            <div className='shop-grid'>

            <div className='welcome-shop'><img src={xshop} className='shoplogo'></img></div>

        
          <div className='item-box'>
            <img src={atom} className='item-img' />
            <p className='item-title'>Atomo</p>
            <p className='item-price'>€{prod_price[0]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Prendi il potere dell'infinitamente piccolo con il nostro Atomo. Questo oggetto unico rappresenta il fondamento della materia stessa. Con la sua forma elegante e dettagliata, l'Atomo è una scelta ideale per gli amanti della scienza e gli appassionati di esplorazione. Porta a casa una parte dell'universo in miniatura oggi stesso!</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added}</p>
          </div>

          <div className='item-box'>
            <img src={bionic} className='item-img' />
            <p className='item-title'>Braccio Bionico</p>
            <p className='item-price'>€{prod_price[1]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Rigenera la tua vita con il nostro braccio bionico all'avanguardia. Progettato per la massima funzionalità e precisione, il nostro braccio bionico offre un'esperienza unica e avanzata per coloro che cercano una soluzione al futuro. Con materiali di alta qualità e un design ergonomico, il braccio bionico ti permetterà di affrontare sfide quotidiane con facilità. Riottiene il controllo e la libertà con il braccio bionico, un passo avanti nell'evoluzione umana.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt2} value='Aggiungi al carrello'></input>
            <p>{added2}</p>
          </div>

          <div className='item-box'>
            <img src={bitcoin} className='item-img' />
            <p className='item-title'>Bitcoin</p>
            <p className='item-price'>€{prod_price[2]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Bitcoin è la pietra miliare della rivoluzione finanziaria digitale. Questa criptovaluta decentralizzata offre libertà e sicurezza senza precedenti nelle transazioni finanziarie. Con il Bitcoin, sei il tuo custode finanziario, senza bisogno di intermediari o banche. Investi nel futuro della moneta con il Bitcoin e sperimenta l'innovazione finanziaria alla sua massima espressione. La tua chiave per un mondo finanziario senza confini e senza controllo centrale.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt3} value='Aggiungi al carrello'></input>
            <p>{added3}</p>
          </div>

          <div className='item-box'>
            <img src={blaster} className='item-img' />
            <p className='item-title'>Blaster</p>
            <p className='item-price'>€{prod_price[3]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Blaster è l'arma futuristica definitiva, progettata per affrontare le sfide più impegnative dell'universo. Con un design elegante e potente, il Blaster è la tua arma di scelta per difenderti da minacce extraterrestri o per sfidare i nemici interstellari. Dotato di tecnologia avanzata e munizioni potenti, il Blaster ti offre il controllo completo della situazione in qualsiasi conflitto. Preparati per un'esperienza di combattimento eccezionale con il Blaster e assicurati di essere pronto per qualsiasi avventura nello spazio profondo.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt4} value='Aggiungi al carrello'></input>
            <p>{added4}</p>
          </div>

          <div className='item-box'>
            <img src={chemistry} className='item-img' />
            <p className='item-title'>Kit Chimico</p>
            <p className='item-price'>€{prod_price[4]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Kit Chimico Avanzato è uno strumento indispensabile per gli aspiranti chimici e alchimisti dello spazio. Progettato per sperimentare e creare composti chimici in ambienti extraterrestri, questo kit offre un'ampia gamma di reagenti, strumenti di misurazione e un manuale dettagliato. Sia che tu stia cercando di sintetizzare nuovi materiali o analizzare le proprietà chimiche di pianeti alieni, il Kit Chimico Avanzato è il tuo compagno fidato nello studio delle scienze chimiche nello spazio siderale. Esplora le meraviglie della chimica in mondi sconosciuti con questo strumento essenziale.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt5} value='Aggiungi al carrello'></input>
            <p>{added5}</p>
          </div>

          <div className='item-box'>
            <img src={computer} className='item-img' />
            <p className='item-title'>Computer</p>
            <p className='item-price'>€{prod_price[5]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Supercomputer Interstellare rappresenta l'apice dell'elaborazione dati nello spazio. Con una potenza di calcolo ineguagliabile, questo supercomputer è progettato per affrontare compiti computazionali complessi durante le missioni di esplorazione spaziale. Dotato di algoritmi avanzati e capacità di apprendimento automatico, è in grado di analizzare dati provenienti da telescopi, sonde spaziali e strumenti scientifici con una precisione straordinaria. Con il Supercomputer Interstellare, l'elaborazione dei dati nello spazio raggiunge un nuovo livello, consentendo scoperte scientifiche straordinarie e una maggiore comprensione dell'universo.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt6} value='Aggiungi al carrello'></input>
            <p>{added6}</p>
          </div>

          <div className='item-box'>
            <img src={cpu} className='item-img' />
            <p className='item-title'>CPU</p>
            <p className='item-price'>€{prod_price[6]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Unità di Elaborazione Cosmica è il cervello di ogni astronave e stazione spaziale avanzata. Progettata per gestire compiti computazionali complessi e fornire prestazioni affidabili nello spazio profondo, questa CPU è al centro di ogni operazione nello spazio. Con la sua architettura avanzata e la capacità di gestire simultaneamente una vasta gamma di operazioni, l'Unità di Elaborazione Cosmica garantisce che tutte le operazioni spaziali, dalla navigazione alla ricerca scientifica, vengano eseguite in modo efficiente e affidabile. È la spina dorsale della tecnologia spaziale e consente agli astronauti di esplorare l'universo con sicurezza e precisione.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt7} value='Aggiungi al carrello'></input>
            <p>{added7}</p>
          </div>

          <div className='item-box'>
            <img src={dna} className='item-img' />
            <p className='item-title'>DNA</p>
            <p className='item-price'>€{prod_price[7]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Elica Cosmica del DNA è una struttura biologica straordinaria e unica, simile all'elica di una navicella spaziale, che contiene le istruzioni genetiche per la vita in tutto l'universo. Questa struttura molecolare incredibile è alla base di ogni forma di vita conosciuta e ha il potenziale per esistere anche su pianeti lontani. L'Elica Cosmica del DNA è responsabile della trasmissione delle caratteristiche ereditarie e della diversità biologica, consentendo la comparsa di nuove specie in ambienti spaziali diversi. È un elemento fondamentale per la comprensione dell'origine e dell'evoluzione della vita nell'intero universo, un vero capolavoro della natura che sfida la nostra comprensione dell'astrobiologia.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt8} value='Aggiungi al carrello'></input>
            <p>{added8}</p>
          </div>

          <div className='item-box'>
            <img src={energy} className='item-img' />
            <p className='item-title'>Energia</p>
            <p className='item-price'>€{prod_price[8]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La Sfera Energetica Stellare è una sorgente di energia avanzata che sfrutta la fusione nucleare simile a quella del sole per generare potenza in modo continuo e inesauribile. Questa sfera, progettata per l'uso su astronavi, basi spaziali e colonie extraterrestri, rappresenta una pietra miliare nell'approvvigionamento energetico. La fusione nucleare stellare garantisce un'energia pulita e sostenibile, aprendo le porte a un futuro di esplorazione spaziale senza limiti energetici.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt9} value='Aggiungi al carrello'></input>
            <p>{added9}</p>
          </div>

          <div className='item-box'>
            <img src={flycar} className='item-img' />
            <p className='item-title'>Auto Volante</p>
            <p className='item-price'>€{prod_price[9]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Auto Volante Quantum è la quintessenza della mobilità del futuro. Questo veicolo rivoluzionario è equipaggiato con tecnologia quantistica avanzata che gli consente di superare le leggi della fisica tradizionale, permettendo ai passeggeri di attraversare il cielo come se fossero uccelli liberi nel cielo. Con una struttura leggera ma robusta e un sistema di propulsione quantistica a zero emissioni, l'Auto Volante Quantum offre un'esperienza di viaggio senza pari. Non più ingorghi, semafori o limitazioni stradali: con questa auto volante, il cielo è il limite. L'Auto Volante Quantum è la soluzione definitiva per l'efficienza dei trasporti, garantendo un futuro sostenibile e privo di congestioni stradali.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt10} value='Aggiungi al carrello'></input>
            <p>{added10}</p>
          </div>

          <div className='item-box'>
            <img src={hologram} className='item-img' />
            <p className='item-title'>Ologramma</p>
            <p className='item-price'>€{prod_price[10]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Ologramma 3D HoloVision è una straordinaria innovazione nel mondo dell'intrattenimento e della comunicazione. Questo dispositivo utilizza la tecnologia olografica avanzata per proiettare immagini tridimensionali incredibilmente realistiche nello spazio circostante. Che tu stia cercando di comunicare con un amico dall'altra parte del mondo o di immergerti in un'esperienza di gioco mozzafiato, l'Ologramma 3D HoloVision offre una qualità visiva senza precedenti. Il dispositivo è compatto e portatile, consentendo di portare l'arte dell'olografia ovunque tu vada. Con HoloVision, il futuro delle presentazioni, dell'arte digitale e delle comunicazioni interattive è finalmente qui.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt11} value='Aggiungi al carrello'></input>
            <p>{added11}</p>
          </div>

          <div className='item-box'>
            <img src={jetpack} className='item-img' />
            <p className='item-title'>Jetpack</p>
            <p className='item-price'>€{prod_price[11]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Jetpack SkyMaster X9 è la soluzione definitiva per il tuo volo personale. Questo dispositivo compatto e potente ti consente di alzarti in aria e sfrecciare nei cieli con facilità e sicurezza. Con velocità fino a 300 km/h e un'autonomia di volo di fino a 3 ore, il Jetpack SkyMaster X9 ti offre un'esperienza di volo senza pari. È ideale per il trasporto personale e l'esplorazione aerea. Prendi il controllo del tuo destino e vola alto con stile e sicurezza.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt12} value='Aggiungi al carrello'></input>
            <p>{added12}</p>
          </div>

          <div className='item-box'>
            <img src={ram} className='item-img' />
            <p className='item-title'>RAM</p>
            <p className='item-price'>€{prod_price[12]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La Memoria RAM HyperSpeed 32GB è la soluzione perfetta per migliorare le prestazioni del tuo computer. Con una capacità di 32 gigabyte, questa RAM ti offre la potenza di elaborazione di cui hai bisogno per eseguire le applicazioni più esigenti e multitasking senza problemi. L'HyperSpeed garantisce tempi di risposta rapidi e una maggiore efficienza energetica, consentendoti di svolgere le tue attività digitali in modo fluido. Aggiorna la tua RAM con l'HyperSpeed 32GB e goditi un'esperienza informatica superiore.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt13} value='Aggiungi al carrello'></input>
            <p>{added13}</p>
          </div>

          <div className='item-box'>
            <img src={robot} className='item-img' />
            <p className='item-title'>Robot</p>
            <p className='item-price'>€{prod_price[13]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Robot Assistente Multifunzione è la soluzione perfetta per semplificare la tua vita quotidiana. Con le sue capacità avanzate di intelligenza artificiale, questo robot è in grado di svolgere una varietà di compiti, dal pulire la casa all'aiutarti a gestire la tua agenda quotidiana. Il suo design elegante e compatto si adatta a qualsiasi ambiente, e la sua interfaccia utente intuitiva lo rende facile da usare. Grazie alle sue abilità di riconoscimento vocale, puoi interagire con il robot in modo naturale e chiedergli di eseguire molte attività diverse. Investi nel futuro con il Robot Assistente Multifunzione e scopri quanto può migliorare la tua vita.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt14} value='Aggiungi al carrello'></input>
            <p>{added14}</p>
          </div>

          <div className='item-box'>
            <img src={rocket} className='item-img' />
            <p className='item-title'>Razzo</p>
            <p className='item-price'>€{prod_price[14]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Razzo Spaziale Avanzato è la chiave per esplorare le profondità dello spazio. Con la sua tecnologia all'avanguardia, questo razzo offre un viaggio sicuro e confortevole nello spazio profondo. Dotato di motori potenti e sistemi di navigazione sofisticati, il razzo è in grado di raggiungere velocità straordinarie e esplorare nuovi mondi. La sua cabina spaziosa e comoda assicura che gli astronauti abbiano tutto il necessario per missioni di lunga durata. Che tu sia un esploratore spaziale o un appassionato di astronomia, il Razzo Spaziale Avanzato è la scelta ideale per raggiungere le stelle e oltre.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt15} value='Aggiungi al carrello'></input>
            <p>{added15}</p>
          </div>

          <div className='item-box'>
            <img src={spaceship} className='item-img' />
            <p className='item-title'>Nave Spaziale</p>
            <p className='item-price'>€{prod_price[15]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La Nave Spaziale Intergalattica è la sintesi dell'ingegneria avanzata e dell'innovazione tecnologica. Progettata per esplorare l'universo a velocità incredibili, questa nave offre un'esperienza senza precedenti nel viaggio spaziale. Con sistemi di propulsione all'avanguardia, è in grado di superare distanze cosmiche e raggiungere sistemi solari lontani. L'interno della nave è progettato per garantire il massimo comfort agli astronauti durante le lunghe missioni di esplorazione, con alloggi spaziosi e aree per l'addestramento scientifico. La Nave Spaziale Intergalattica rappresenta la frontiera finale dell'esplorazione spaziale e apre la strada a scoperte straordinarie in luoghi mai esplorati prima d'ora.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt16} value='Aggiungi al carrello'></input>
            <p>{added16}</p>
          </div>

          <div className='item-box'>
            <img src={teleport} className='item-img' />
            <p className='item-title'>Teletrasporto</p>
            <p className='item-price'>€{prod_price[16]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Dispositivo di Teletrasporto Avanzato è una rivoluzione nell'ambito dei viaggi. Con questa incredibile invenzione, puoi dire addio ai lunghi e noiosi viaggi e raggiungere istantaneamente qualsiasi luogo desiderato. Il dispositivo funziona dematerializzando la materia a un punto e rimaterializzandola istantaneamente in un altro, consentendoti di attraversare distanze enormi in un batter d'occhio. È una tecnologia sorprendente che cambierà per sempre il modo in cui esploriamo il mondo e ci connettiamo con luoghi lontani. Non c'è più bisogno di voli lunghi o di ore di guida; con il Dispositivo di Teletrasporto Avanzato, il mondo è letteralmente a portata di mano.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt17} value='Aggiungi al carrello'></input>
            <p>{added17}</p>
          </div>

          <div className='item-box'>
            <img src={telescope} className='item-img' />
            <p className='item-title'>Telescopio</p>
            <p className='item-price'>€{prod_price[17]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Telescopio Astronomico Avanzato è uno strumento di osservazione eccezionale progettato per esplorare le profondità insondabili dell'universo. Con una potente tecnologia di ingrandimento e una precisione straordinaria, questo telescopio ti consente di scrutare le stelle, le galassie e i pianeti con una chiarezza straordinaria. Rivela dettagli nascosti, pianeti distanti e nebulose misteriose, aprendo una finestra sulla bellezza e la vastità dell'universo. È lo strumento perfetto per gli astrofili e gli astronomi amatoriali che desiderano esplorare il cosmo e catturare immagini mozzafiato del cielo notturno. Con il Telescopio Astronomico Avanzato, puoi viaggiare attraverso le stelle senza mai lasciare la Terra.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt18} value='Aggiungi al carrello'></input>
            <p>{added18}</p>
          </div>

          <div className='item-box'>
            <img src={titanium} className='item-img' />
            <p className='item-title'>Titanio</p>
            <p className='item-price'>€{prod_price[18]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il titanio ultraleggero e resistente è un materiale incredibile che combina leggerezza e robustezza in un'unica soluzione. Conosciuto per la sua straordinaria resistenza alla corrosione e alla ruggine, il titanio è spesso utilizzato in applicazioni aerospaziali e mediche. Questo metallo avanzato è perfetto per situazioni in cui la leggerezza è essenziale senza compromettere la durata. Dai componenti degli aerei spaziali alle protesi mediche, il titanio è la scelta ideale per situazioni in cui la forza e la leggerezza sono fondamentali. Con il titanio ultraleggero e resistente, puoi affrontare le sfide più impegnative con fiducia, sapendo di avere un materiale affidabile dalla tua parte.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt19} value='Aggiungi al carrello'></input>
            <p>{added19}</p>
          </div>

          <div className='item-box'>
            <img src={transformer} className='item-img' />
            <p className='item-title'>Batteria</p>
            <p className='item-price'>€{prod_price[19]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La batteria ad alta capacità e lunga durata è una soluzione innovativa per alimentare dispositivi elettronici in modo affidabile e prolungato. Questa batteria avanzata offre una capacità eccezionale per garantire che i tuoi dispositivi rimangano operativi più a lungo, consentendoti di godere di un utilizzo continuo senza interruzioni. Che tu stia lavorando, giocando o semplicemente esplorando il mondo digitale, puoi contare su questa batteria per mantenere la carica per un periodo straordinariamente lungo. Inoltre, la sua durata eccezionale significa meno preoccupazioni per la ricarica frequente e più tempo per concentrarti su ciò che conta di più per te. Con la batteria ad alta capacità e lunga durata, sei pronto per affrontare le tue giornate con energia e sicurezza.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt20} value='Aggiungi al carrello'></input>
            <p>{added20}</p>
          </div>

        
      </div>
      </div>

      <div className='cart-box'>

                <div className='cart-page' style={cartPage}>
                      
             {cartt.map((item, index)=>(
                <div className='cart-page-item-box' key={index}>
                <img src={item.img} className='cart-page-img'></img>
                <h2 className='cart-page-name'>{item.name}</h2>
                <h1 className='cart-page-price'>{item.price}</h1>
                
                <p className='cart-page-aumenta'>Aumenta la quantità:</p>
                <select className='cart-page-qt'>
                    <option className='cart-page-qt-num'>1</option>
                    <option className='cart-page-qt-num'>2</option>
                    <option className='cart-page-qt-num'>3</option>
                    <option className='cart-page-qt-num'>4</option>
                    <option className='cart-page-qt-num'>5</option>
                </select>

                <button className='cart-page-remove'>Rimuovi dal carrello</button>
                </div>
             ))}
                
                <div className='cart-page-pay-box'>
                    <h2 className='cart-page-prod'>Prodotti nel carrello ({quantity})</h2>

                    <p className='pay-method-choose' >Metodo di pagamento:</p>
                    <div className='cart-page-pay-grid'>
                    
                        <div className='pay-method'>
                            <img src={visa} className='pay-img'></img>
                            <p className='pay-name'>Visa</p>
                        </div>
                        <div className='pay-method'>
                            <img src={master} className='pay-img'></img>
                            <p className='pay-name'>MasterCard</p>
                        </div>
                        <div className='pay-method'>
                            <img src={american} className='pay-img'></img>
                            <p className='pay-name'>American Express</p>
                        </div>
                        <div className='pay-method'>
                            <img src={paypal} className='pay-img'></img>
                            <p className='pay-name'>PayPal</p>
                        </div>
                    </div>

                    <p className='pay-total'>Totale: €</p>

                    <button className='pay-button'>Conferma & Acquista</button>
                </div>



                </div>




                <img src={cart} className='cart' onClick={CtOn}></img>
                <p className='cart-quantity'onClick={CtOn}>{quantity}</p>

                
      </div>

            </main>
    )

}

export default Carousel

