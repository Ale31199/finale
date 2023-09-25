import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import logo from "./logo2.png";
import gif from "./knight-unscreen.gif";
import bullet from "./background.wav";
import choicesnd from './beep.wav';

const PixelN=()=>{
  const StoryGame = () => {
    const [play, setplay] = useState(false)
    const [playing, setplaying]=useState('Music On')
    const audioRef = useRef(null)
    const choiceRef = useRef(null);
    const [text, settext] = useState("Welcome to Pixel Nightmare! the interactive adventure game where every decision you make can have different consequences on the event of the story.\n Are you ready to help Glitchy escape the mysterious place he's imprisoned in?")
    const [risp1, setrisp1]=useState("Yes, I'm ready to help him to get him free")
    const [risp2, setrisp2]=useState("Maybe not now, I'm a little bit scared at the moment")
    const [newname, setnewname]=useState('');
    const [mapname, setmap]=useState([])
    const [showinput, setshow]=useState(false)
    const [erro, seterro]=useState('My name is: ')

    const writename=()=>{
      if(newname === ''){
      seterro(erro)
      } else {
      setmap(newname)
      setnewname('')
      }
    }

    const addname=(e)=>{
     setnewname(e.target.value)
    }

    const startgame = (event) => {
      if(event.key ==='Enter'){
      writename();
      }
    };
    


    const playChoice = () => {
     choiceRef.current.play()
      }
  const playMusic=()=>{
    if (play){
      audioRef.current.pause();
      setplaying('Music Off')
      setplay(false)
    } else{
      audioRef.current.play()
      setplaying('Music On')
      setplay(true)
    }
  }
  const musicOn = play?{
    backgroundColor:'rgb(43, 134, 62)'
      }
      :{};
      //////////////////////////////////////////////////////////////////////
      const inventory=[
        'homemade knife',
        'shovel',
        'lockpick',
        'coin'

      ]

      //////////////////////////////////////////////////////////////////////

      const storia={
        t0: "Welcome to Pixel Nightmare! the interactive adventure game where every decision you make can have different consequences on the event of the story.\n Are you ready to help Glitchy escape the mysterious place he's imprisoned in?",
        
        r0: ["Yes, I'm ready to help him to get him free",
         "Maybe not now, I'm a little bit scared at the moment"],
        ////
        
        t1:
        `Before the game starts... What's your name? \n`,
        
        r1:['Start Game'],
        
        ////
        t2: "Chapter One: The Awakening.\n Glitchy wakes up to find himself inside a seemingly dark cell with little light. Next to him is another prisoner, far worse off because guess what? he is stone dead. Near the corpse, Glitchy finds a small radio with which he can contact someone by trying to find the right channel. Along with the radio, he finds a letter written by the poor unfortunate man who left us for dead. It says: `I don`t know how I got here, I just remember doing my usual things when at some point I feel a great headache and passed out. Now I`m here, alone and abandoned in this dark, damp, putrid cell. I have no idea why I'm here, but after long reflection, unable to do anything else, I think someone injected something in the back of my head, because touching me, there was a bluish liquid on my hand and I doubt it was my blood. Having said that, I am writing this letter to those who will read it, because yes, I don`t think I can do it. I feel poison or whatever it is running through my veins, and I don`t think that`s a good sign. Be careful, and survive. Ps: behind the brick by the window, I have hidden a homemade knife, in case there are any nasty surprises. `",
        
        r2:["Continue"],
        
        
        }

      /////////////////////////////////////////////////////////////////////

      const GStory=(rispo)=>{

     if(text === storia.t0 && rispo === storia.r0[0]){
      setTimeout(()=>{
      settext(storia.t1)
      setrisp1(storia.r1[0])
      setrisp2('')
      setshow(true)
    },1500)
     } else if(text === storia.t1 && rispo === storia.r1[0]){
      setTimeout(()=>{
      settext(storia.t2)
      setrisp1(storia.r2[0])
      setrisp2('')
      setshow(false)
    }, 1500)
     }
    
      }
 


    return (
      <div className="Appn">
        <button className="musicbutton" style={musicOn} onClick={playMusic} > {playing}
        </button> <audio  src={bullet}  ref={audioRef} autoPlay loop />
        <img src={logo} className="titlen" />
        <img src={gif} className="knight" />
        <p className="alpha">Alpha Version :) Coming Soon!</p>

      <div className="story">
        <p className="storytext">{text}</p>


{showinput ? (
        <div className="insert-name">
    <input  className="insert-name-input" maxLength={30} type="text" value={newname} onChange={addname}></input>
    <button className="insert-name-start" onKeyUp={startgame} onClick={writename}>Confirm</button>
    <p className="nameis">{erro}{newname}</p>
   </div>
   
   ): null}



      
          <div className="inv-box">
            <div className="inv-1"></div>
            <div className="inv-2"></div>
            <div className="inv-3"></div>
          </div>


        <ul>
            <p className="optionBox"> 
              <p className="options" onClick={() => {GStory(risp1); playChoice();}}>{risp1}</p>
              <p className="options" onClick={() => {GStory(risp2); playChoice();}}>{risp2}</p>
            </p>
          <audio src={choicesnd} ref={choiceRef} volume={0.5}  />
        </ul>
       
      </div>
      
      </div>
    );
  };
  return(
    <>
     <StoryGame/></>
  )
}
export default PixelN;