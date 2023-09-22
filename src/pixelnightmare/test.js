import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import pixgif from "./castlenight.jpg";
import blackwall from "./blackwall2.jpg";
import logo from "./logo2.png";
import gif from "./knight-unscreen.gif";
import bullet from "./background.wav";
import choicesnd from './beep.wav';

const PixelN=()=>{
  const [start, setStart] = useState(false);

  const story = {
    start: {
      text: "Welcome to 'Pixel Nightmare!'. Are you ready to help Glitchy to escape the mysterious castle where he's imprisoned in? It's gonna be an interactive adventure, so the decision you make can have a little influence to the story, so are you ready to proceed?",
      choices: [
        {
          text: "Yes, I'm ready to help him to find his freedom!",
          nextEvent: "startthegame",
        },
        {
          text: "Maybe not now, I don't feel ready yet...",
          nextEvent: "gameover",
        },
      ],
    },
    startthegame: {
      text: "CHAPTER ONE: AWAKENING IN THE CASTLE: The protagonist awakens in a dark and dusty cell within an ancient, pixelated castle. Their mind is clouded, but they immediately hear a distorted voice coming from a glitched device they hold in their hand. It's you, the one who will help them escape from this cursed place. After looking around, the protagonist finds two options and can communicate directly with the you:  Protagonist: 'Hello? Can anyone hear me? My name is Glitchy and it's like I'm trapped in a pixelated nightmare... Can you hear me?'",
      choices: [
        { text: "I hear you loud and clear!", nextEvent: "glitchyrespond" },
        //  { text: "Esplorare la zona", nextEvent: "treasure" },
      ],
    },
    gameover: {
      text: "Oh that's understandable, sorry to hear you're not raedy to help the poor Glitchy... Don't worry, you can come back anytime to start the adventure. You can tap 'Back to main menu' to end the game and come back later soon.",
      choices: [
        //  { text: "", nextEvent: "backtothemenu" },
        // { text: "Continuare a esplorare", nextEvent: "continueExploring" },
      ],
    },
    /*  treasure: {
      text: "Hai trovato un tesoro nascosto! Hai vinto!",
      choices: [],
    },*/
    glitchyrespond: {
      text: "Oh thanks god! Somehow I'm trapped in here and I have no idea of how got in this horrible place. Now that there's you, maybe you can help me giving me some tips of what to do. Like now, what should I do? Explore the cell for some clues and maybe finding something useful or check the broken window?",
      choices: [
        {
          text: "Explore the cell and see what you can find.",
          nextEvent: "findthedead",
        },
        { text: "Check the broken window", nextEvent: "getoutbutcut" },
      ],
    },
    findthedead: {
      text: "I checked the cell and I found a dead body with a letter inside his jacket's pocket. The letter says 'I don't have much time left, but in case you're reading this check the mfosinibcisris...'. The letter seems pretty old and consumated, that means I can't read the rest of it. Damn, we gotta find something else here... Oh look I found a knife! He could have used that to defend him self from somthing or someone! Should I take it?...",
      choices: [
        {
          text: "Of course! it can be super useful for later!",
          nextEvent: "guardincell",
        },
        {
          text: "No, just leave it there. Nobody is gonna hurt you.",
          nextEvent: "guardOver",
        },
      ],
    },
    getoutbutcut: {
      text: "Ok, let me see... Ohh shit, I can't go through... the window is too small from me to get out... what do I do now?..",
      choices: [
        {
          text: "Ohh damn, then proceed to check the cell",
          nextEvent: "findthedead",
        },
      ],
    },
    guardincell: {
      text: "Ok then, wise choice I'll take it just in cas... oh wait... omg no, no no no... the guard is coming in! but I got the knife, so I'm gonna kill him before he kills me... ok ok, what should I do? tell me quick! *guard gets closer to the cell*",
      choices: [
        {
          text: "Hide behind the dead body and fake your death",
          nextEvent: "hide",
        },
        { text: "Fight him directly", nextEvent: "fight" },
      ],
    },
    guardOver: {
      text: "Oh no, no no no... the guard is coming in, fuck no! I have to do something.. *guard gets closer to the cell* QUICK!!..",
      choices: [
        {
          text: "Hide behind the dead body and fake your death",
          nextEvent: "hide",
        },
        { text: "Fight him directly", nextEvent: "fightlost" },
      ],
    },
    hide: {
      text: "Ok, good idea.. I'm too afraid to die in here also don't know how to fight, so I'll fake my death behind this rotten body and hope he goes away... *guard opens the cell*",
      choices: [{ text: "Wait for Glitchy...", nextEvent: "keydropped" }],
    },
    fight: {
      text: "He's opening the cell! I'll hide the device so I can fight him, hold on I hope I'll be back, if not.... well, thanks for your help <3... *hide the device*",
      choices: [
        {
          text: "Wait for Glitchy...",
          nextEvent: "keytake",
        },
      ],
    },
    fightlost: {
      text: "Are you sure?... fine I'll do that but I'm so fucking scared he looks too strong *guard opens the cell*. Please don't ARRRHGHGHGJKVMFKLMSkrskn *Connection Lost... game over*",
      choices: [{ text: "Retry...", nextEvent: "findthedead" }],
    },
    keydropped: {
      text: "Heyyy... you still here?... he's gone away! lucky for me I didn't get killed. But now, there's a problem, I gotta find another way if I don't want to get killed next time, what do you think sho.... OMG hold on! he dropped the key on the floor, I didn't notice that I was so scared. Damn I'm so lucky!, ok now let's get out...",
      choices: [
        {
          text: "Wowww that's amazing! yes, now open the cell",
          nextEvent: "leave",
        },
      ],
    },
    keytake: {
      text: "Heyyy... you still here?... I did it, I fucking killed him! I took a while I'm sorry if I made you wait for so long, I had to cover my cuts I got from the fight... he's dead now, fuck I gotta hide him with the other dead body... also I found the key to get out! amazing isn't it? now I wonder, should I disguise myself with his clothes so nobody is gonna suspect or I just leave before they see me?",
      choices: [
        { text: "Disguise and get out so you're safer", nextEvent: "leave" },
        { text: "Just leave before they get you", nextEvent: "leave" },
      ],
    },
    leave: {
      text: "Phew! That was a close call, but thanks to your guidance, I managed to escape the cell. However, as I step out into the corridor, I realize that this castle is far from abandoned. The air is heavy with an eerie silence, and there's a sense of foreboding that hangs in the atmosphere. As I look ahead, I see multiple paths stretching out before me. To the left, there's a grand staircase that leads upward, its steps worn and ancient. To the right, there's a narrow passageway that disappears into darkness. I can't help but feel a shiver down my spine as I consider the possibilities.",
      choices: [{ text: "Continue", nextEvent: "continue1" }],
    },
    continue1: {
      text: "Once again, I need your help. Which path should I choose? Should I ascend the grand staircase, hoping to find answers on the upper floors? Or should I venture into the mysterious depths of the narrow passageway? I trust your judgment, and I'm counting on your guidance to navigate the dangers of this castle and uncover the truth behind my imprisonment here.",
      choices: [
        { text: "Ascend the grand staircase", nextEvent: "staircase" },
        { text: "Explore the mysterious depths", nextEvent: "depths" },
      ],
    },
    staircase: {
      text: "Continue soon...",
      choices: [{ text: "", nextEvent: "" }],
    },
    depths: {
      text: "Continue soon...",
      choices: [{ text: "", nextEvent: "" }],
    },
  };

  const StoryGame = () => {
    const [currentEvent, setCurrentEvent] = useState("start");
    const [play, setplay] = useState(false)
    const [playing, setplaying]=useState('Music On')
    const audioRef = useRef(null)
    const choiceRef = useRef(null);
    const [choiceon, setchoiceon] = useState(false);

    
    const handleChoice = (nextEvent) => {
      setTimeout(()=>{
      setCurrentEvent(nextEvent);
    }, 1000)
    };
  

    const event = story[currentEvent];

    
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
 


    return (
      <div className="Appn">
        <button className="musicbutton" style={musicOn} onClick={playMusic} > {playing}
        </button> <audio  src={bullet}  ref={audioRef} autoPlay loop />
        <img src={logo} className="titlen" />
        <img src={gif} className="knight" />
        <p className="alpha">Alpha Version :) Coming Soon!</p>

      <div className="story">
        <p className="storytext">{event.text}</p>
        <ul>
          {event.choices.map((choice, index) => (
            <p className="optionBox" key={index}>
              <p
                className="options" 
                onClick={() => {handleChoice(choice.nextEvent); playChoice();}}
              >
                {choice.text}
              </p>
            </p>
          ))}
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