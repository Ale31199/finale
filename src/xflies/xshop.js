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
    const [disable, setdisable]=useState(false)
    const [disable2, setdisable2]=useState(false)
    const [disable3, setdisable3]=useState(false)
    const [disable4, setdisable4]=useState(false)
    const [disable5, setdisable5]=useState(false)
    const [disable6, setdisable6]=useState(false)
    const [disable7, setdisable7]=useState(false)
    const [disable8, setdisable8]=useState(false)
    const [disable9, setdisable9]=useState(false)
    const [disable10, setdisable10]=useState(false)
    const [disable11, setdisable11]=useState(false)
    const [disable12, setdisable12]=useState(false)
    const [disable13, setdisable13]=useState(false)
    const [disable14, setdisable14]=useState(false)
    const [disable15, setdisable15]=useState(false)
    const [disable16, setdisable16]=useState(false)
    const [disable17, setdisable17]=useState(false)
    const [disable18, setdisable18]=useState(false)
    const [disable19, setdisable19]=useState(false)
    const [disable20, setdisable20]=useState(false)
    const [carton, setcarton]=useState(false)
    const [namecart, setnamecart]=useState('Nessun prodotto nel carrello...')
    const [imgcart, setimgcart]=useState(alien)
    const [priceca, setpriceca]=useState('--')
   


    const [onthanks, setonthanks]=useState(false)



    const thanks = onthanks ? {
    visibility:'visible'
    }:{};

    const [visaa, setvisa]=useState(false)
    const [pay, setpay]=useState(false)
    const [ame, setame]=useState(false)
    const [mas, setmas]=useState(false)
    const choosepay=()=>{
        if(visaa){
            setvisa(false)
        } else{
            setvisa(true)
            setpay(false)
            setame(false)
            setmas(false)
        }
    }
    const choosepay2=()=>{
        if(pay){
            setpay(false)
        } else{
            setvisa(false)
            setpay(true)
            setame(false)
            setmas(false)
        }
    }
    const choosepay3=()=>{
        if(ame){
            setame(false)
        } else{
            setvisa(false)
            setpay(false)
            setame(true)
            setmas(false)
        }
    }
    const choosepay4=()=>{
        if(mas){
            setvisa(false)
        } else{
            setvisa(false)
            setpay(false)
            setame(false)
            setmas(true)
        }
    }

    const pay1 = visaa ?{
        backgroundColor: 'black',
        color: 'rgb(0, 255, 191)'
    }:{}
    const pay2 = pay ?{
        backgroundColor: 'black',
        color: 'rgb(0, 255, 191)'
    }:{}
    const pay3 = ame ?{
        backgroundColor: 'black',
        color: 'rgb(0, 255, 191)'
    }:{}
    const pay4 = mas ?{
        backgroundColor: 'black',
        color: 'rgb(0, 255, 191)'
    }:{}





    const [pricecart, setpricecart]=useState(0)
    
      const  prod_price=[49.99, 2999.99, 1557.99, 499.99, 29.99, 749.99, 249.99, 49.99, 149.99, 12999.99, 449.99, 3999.99, 189.99, 2499.99, 459.99, 649999.99,
       1499999.99, 169.99, 19.99, 79.99];
   
    const [cartt, setCart]=useState([])



    const removeItem=(index)=>{
        if(CartQt() === setdisable(true)){
            setdisable(false)
            setAdded('')
        } 
        if(CartQt2() === setdisable2(true)){
            setdisable2(false)
            setAdded2('')
        } 
        if(CartQt3() === setdisable3(true)){
            setdisable3(false)
            setAdded3('')
        } 
        if(CartQt4() === setdisable4(true)){
            setdisable4(false)
            setAdded4('')
        } 
        if(CartQt5() === setdisable5(true)){
            setdisable5(false)
            setAdded5('')
        } 
        if(CartQt6() === setdisable6(true)){
            setdisable6(false)
            setAdded6('')
        } 
        if(CartQt7() === setdisable7(true)){
            setdisable7(false)
            setAdded7('')
        } 
        if(CartQt8() === setdisable8(true)){
            setdisable8(false)
            setAdded8('')
        } 
        if(CartQt9() === setdisable9(true)){
            setdisable9(false)
            setAdded9('')
        } 
        if(CartQt10() === setdisable10(true)){
            setdisable10(false)
            setAdded10('')
        } 
        if(CartQt11() === setdisable11(true)){
            setdisable11(false)
            setAdded11('')
        } 
        if(CartQt12() === setdisable12(true)){
            setdisable12(false)
            setAdded12('')
        } 
        if(CartQt13() === setdisable13(true)){
            setdisable13(false)
            setAdded13('')
        } 
        if(CartQt14() === setdisable14(true)){
            setdisable14(false)
            setAdded14('')
        } 
        if(CartQt15() === setdisable15(true)){
            setdisable15(false)
            setAdded15('')
        } 
        if(CartQt16() === setdisable16(true)){
            setdisable16(false)
            setAdded16('')
        } 
        if(CartQt17() === setdisable17(true)){
            setdisable17(false)
            setAdded17('')
        } 
        if(CartQt18() === setdisable18(true)){
            setdisable18(false)
            setAdded18('')
        } 
        if(CartQt19() === setdisable19(true)){
            setdisable19(false)
            setAdded19('')
        } 
        if(CartQt20() === setdisable20(true)){
            setdisable20(false)
            setAdded20('')
        }
       
        const remove = cartt.filter((item, i)=> i !== index)
        
        const prezzo = prod_price[index]
        const newTotalPrice = pricecart - prezzo
        setpricecart(Math.floor(newTotalPrice))
        setCart(remove)
        setQuantity(quantity - addvalue)
    }

   
        
   

    

        /*
        sistemare e concludere progetto spotify
        rimettere la storia come era prima in Pixel Nightmare
        Mettere il sito online!
        */



    const buy=()=>{
        if(CartQt() === setdisable(true)){
            setdisable(false)
            setAdded('')
        } 
        if(CartQt2() === setdisable2(true)){
            setdisable2(false)
            setAdded2('')
        } 
        if(CartQt3() === setdisable3(true)){
            setdisable3(false)
            setAdded3('')
        } 
        if(CartQt4() === setdisable4(true)){
            setdisable4(false)
            setAdded4('')
        } 
        if(CartQt5() === setdisable5(true)){
            setdisable5(false)
            setAdded5('')
        } 
        if(CartQt6() === setdisable6(true)){
            setdisable6(false)
            setAdded6('')
        } 
        if(CartQt7() === setdisable7(true)){
            setdisable7(false)
            setAdded7('')
        } 
        if(CartQt8() === setdisable8(true)){
            setdisable8(false)
            setAdded8('')
        } 
        if(CartQt9() === setdisable9(true)){
            setdisable9(false)
            setAdded9('')
        } 
        if(CartQt10() === setdisable10(true)){
            setdisable10(false)
            setAdded10('')
        } 
        if(CartQt11() === setdisable11(true)){
            setdisable11(false)
            setAdded11('')
        } 
        if(CartQt12() === setdisable12(true)){
            setdisable12(false)
            setAdded12('')
        } 
        if(CartQt13() === setdisable13(true)){
            setdisable13(false)
            setAdded13('')
        } 
        if(CartQt14() === setdisable14(true)){
            setdisable14(false)
            setAdded14('')
        } 
        if(CartQt15() === setdisable15(true)){
            setdisable15(false)
            setAdded15('')
        } 
        if(CartQt16() === setdisable16(true)){
            setdisable16(false)
            setAdded16('')
        } 
        if(CartQt17() === setdisable17(true)){
            setdisable17(false)
            setAdded17('')
        } 
        if(CartQt18() === setdisable18(true)){
            setdisable18(false)
            setAdded18('')
        } 
        if(CartQt19() === setdisable19(true)){
            setdisable19(false)
            setAdded19('')
        } 
        if(CartQt20() === setdisable20(true)){
            setdisable20(false)
            setAdded20('')
        }
        if(!onthanks){
            setonthanks(true)
            setTimeout(()=>{
                setonthanks(false)
            }, 2000)
        } 
        setQuantity(0)
        setpricecart(0)
        setCart([])
        setvisa(false)
        setpay(false)
        setame(false)
        setmas(false)
    }
   

    const CartQt=()=>{
        if(!disable){
        setdisable(true)
        setpricecart(Math.round(pricecart + prod_price[0]))
        setQuantity(quantity + addvalue)
        setAdded('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded('')
        }, 3000)
        setCart([...cartt, { name: 'Atomo',
        price:prod_price[0], 
         img:atom,}])
        } else {
            setAdded('Articolo già aggiunto al carrello')
        }
    }
    const CartQt2=()=>{
        if(!disable2){
            setdisable2(true)
            setpricecart(Math.round(pricecart + prod_price[1]))
        setQuantity(quantity + addvalue)
        setAdded2('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded2('')
        }, 3000)
        setCart([...cartt, {  name: 'Braccio Bionico',
        price:prod_price[1], 
        img: bionic, }])
    } else {
        setAdded2('Articolo già aggiunto al carrello')
    }
    }
    const CartQt3=()=>{
        if(!disable3){
            setdisable3(true)
            setpricecart(Math.round(pricecart + prod_price[2]))
        setQuantity(quantity + addvalue)
        setAdded3('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded3('')
        }, 3000)
        setCart([...cartt, {  name: 'Bitcoin', 
        price:prod_price[2],
        img: bitcoin, }])
    } else {
        setAdded3('Articolo già aggiunto al carrello')
    }
    }
    const CartQt4=()=>{
        if(!disable4){
            setdisable4(true)
            setpricecart(Math.round(pricecart + prod_price[3]))
        setQuantity(quantity + addvalue)
        setAdded4('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded4('')
        }, 3000)
        setCart([...cartt, { name:'Blaster',
        price:prod_price[3],
        img: blaster, }])
    } else {
        setAdded4('Articolo già aggiunto al carrello')
    }
    }
    const CartQt5=()=>{
        if(!disable5){
            setdisable5(true)
            setpricecart(Math.round(pricecart + prod_price[4]))
        setQuantity(quantity + addvalue)
        setAdded5('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded5('')
        }, 3000)
        setCart([...cartt, { name:  'Kit Chimico', 
        price:prod_price[4], 
        img: chemistry, }])
    } else {
        setAdded5('Articolo già aggiunto al carrello')
    }
    }
    const CartQt6=()=>{
        if(!disable6){
            setdisable6(true)
            setpricecart(Math.round(pricecart + prod_price[5]))
        setQuantity(quantity + addvalue)
        setAdded6('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded6('')
        }, 3000)
        setCart([...cartt, {name:'Computer', 
        price: prod_price[5], 
        img: computer,  }])
        } else {
            setAdded6('Articolo già aggiunto al carrello')
        }
    }
    const CartQt7=()=>{
        if(!disable7){
            setdisable7(true)
            setpricecart(Math.round(pricecart + prod_price[6]))
        setQuantity(quantity + addvalue)
        setAdded7('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded7('')
        }, 3000)
        setCart([...cartt, { name:'CPU',
        price: prod_price[6],
        img: cpu,  }])
    } else {
        setAdded7('Articolo già aggiunto al carrello')
    }
    }
    const CartQt8=()=>{
        if(!disable8){
            setdisable8(true)
            setpricecart(Math.round(pricecart + prod_price[7]))
        setQuantity(quantity + addvalue)
        setAdded8('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded8('')
        }, 3000)
        setCart([...cartt, { name: 'DNA', 
        price: prod_price[7], 
        img:dna,  }])
    } else {
        setAdded8('Articolo già aggiunto al carrello')
    }
    }
    const CartQt9=()=>{
        if(!disable9){
            setdisable9(true)
            setpricecart(Math.round(pricecart + prod_price[8]))
        setQuantity(quantity + addvalue)
        setAdded9('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded9('')
        }, 3000)
        setCart([...cartt, {  name:'Energia', 
        price: prod_price[8], 
        img: energy,  }])
    } else {
        setAdded9('Articolo già aggiunto al carrello')
    }
    }
    const CartQt10=()=>{
        if(!disable10){
            setdisable10(true)
            setpricecart(Math.round(pricecart + prod_price[9]))
        setQuantity(quantity + addvalue)
        setAdded10('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded10('')
        }, 3000)
        setCart([...cartt, {  name:  'Auto Volante',
        price:prod_price[9], 
        img: flycar,  }])
    } else {
        setAdded10('Articolo già aggiunto al carrello')
    }
    }
    const CartQt11=()=>{
        if(!disable11){
            setdisable11(true)
            setpricecart(Math.round(pricecart + prod_price[10]))
        setQuantity(quantity + addvalue)
        setAdded11('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded11('')
        }, 3000)
        setCart([...cartt, { name:  'Ologramma',
        price:prod_price[10], 
        img:hologram,  }])
    } else {
        setAdded11('Articolo già aggiunto al carrello')
    }
    }
    const CartQt12=()=>{
        if(!disable12){
            setdisable12(true)
            setpricecart(Math.round(pricecart + prod_price[11]))
        setQuantity(quantity + addvalue)
        setAdded12('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded12('')
        }, 3000)
        setCart([...cartt, { name: 'Jetpack',
        price:prod_price[11],
        img: jetpack, }])
    } else {
        setAdded12('Articolo già aggiunto al carrello')
    }
    }
    const CartQt13=()=>{
        if(!disable13){
            setdisable13(true)
            setpricecart(Math.round(pricecart + prod_price[12]))
        setQuantity(quantity + addvalue)
        setAdded13('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded13('')
        }, 3000)
        setCart([...cartt, { name: 'RAM',
        price:prod_price[12],
        img: ram,  }])
    } else {
        setAdded13('Articolo già aggiunto al carrello')
    }
    }
    const CartQt14=()=>{
        if(!disable14){
            setdisable14(true)
            setpricecart(Math.round(pricecart + prod_price[13]))
        setQuantity(quantity + addvalue)
        setAdded14('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded14('')
        }, 3000)
        setCart([...cartt, { name:  'Robot',
        price:prod_price[13],
        img: robot, }])
    } else {
        setAdded14('Articolo già aggiunto al carrello')
    }
    }
    const CartQt15=()=>{
        if(!disable15){
            setdisable15(true)
            setpricecart(Math.round(pricecart + prod_price[14]))
        setQuantity(quantity + addvalue)
        setAdded15('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded15('')
        }, 3000)
        setCart([...cartt, {name: 'Razzo',
        price: prod_price[14],
        img: rocket,  }])
    } else {
        setAdded15('Articolo già aggiunto al carrello')
    }
    }
    const CartQt16=()=>{
        if(!disable16){
            setdisable16(true)
            setpricecart(Math.round(pricecart + prod_price[15]))
        setQuantity(quantity + addvalue)
        setAdded16('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded16('')
        }, 3000)
        setCart([...cartt, { name: 'Nave Spaziale', 
        price:prod_price[15],
        img:spaceship,  }])
    } else {
        setAdded16('Articolo già aggiunto al carrello')
    }
    }
    const CartQt17=()=>{
        if(!disable17){
            setdisable17(true)
            setpricecart(Math.round(pricecart + prod_price[16]))
        setQuantity(quantity + addvalue)
        setAdded17('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded17('')
        }, 3000)
        setCart([...cartt, {name:'Teletrasporto',
        price:prod_price[16], 
        img:teleport,  }])
    } else {
        setAdded17('Articolo già aggiunto al carrello')
    }
    }
    const CartQt18=()=>{
        if(!disable18){
            setdisable18(true)
            setpricecart(Math.round(pricecart + prod_price[17]))
        setQuantity(quantity + addvalue)
        setAdded18('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded18('')
        }, 3000)
        setCart([...cartt, {name:  'Telescopio',
        price: prod_price[17], 
        img:telescope, }])
    } else {
        setAdded18('Articolo già aggiunto al carrello')
    }
    }
    const CartQt19=()=>{
        if(!disable19){
            setdisable19(true)
            setpricecart(Math.round(pricecart + prod_price[18]))
        setQuantity(quantity + addvalue)
        setAdded19('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded19('')
        }, 3000)
        setCart([...cartt, { name:  'Titanio',
        price: prod_price[18], 
        img: titanium,  }])
    } else {
        setAdded19('Articolo già aggiunto al carrello')
    }
    }
    const CartQt20=()=>{
        if(!disable20){
            setdisable20(true)
            setpricecart(Math.round(pricecart + prod_price[19]))
        setQuantity(quantity + addvalue)
        setAdded20('Aggiunto al carrello')
        setTimeout(()=>{
            setAdded20('')
        }, 3000)
        setCart([...cartt, { name: 'Batteria',
        price: prod_price[19],
        img: transformer }])
    } else {
        setAdded20('Articolo già aggiunto al carrello')
    }
    }
    const CartQtUni=()=>{
        setQuantity(quantity + addvalue)
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
                <p className='xtime'>Ora Locale: {time.toLocaleTimeString()}</p>
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
            <p className='item-added'>{added2}</p>
          </div>

          <div className='item-box'>
            <img src={bitcoin} className='item-img' />
            <p className='item-title'>Bitcoin</p>
            <p className='item-price'>€{prod_price[2]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Bitcoin è la pietra miliare della rivoluzione finanziaria digitale. Questa criptovaluta decentralizzata offre libertà e sicurezza senza precedenti nelle transazioni finanziarie. Con il Bitcoin, sei il tuo custode finanziario, senza bisogno di intermediari o banche. Investi nel futuro della moneta con il Bitcoin e sperimenta l'innovazione finanziaria alla sua massima espressione. La tua chiave per un mondo finanziario senza confini e senza controllo centrale.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt3} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added3}</p>
          </div>

          <div className='item-box'>
            <img src={blaster} className='item-img' />
            <p className='item-title'>Blaster</p>
            <p className='item-price'>€{prod_price[3]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Blaster è l'arma futuristica definitiva, progettata per affrontare le sfide più impegnative dell'universo. Con un design elegante e potente, il Blaster è la tua arma di scelta per difenderti da minacce extraterrestri o per sfidare i nemici interstellari. Dotato di tecnologia avanzata e munizioni potenti, il Blaster ti offre il controllo completo della situazione in qualsiasi conflitto. Preparati per un'esperienza di combattimento eccezionale con il Blaster e assicurati di essere pronto per qualsiasi avventura nello spazio profondo.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt4} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added4}</p>
          </div>

          <div className='item-box'>
            <img src={chemistry} className='item-img' />
            <p className='item-title'>Kit Chimico</p>
            <p className='item-price'>€{prod_price[4]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Kit Chimico Avanzato è uno strumento indispensabile per gli aspiranti chimici e alchimisti dello spazio. Progettato per sperimentare e creare composti chimici in ambienti extraterrestri, questo kit offre un'ampia gamma di reagenti, strumenti di misurazione e un manuale dettagliato. Sia che tu stia cercando di sintetizzare nuovi materiali o analizzare le proprietà chimiche di pianeti alieni, il Kit Chimico Avanzato è il tuo compagno fidato nello studio delle scienze chimiche nello spazio siderale. Esplora le meraviglie della chimica in mondi sconosciuti con questo strumento essenziale.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt5} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added5}</p>
          </div>

          <div className='item-box'>
            <img src={computer} className='item-img' />
            <p className='item-title'>Computer</p>
            <p className='item-price'>€{prod_price[5]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Supercomputer Interstellare rappresenta l'apice dell'elaborazione dati nello spazio. Con una potenza di calcolo ineguagliabile, questo supercomputer è progettato per affrontare compiti computazionali complessi durante le missioni di esplorazione spaziale. Dotato di algoritmi avanzati e capacità di apprendimento automatico, è in grado di analizzare dati provenienti da telescopi, sonde spaziali e strumenti scientifici con una precisione straordinaria. Con il Supercomputer Interstellare, l'elaborazione dei dati nello spazio raggiunge un nuovo livello, consentendo scoperte scientifiche straordinarie e una maggiore comprensione dell'universo.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt6} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added6}</p>
          </div>

          <div className='item-box'>
            <img src={cpu} className='item-img' />
            <p className='item-title'>CPU</p>
            <p className='item-price'>€{prod_price[6]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Unità di Elaborazione Cosmica è il cervello di ogni astronave e stazione spaziale avanzata. Progettata per gestire compiti computazionali complessi e fornire prestazioni affidabili nello spazio profondo, questa CPU è al centro di ogni operazione nello spazio. Con la sua architettura avanzata e la capacità di gestire simultaneamente una vasta gamma di operazioni, l'Unità di Elaborazione Cosmica garantisce che tutte le operazioni spaziali, dalla navigazione alla ricerca scientifica, vengano eseguite in modo efficiente e affidabile. È la spina dorsale della tecnologia spaziale e consente agli astronauti di esplorare l'universo con sicurezza e precisione.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt7} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added7}</p>
          </div>

          <div className='item-box'>
            <img src={dna} className='item-img' />
            <p className='item-title'>DNA</p>
            <p className='item-price'>€{prod_price[7]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Elica Cosmica del DNA è una struttura biologica straordinaria e unica, simile all'elica di una navicella spaziale, che contiene le istruzioni genetiche per la vita in tutto l'universo. Questa struttura molecolare incredibile è alla base di ogni forma di vita conosciuta e ha il potenziale per esistere anche su pianeti lontani. L'Elica Cosmica del DNA è responsabile della trasmissione delle caratteristiche ereditarie e della diversità biologica, consentendo la comparsa di nuove specie in ambienti spaziali diversi. È un elemento fondamentale per la comprensione dell'origine e dell'evoluzione della vita nell'intero universo, un vero capolavoro della natura che sfida la nostra comprensione dell'astrobiologia.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt8} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added8}</p>
          </div>

          <div className='item-box'>
            <img src={energy} className='item-img' />
            <p className='item-title'>Energia</p>
            <p className='item-price'>€{prod_price[8]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La Sfera Energetica Stellare è una sorgente di energia avanzata che sfrutta la fusione nucleare simile a quella del sole per generare potenza in modo continuo e inesauribile. Questa sfera, progettata per l'uso su astronavi, basi spaziali e colonie extraterrestri, rappresenta una pietra miliare nell'approvvigionamento energetico. La fusione nucleare stellare garantisce un'energia pulita e sostenibile, aprendo le porte a un futuro di esplorazione spaziale senza limiti energetici.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt9} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added9}</p>
          </div>

          <div className='item-box'>
            <img src={flycar} className='item-img' />
            <p className='item-title'>Auto Volante</p>
            <p className='item-price'>€{prod_price[9]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Auto Volante Quantum è la quintessenza della mobilità del futuro. Questo veicolo rivoluzionario è equipaggiato con tecnologia quantistica avanzata che gli consente di superare le leggi della fisica tradizionale, permettendo ai passeggeri di attraversare il cielo come se fossero uccelli liberi nel cielo. Con una struttura leggera ma robusta e un sistema di propulsione quantistica a zero emissioni, l'Auto Volante Quantum offre un'esperienza di viaggio senza pari. Non più ingorghi, semafori o limitazioni stradali: con questa auto volante, il cielo è il limite. L'Auto Volante Quantum è la soluzione definitiva per l'efficienza dei trasporti, garantendo un futuro sostenibile e privo di congestioni stradali.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt10} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added10}</p>
          </div>

          <div className='item-box'>
            <img src={hologram} className='item-img' />
            <p className='item-title'>Ologramma</p>
            <p className='item-price'>€{prod_price[10]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>L'Ologramma 3D HoloVision è una straordinaria innovazione nel mondo dell'intrattenimento e della comunicazione. Questo dispositivo utilizza la tecnologia olografica avanzata per proiettare immagini tridimensionali incredibilmente realistiche nello spazio circostante. Che tu stia cercando di comunicare con un amico dall'altra parte del mondo o di immergerti in un'esperienza di gioco mozzafiato, l'Ologramma 3D HoloVision offre una qualità visiva senza precedenti. Il dispositivo è compatto e portatile, consentendo di portare l'arte dell'olografia ovunque tu vada. Con HoloVision, il futuro delle presentazioni, dell'arte digitale e delle comunicazioni interattive è finalmente qui.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt11} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added11}</p>
          </div>

          <div className='item-box'>
            <img src={jetpack} className='item-img' />
            <p className='item-title'>Jetpack</p>
            <p className='item-price'>€{prod_price[11]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Jetpack SkyMaster X9 è la soluzione definitiva per il tuo volo personale. Questo dispositivo compatto e potente ti consente di alzarti in aria e sfrecciare nei cieli con facilità e sicurezza. Con velocità fino a 300 km/h e un'autonomia di volo di fino a 3 ore, il Jetpack SkyMaster X9 ti offre un'esperienza di volo senza pari. È ideale per il trasporto personale e l'esplorazione aerea. Prendi il controllo del tuo destino e vola alto con stile e sicurezza.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt12} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added12}</p>
          </div>

          <div className='item-box'>
            <img src={ram} className='item-img' />
            <p className='item-title'>RAM</p>
            <p className='item-price'>€{prod_price[12]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La Memoria RAM HyperSpeed 32GB è la soluzione perfetta per migliorare le prestazioni del tuo computer. Con una capacità di 32 gigabyte, questa RAM ti offre la potenza di elaborazione di cui hai bisogno per eseguire le applicazioni più esigenti e multitasking senza problemi. L'HyperSpeed garantisce tempi di risposta rapidi e una maggiore efficienza energetica, consentendoti di svolgere le tue attività digitali in modo fluido. Aggiorna la tua RAM con l'HyperSpeed 32GB e goditi un'esperienza informatica superiore.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt13} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added13}</p>
          </div>

          <div className='item-box'>
            <img src={robot} className='item-img' />
            <p className='item-title'>Robot</p>
            <p className='item-price'>€{prod_price[13]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Robot Assistente Multifunzione è la soluzione perfetta per semplificare la tua vita quotidiana. Con le sue capacità avanzate di intelligenza artificiale, questo robot è in grado di svolgere una varietà di compiti, dal pulire la casa all'aiutarti a gestire la tua agenda quotidiana. Il suo design elegante e compatto si adatta a qualsiasi ambiente, e la sua interfaccia utente intuitiva lo rende facile da usare. Grazie alle sue abilità di riconoscimento vocale, puoi interagire con il robot in modo naturale e chiedergli di eseguire molte attività diverse. Investi nel futuro con il Robot Assistente Multifunzione e scopri quanto può migliorare la tua vita.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt14} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added14}</p>
          </div>

          <div className='item-box'>
            <img src={rocket} className='item-img' />
            <p className='item-title'>Razzo</p>
            <p className='item-price'>€{prod_price[14]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Razzo Spaziale Avanzato è la chiave per esplorare le profondità dello spazio. Con la sua tecnologia all'avanguardia, questo razzo offre un viaggio sicuro e confortevole nello spazio profondo. Dotato di motori potenti e sistemi di navigazione sofisticati, il razzo è in grado di raggiungere velocità straordinarie e esplorare nuovi mondi. La sua cabina spaziosa e comoda assicura che gli astronauti abbiano tutto il necessario per missioni di lunga durata. Che tu sia un esploratore spaziale o un appassionato di astronomia, il Razzo Spaziale Avanzato è la scelta ideale per raggiungere le stelle e oltre.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt15} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added15}</p>
          </div>

          <div className='item-box'>
            <img src={spaceship} className='item-img' />
            <p className='item-title'>Nave Spaziale</p>
            <p className='item-price'>€{prod_price[15]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La Nave Spaziale Intergalattica è la sintesi dell'ingegneria avanzata e dell'innovazione tecnologica. Progettata per esplorare l'universo a velocità incredibili, questa nave offre un'esperienza senza precedenti nel viaggio spaziale. Con sistemi di propulsione all'avanguardia, è in grado di superare distanze cosmiche e raggiungere sistemi solari lontani. L'interno della nave è progettato per garantire il massimo comfort agli astronauti durante le lunghe missioni di esplorazione, con alloggi spaziosi e aree per l'addestramento scientifico. La Nave Spaziale Intergalattica rappresenta la frontiera finale dell'esplorazione spaziale e apre la strada a scoperte straordinarie in luoghi mai esplorati prima d'ora.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt16} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added16}</p>
          </div>

          <div className='item-box'>
            <img src={teleport} className='item-img' />
            <p className='item-title'>Teletrasporto</p>
            <p className='item-price'>€{prod_price[16]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Dispositivo di Teletrasporto Avanzato è una rivoluzione nell'ambito dei viaggi. Con questa incredibile invenzione, puoi dire addio ai lunghi e noiosi viaggi e raggiungere istantaneamente qualsiasi luogo desiderato. Il dispositivo funziona dematerializzando la materia a un punto e rimaterializzandola istantaneamente in un altro, consentendoti di attraversare distanze enormi in un batter d'occhio. È una tecnologia sorprendente che cambierà per sempre il modo in cui esploriamo il mondo e ci connettiamo con luoghi lontani. Non c'è più bisogno di voli lunghi o di ore di guida; con il Dispositivo di Teletrasporto Avanzato, il mondo è letteralmente a portata di mano.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt17} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added17}</p>
          </div>

          <div className='item-box'>
            <img src={telescope} className='item-img' />
            <p className='item-title'>Telescopio</p>
            <p className='item-price'>€{prod_price[17]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il Telescopio Astronomico Avanzato è uno strumento di osservazione eccezionale progettato per esplorare le profondità insondabili dell'universo. Con una potente tecnologia di ingrandimento e una precisione straordinaria, questo telescopio ti consente di scrutare le stelle, le galassie e i pianeti con una chiarezza straordinaria. Rivela dettagli nascosti, pianeti distanti e nebulose misteriose, aprendo una finestra sulla bellezza e la vastità dell'universo. È lo strumento perfetto per gli astrofili e gli astronomi amatoriali che desiderano esplorare il cosmo e catturare immagini mozzafiato del cielo notturno. Con il Telescopio Astronomico Avanzato, puoi viaggiare attraverso le stelle senza mai lasciare la Terra.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt18} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added18}</p>
          </div>

          <div className='item-box'>
            <img src={titanium} className='item-img' />
            <p className='item-title'>Titanio</p>
            <p className='item-price'>€{prod_price[18]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>Il titanio ultraleggero e resistente è un materiale incredibile che combina leggerezza e robustezza in un'unica soluzione. Conosciuto per la sua straordinaria resistenza alla corrosione e alla ruggine, il titanio è spesso utilizzato in applicazioni aerospaziali e mediche. Questo metallo avanzato è perfetto per situazioni in cui la leggerezza è essenziale senza compromettere la durata. Dai componenti degli aerei spaziali alle protesi mediche, il titanio è la scelta ideale per situazioni in cui la forza e la leggerezza sono fondamentali. Con il titanio ultraleggero e resistente, puoi affrontare le sfide più impegnative con fiducia, sapendo di avere un materiale affidabile dalla tua parte.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt19} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added19}</p>
          </div>

          <div className='item-box'>
            <img src={transformer} className='item-img' />
            <p className='item-title'>Batteria</p>
            <p className='item-price'>€{prod_price[19]}</p>
            <div className='item-desc'>
              <p className='item-desc-text'>La batteria ad alta capacità e lunga durata è una soluzione innovativa per alimentare dispositivi elettronici in modo affidabile e prolungato. Questa batteria avanzata offre una capacità eccezionale per garantire che i tuoi dispositivi rimangano operativi più a lungo, consentendoti di godere di un utilizzo continuo senza interruzioni. Che tu stia lavorando, giocando o semplicemente esplorando il mondo digitale, puoi contare su questa batteria per mantenere la carica per un periodo straordinariamente lungo. Inoltre, la sua durata eccezionale significa meno preoccupazioni per la ricarica frequente e più tempo per concentrarti su ciò che conta di più per te. Con la batteria ad alta capacità e lunga durata, sei pronto per affrontare le tue giornate con energia e sicurezza.</p>
            </div>
            <input type='submit' className='item-cart' onClick={CartQt20} value='Aggiungi al carrello'></input>
            <p className='item-added'>{added20}</p>
          </div>

        
      </div>
      </div>

      <div className='cart-box'>

                <div className='cart-page' style={cartPage}>
                      
             {cartt.map((item, index)=>(
                <div className='cart-page-item-box' key={index}>
                <img src={item.img} className='cart-page-img'></img>
                <h2 className='cart-page-name'>{item.name}</h2>
                <h1 className='cart-page-price'>€{item.price}</h1>
                

                <button className='cart-page-remove' onClick={()=>removeItem(index)}>Rimuovi dal carrello</button>
                </div>
             ))}
                
                <div className='cart-page-pay-box'>
                    <h2 className='cart-page-prod'>Prodotti nel carrello ({quantity})</h2>

                    <p className='pay-method-choose' >Metodo di pagamento:</p>
                    <div className='cart-page-pay-grid'>

                   

 

                    
                        <div className='pay-method' style={pay1} onClick={choosepay}>
                            <img   src={visa} className='pay-img'></img>
                            <p className='pay-name'>Visa</p>
                        </div>
                        <div className='pay-method' style={pay2} onClick={choosepay2}>
                            <img  src={master} className='pay-img'></img>
                            <p className='pay-name'>MasterCard</p>
                        </div>
                        <div className='pay-method' style={pay3} onClick={choosepay3}>
                            <img  src={american} className='pay-img'></img>
                            <p className='pay-name'>American Express</p>
                        </div>
                        <div className='pay-method' style={pay4} onClick={choosepay4}>
                            <img  src={paypal} className='pay-img'></img>
                            <p className='pay-name'>PayPal</p>
                        </div>
                    </div>

                    <p className='pay-total'>Totale: €{pricecart}</p>

                    <button className='pay-button' onClick={buy}>Conferma & Acquista</button>

                    
                </div>

                <p className='thanks' style={thanks}>Grazie per l'acquisto</p>

                </div>




                <img src={cart} className='cart' onClick={CtOn}></img>
                <p className='cart-quantity'onClick={CtOn}>{quantity}</p>

                
      </div>

            </main>
    )

}

export default Carousel

