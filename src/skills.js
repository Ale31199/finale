import atom from './img/atom.png';
import css from './img/css-3.png';
import git from'./img/github.png';
import html from './img/html-5.png';
import js from'./img/js.png';
import  mysql from'./img/mysql.png';
import php from'./img/php.png';
import './skills.css';



const skills=()=>{



    return(
        <div className='skille'>

            <div className='skillx'>
             <img  className='html'src={html}></img>
             <div className='boxname'><h1 className='name'>HTML</h1></div>
             <h1 className='testa'>Ho imparato ad utilizzare e conoscere l'HTML grazie al tutorial su YouTube di SuperSimpleDev. Ho fatto molti esercizi pratici inizianado appunto da 0.
             Finito il corso e gli esercizi, sono stato in grado di creare autonomamente pagine basiche in HTML senza problemi.
             </h1>
             <div className='boxskill'><h1 className='valut'>Livello (Medio - Alto) </h1></div>
            </div>


            <div className='skillcss'>
             <img  className='css'src={css}></img>
             <div className='boxnamecss'><h1 className='namecss'>CSS</h1></div>
             <h1 className='testacss'>Ho imparato ad utilizzare e conoscere CSS grazie al tutorial su YouTube di SuperSimpleDev. Ho fatto molti esercizi pratici inizianado da 0.
             Finito il corso e gli esercizi, sono stato in grado di creare autonomamente gli stili, animazioni e adattività per le pagine basiche create in HTML con facilità.
             </h1>
             <div className='boxskillcss'><h1 className='valutcss'>Livello (Medio - Alto) </h1></div>
            </div>


            <div className='skilljs'>
             <img  className='js'src={js}></img>
             <div className='boxnamejs'><h1 className='namejs'>JAVASCRIPT</h1></div>
             <h1 className='testajs'>Ho imparato ad utilizzare e conoscere JS grazie al tutorial di 12 ore su YouTube di SuperSimpleDev. Ho fatto molti esercizi pratici inizianado da 0.
             Finito il corso e gli esercizi, sono stato in grado di creare autonomamente pagine interattive di livello base - medio, utilizzando tutto ciò che ho appreso dal corso.
             </h1>
             <div className='boxskilljs'><h1 className='valutjs'>Livello (Medio) </h1></div>
            </div>


            <div className='skillrt'>
             <img  className='rt'src={atom}></img>
             <div className='boxnamert'><h1 className='namert'>REACT JS</h1></div>
             <h1 className='testart'>Ho imparato ad utilizzare e conoscere REACT grazie a vari tutorial e siti web di informazione come w3-Schools, FreeCodeCamp, ChatGpt e altro.
             Affrontando il corso, ho svolto parecchi esercizi pratici come minigiochi e miglioramenti dell'interattività in progetti precedentemente creati con JAVASCRIPT.
             </h1>
             <div className='boxskillrt'><h1 className='valutrt'>Livello (Medio) </h1></div>
            </div>

            <div className='skillph'>
             <img  className='ph'src={php}></img>
             <div className='boxnameph'><h1 className='nameph'>PHP</h1></div>
             <h1 className='testaph'>Ho imparato ad utilizzare e conoscere PHP grazie al tutorial su YouTube di Bro Code e W3-Schools. Ho fatto molti esercizi pratici creando vari form e varie prova con il database SQL.
             Finito il corso, sono stato in grado di creare autonomamente pagine di form con l'invio dei dati al database.
             </h1>
             <div className='boxskillph'><h1 className='valutph'>Livello (Base) </h1></div>
            </div>

            <div className='skillmy'>
             <img  className='my'src={mysql}></img>
             <div className='boxnamemy'><h1 className='namemy'>MYSQL</h1></div>
             <h1 className='testamy'>Ho imparato ad utilizzare e conoscere MySQL grazie al sito di informazione di W3-Schools. Ho fatto varie prove pratiche inizianado da 0, integrandolo con PHP.
             Utilizzando MyPhpAdmin, sono riuscito a creare database e tabelle su cui esercitarmi insieme a PHP a registrare i dati nel database.
             </h1>
             <div className='boxskillmy'><h1 className='valutmy'>Livello (Base) </h1></div>
            </div>

            <div className='skillg'>
             <img  className='g'src={git}></img>
             <div className='boxnameg'><h1 className='nameg'>GITHUB</h1></div>
             <h1 className='testag'>Ho imparato ad utilizzare e conoscere GITHUB grazie al tutorial su YouTube di SuperSimpleDev.
             Finito il breve corso di 1 ora circa, insieme ai vari progetti sono stato in grado di creare autonomamente repository per l'invio delle modifiche con l'utilizzo dei commit.
             </h1>
             <div className='boxskillg'><h1 className='valutg'>Livello (Base - Medio) </h1></div>
            </div>


        </div>
    )
}

export default skills