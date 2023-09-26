import earth from './ximg/earth.png';
import alien from './ximg/alien.png';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './preordina.css';
import './xtickets.css';
import america from './ximg/american-express.png';
import visa from './ximg/visa.png';
import paypal from './ximg/paypal.png';
import mastercard from './ximg/card.png';





function Preordina(){

    const [time, settime]=useState(new Date())
    const [visaa, setvisa]=useState(false)
    const [pay, setpay]=useState(false)
    const [ame, setame]=useState(false)
    const [mas, setmas]=useState(false)
    const [tot, settot]=useState(499)
    const [pe1, setp1]=useState('1')
    const [pe2, setp2]=useState('2')
    const [pe3, setp3]=useState('3')
    const [pe4, setp4]=useState('4')
    const [pe5, setp5]=useState('5')
    const [pe6, setp6]=useState('6')
    const [s1, sets1]=useState(false)
    const [s2, sets2]=useState(false)
    const [s3, sets3]=useState(false)
    const [s4, sets4]=useState(false)
    const [s5, sets5]=useState(false)
    const [s6, sets6]=useState(false)
    const [nome, setnome]=useState('')
    const [cogn, setcogn]=useState('')
    const [email, setemail]=useState('')
    const [mess, setmess]=useState('')

    const inviaRice=()=>{
        if(nome && cogn && email){
            setTimeout(()=>{
            setnome('')
            setcogn('')
            setemail('')
        },2000)
            setmess('Grazie per aver acquistato il biglietto! La tua ricevuta è stata inviata con successo a ')
            
        }else  if (nome === '' || cogn === '' || email === ''){
            setmess('Inserisci i dati nei campi obbligatori')
        }
    }


    const scriviN=(event)=>{
       setnome(event.target.value)
    }
    const scriviC=(event)=>{
        setcogn(event.target.value)
     }
     const scriviE=(event)=>{
       setemail(event.target.value)
    }


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



    const calcTot1=()=>{
        if(pe1 && s1){
        sets1(false)
        settot(499)
    } else {
        settot(499)
        sets1(true)
        sets2(false)
        sets3(false)
        sets4(false)
        sets5(false)
        sets6(false)
    }
    }
    const calcTot2=()=>{
        if(pe2 && s2){
        sets2(false)
        settot(499)
    } else{
        settot(499*2)
        sets1(false)
        sets2(true)
        sets3(false)
        sets4(false)
        sets5(false)
        sets6(false)
    }
    } 
    const calcTot3=()=>{
        if(pe3 && s3){
        sets3(false)
        settot(499)
    } else{
        settot(499*3)
        sets1(false)
        sets2(false)
        sets3(true)
        sets4(false)
        sets5(false)
        sets6(false)
    }
    } 
    const calcTot4=()=>{
        if(pe4 && s4){
        sets4(false)
        settot(499)
    } else{
        settot(499*4)
        sets1(false)
        sets2(false)
        sets3(false)
        sets4(true)
        sets5(false)
        sets6(false)
    }
    } 
    const calcTot5=()=>{
        if(pe5 && s5){
        sets5(false)
        settot(499)
    } else{
        settot(499*5)
        sets1(false)
        sets2(false)
        sets3(false)
        sets4(false)
        sets5(true)
        sets6(false)
    }
    } 
    const calcTot6=()=>{
        if(pe6 && s6){
        sets6(false)
        settot(499)
    } else{
        settot(499*6)
        sets1(false)
        sets2(false)
        sets3(false)
        sets4(false)
        sets5(false)
        sets6(true)
    }
    } 

    


    const totp1 =()=>{
    if(s1){
        sets1(false)
    } else {
        sets1(true)
    }
    }
        const totp2 =()=>{
            if(s2){
                sets2(false)
            } else {
                sets2(true)
            }
            }
            const totp3 =()=>{
                if(s3){
                    sets3(false)
                } else {
                    sets3(true)
                }
                }
                const totp4 =()=>{
                    if(s4){
                        sets4(false)
                    } else {
                        sets4(true)
                    }
                    }
                     
                    const totp5 =()=>{
                        if(s5){
                            sets5(false)
                        } else {
                            sets5(true)
                        }
                        }
                        const totp6 =()=>{
                            if(s6){
                                sets6(false)
                            } else {
                                sets6(true)
                            }
                            }


                            const p1 = s1 ?{
                            backgroundColor: 'black',
                            color: 'rgb(0, 255, 191)'
                            }:{}
                            const p2 = s2 ?{
                            backgroundColor: 'black',
                            color: 'rgb(0, 255, 191)'
                            }:{}
                            const p3 = s3 ?{
                            backgroundColor: 'black',
                            color: 'rgb(0, 255, 191)'
                            }:{}
                            const p4 = s4 ?{
                            backgroundColor: 'black',
                            color: 'rgb(0, 255, 191)'
                            }:{}
                            const p5 = s5 ?{
                            backgroundColor: 'black',
                            color: 'rgb(0, 255, 191)'
                            }:{}
                            const p6 = s6 ?{
                             backgroundColor: 'black',
                             color: 'rgb(0, 255, 191)'
                            }:{}
 

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



    useEffect(()=>{
        const nowtime = setInterval(()=>{
        settime(new Date())
        }, 1000)

        return ()=>clearInterval(nowtime)
    }, [])


    

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



<div className='preorder'>
  <div className='preorderbox'>
   <img src={earth} className='preorderimg'></img>
   <div className='pretextbox'>
    <h1 className='pretitle'>Biglietto per Terra</h1>
    <h3 className='pretext'>Seleziona metodo di pagamento:</h3>
      <div className='prepaga'>
        <div className='prepagabox' style={pay1} onClick={choosepay}>
         <img src={visa} className='pagaimg'></img>
         <p className='pagatext'>Visa</p>
        </div>
        <div className='prepagabox2' style={pay2} onClick={choosepay2}>
         <img src={paypal} className='pagaimg'></img>
         <p className='pagatext'>PayPal</p>
        </div>
        <div className='prepagabox3' style={pay3} onClick={choosepay3}>
         <img src={america} className='pagaimg'></img>
         <p className='pagatext'>American Express</p>
        </div>
        <div className='prepagabox4'style={pay4} onClick={choosepay4}>
         <img src={mastercard} className='pagaimg'></img>
         <p className='pagatext'>masterCard</p>
        </div>
      </div>

      <div className='spesabox'>
        <p>Seleziona il N. di persone:</p>
        <div className='personebox'>
            <button className='persona1'style={p1} onClick={()=>{totp1(); calcTot1();}}>{pe1}</button>
            <button className='persona2'style={p2} onClick={()=>{totp2(); calcTot2();}}>{pe2}</button>
            <button className='persona3'style={p3} onClick={()=>{totp3(); calcTot3();}}>{pe3}</button>
            <button className='persona4'style={p4} onClick={()=>{totp4(); calcTot4();}}>{pe4}</button>
            <button className='persona5'style={p5} onClick={()=>{totp5(); calcTot5();}}>{pe5}</button>
            <button className='persona6'style={p6} onClick={()=>{totp6(); calcTot6();}}>{pe6}</button>
        </div>
        <p className='spesatot'>Totale: €{tot}</p>
      </div>



        <div className='preinputbox'>
            <h1 className='preinput'>Nome*</h1>   
            <input maxLength={30} type='text' className='preinput-input' value={nome} onChange={scriviN} ></input>
            </div>
            <div className='preinputbox2'>
                <h1 className='preinput'>Cognome*</h1>   
                <input maxLength={50}  type='text' className='preinput-input' value={cogn} onChange={scriviC}></input>
                </div>
                <div className='preinputbox3'>
                    <h1 className='preinput'>Email*</h1>   
                    <input maxLength={50} type='text' className='preinput-input' value={email} onChange={scriviE}></input>
                </div>
                <button className='prebutton' onClick={inviaRice}>Conferma</button>

             
                <h2 className='grazietext'>{mess}{email}</h2>
             
   </div>
  </div>

</div>

</main>

)
}


export default Preordina;