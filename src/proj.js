import calc from './img/calculator.png';
import game from './img/gamepad.png';
import spotify from'./img/spotify.png';
import alien from './xflies/ximg/alien.png';
import './proj.css';
import {Outlet, Link} from 'react-router-dom';




const proj =()=>{
    return(
        <div className='progettix'>

            
            <div className='prof'>
             <img src={alien} className='fl'></img>
             <div className='boxf'>
                <h1 className='f'>XFLIES</h1>
             </div>
             <h1 className='tf'>Questo è il progetto XFlies! Un sito dove poter comprare biglietti per andare nello spazio, tutto grazie ai nostri amici extraterrestri! Insieme a quello c'è anche la sezione di shop online incluso sempre a tema spazio!
             Prova ora e guarda cosa può offrire. 
             </h1>
             <Link to='/xflies' className='aliens'>Try Xflies</Link>
            </div>

            <div className='prospo'>
             <img src={spotify} className='spo'></img>
             <div className='boxspo'>
                <h1 className='spot'>SPOTIFY</h1>
             </div>
             <h1 className='tspo'>Questo è il progetto Spotify! Si tratta semplicemente della pagina principale, mostrando le playlist preferite, gli artisti e altro ancora. Potrebbe avere qualche problema con la adattabilità di alcuni schermi.
             ma per il resto dovrebbe essere tutto funzionante! Ovviamente non riproduce musica, ma è solo per il lato estetico con qualche piccola interattività. 
             </h1>
             <Link  to='/spotify' className='buttonspo'>Prova Spotify</Link>
            </div>
            

            <div className='progame'>
             <img src={game} className='game'></img>
             <div className='boxgame'>
                <h1 className='gamer'>PIXEL NIGHTMARE</h1>
             </div>
             <h1 className='tgame'>Pixel Nightmare è un breve gioco di prova, dove si basa sul aiutare questo personaggio di nome "Sticky" a scappare dal misterioso posto in cui si trova. Per farlo, avrai due opzioni,
             in base a quella scelta, la trama prenderà strade diverse, bisognerà pensare bene se fare una determinata cosa oppure l'altra. Al momento è molto breve, ma sarebbe bello continuarlo, intanto qui, c'è una breve prova che puoi fare! 
             </h1>
             <Link to='/pixel' className='buttongame'>Prova Pixel Nightmare</Link>
            </div>

            <div className='proca'>
             <img src={calc} className='ca'></img>
             <div className='boxca'>
                <h1 className='cal'>CALCULATOR</h1>
             </div>
             <h1 className='tca'>Questo è il progetto Calculator! Si tratta semplicemente di una calcolatrice con uno stile un po suo. C'è sempre il nostro amico Sticky a fare compagnia nel mentre facciamo i calcoli,
             e ogni volta che apri la calcolatrice ti dice qualcosa, delle frasi random. Puoi anche cliccare sulla frase per cambiarla!. Puoi cambiare lo stile della calcolatrice cliccando i tasti 'Hell Mode' oppure 'Pixel Mode', li puoi disattivare ricliccando il tasto. Puoi accedere agli stili
             scrivendo '666' per la 'Hell Mode', altrimenti scrivi '10101010' per l'altra modalità!.
             </h1>
             <Link to='/calco' className='buttonca'>Prova Calculator</Link>
            </div>


        <Outlet/>
        </div>
    )
}


export default proj