import calc from './img/calculator.png';
import game from './img/gamepad.png';
import spotify from'./img/spotify.png';
import './proj.css';




const proj =()=>{
    return(
        <div className='progettix'>

            <div className='prospo'>
             <img src={spotify} className='spo'></img>
             <div className='boxspo'>
                <h1 className='spot'>SPOTIFY</h1>
             </div>
             <h1 className='tspo'>Questo è il progetto Spotify! Si tratta semplicemente della pagina principale, mostrando le playlist preferite, gli artisti e altro ancora. Potrebbe avere qualche problema con la adattabilità di alcuni schermi.
             ma per il resto dovrebbe essere tutto funzionante! Ovviamente non riproduce musica, ma è solo per il lato estetico con qualche piccola interattività. NOTA: Al momento non è visualizzabile su mobile o schermi piccoli, consiglio di visualizzarlo su PC.
             </h1>
             <button className='buttonspo'>Prova Ora</button>
            </div>
            

            <div className='progame'>
             <img src={game} className='game'></img>
             <div className='boxgame'>
                <h1 className='gamer'>PIXEL NIGHTMARE</h1>
             </div>
             <h1 className='tgame'>Pixel Nightmare è un breve gioco di prova, dove si basa sul aiutare questo personaggio di nome "Sticky" a scappare dal misterioso posto in cui si trova. Per farlo, avrai due opzioni,
             in base a quella scelta, la trama prenderà strade diverse, bisognerà pensare bene se fare una determinata cosa oppure l'altra. Al momento è molto breve, ma sarebbe bello continuarlo, intanto qui, c'è una breve prova che puoi fare! 
             </h1>
             <button className='buttongame'>Prova Ora</button>
            </div>

            <div className='proca'>
             <img src={calc} className='ca'></img>
             <div className='boxca'>
                <h1 className='cal'>CALCULATOR</h1>
             </div>
             <h1 className='tca'>Questo è il progetto Spotify! Si tratta semplicemente della pagina principale, mostrando le playlist preferite, gli artisti e altro ancora. Potrebbe avere qualche problema con la adattabilità di alcuni schermi.
             ma per il resto dovrebbe essere tutto funzionante! Ovviamente non riproduce musica, ma è solo per il lato estetico con qualche piccola interattività.
             </h1>
             <button className='buttonca'>Prova Ora</button>
            </div>



        </div>
    )
}


export default proj