import './Main.css';
import io from'./img/io.jpg';


//chi sono, cosa faccio e da quanto, prospettive per il futuro


const App =()=> {



  return (
    <div className="App">
      <div className='presentazione'>
     <img className='io' src={io}></img>
     <div className='stats'>
      <li>Nome ------------------- Alessio</li><br></br>
      <li>Cognome ------------- Santillo</li><br></br>
      <li>Nato il ------- 3/11/99 (23 anni)</li><br></br>
      <li>Nato a ---------- Magenta (MI)</li><br></br>
      <li>Tel. ---------------- 3898938262</li><br></br>
      <li>Email -----------------------------<br></br>alessiosantillo31199@gmail.com</li><br></br>
      <li>GitHub --------------------------- <br></br> <a href='https://github.com/Ale31199'>https://github.com/Ale31199</a></li><br></br>
      <li>Linkedin ----- <a href='https://www.linkedin.com/in/alessio-santillo-422186275/'>Alessio Santillo</a></li>
     </div>



     <h2 className='text'>Benvenuto su HomeCode!</h2>                                                        
     <h1 className='text2'>Hey tu!...<br></br> si, proprio tu. Ti do il benvenuto nella mia pagina principale, HomeCode.<br></br><br></br>
     <h2>Chi sono?</h2>
     Il mio nome è Alessio Santillo, ho 23 anni e da poco sono uno sviluppatore web (Full Stack). Da sempre appassionato di tecnologia da quando andavo alle medie,
     ho sempre voluto scoprire di più di questo mondo sempre in evoluzione e all'avanguardia. La strada che presi però alle superiori fu totalmente diversa, perchè mi dedicai alla meccanica dei veicoli a motore. 
     Ora ti starai giustamente chiedendo il perchè di questa scelta, ed ora te lo spiego in modo molto semplice. Si studiava poco, o almeno, si studiava ma era ovviamente più marcata la pratica che la teoria. Scelsi di fare quella scuola
     perchè era più semplice e a quel tempo odiavo studiare. Questo spiega perchè non scelsi la scuola di informatica, perchè c'era tanta matematica ed io ne ero spaventato. Finite le superiori, iniziai a lavorare in un supermercato per qualche mese
     poi poco dopo mi son ritrovato a lavorare in negozi di abbigliamento per piu di 4 anni. Nel negozio dove ho lavorato nell'ultimo periodo prima di mettermi a studiare come Web Developer, ero responsabile del reparto bambini ed ero
     Visual Merchandiser, ovvero colui che si occupa dell'allestimento del reparto e dell'analisi dell'andamento dei prodotti durante la settimana nonchè per tutto l'anno. Ho scelto di cambiare vita, perchè quello che facevo non mi soddisfava
     appieno e volevo inseguire il mio sogno. Cosi con un po di coraggio, mi sono messo a studiare utilizzando vari siti di informazione come W3 Schools, FreeCodeCamp, ChatGpt, molti tutorial su YouTube e l'aiuto dello zio sviluppatore!<br></br><br></br><br></br>
     <h2>Il mio percorso</h2>
     Per quanto riguarda il mio percorso di studio fino ad ora, posso dire di aver fatto molta strada, almeno questa è una mia autovalutazione. Ho cominciato esattamente l'1 Maggio del 2023 e ho iniziato partendo da 0, quindi sono partito con HTML e CSS, come prima infarinatura, 
     dopodichè sono passato a JavaScript come primo e vero linguaggio di programmazione facendo molti ma molti esercizi grazie a numerosissimi video su YouTube. Dopo qualche periodo di tempo, ho introdotto React Js come primo FrameWork su qui lavorare. Anche li con tanti
     esercizi e svariate prove, facendo dei piccoli giochi interattivi e molto altro. Presa confidenza con React, decido di cominciare il lato backend, utilizzando PHP e MySql, creando vari form di prova, delle tabelle su cui inviare i dati ecc.
     Fino ad oggi, sto ancora studiando per far si che sia in grado di essere al meglio autonomo con tutto quello che mi si trova davanti. Ovviamente, resto sempre un Junior e di cose ne ho molte da imparare, ma credo che come inizio non è male.<br></br><br></br><br></br>
     <h2>Prospettive per il futuro</h2>
     Le mie prospettive per il futuro sono il trovare un posto di lavoro che possa offrire una grande possibilità di crescita e di carriera. Lavorare con un gruppo di persone molto capaci e dinamiche con cui collaborare e dare il meglio per la realizzazione del lavoro.
     Spero di trovare un azienda seria disposta a far crescere le new entry nel mondo del web developing dando le giuste risorse per crescere e soddisfarsi in modo autonomo.
     </h1>
     </div>
    </div>
  );
}

export default App;
