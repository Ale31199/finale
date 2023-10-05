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
      //////////////////////////////////////////////////////////////////////

      const storia={
        t0: "Welcome to Pixel Nightmare! the interactive adventure game where every decision you make can have different consequences on the event of the story.\n Are you ready to help Glitchy escape the mysterious place he's imprisoned in?",
        
        r0: ["Yes, I'm ready to help him to get him free",
         "Maybe not now, I'm a little bit scared at the moment"],
        ////
        
        t1:
        "CHAPTER ONE: AWAKENING IN THE CASTLE: The protagonist awakens in a dark and dusty cell within an ancient, pixelated castle. Their mind is clouded, but they immediately hear a distorted voice coming from a glitched device they hold in their hand. It's you, the one who will help them escape from this cursed place. After looking around, the protagonist finds two options and can communicate directly with the you:  Protagonist: 'Hello? Can anyone hear me? My name is Glitchy and it's like I'm trapped in a pixelated nightmare... Can you hear me?'",
        
        r1:'I hear you loud and clear!',
        
        ////
        t2: "Oh that's understandable, sorry to hear you're not raedy to help the poor Glitchy... Don't worry, you can come back anytime to start the adventure. Reload the page to restart the game.",
        ////

        t3: "Oh thanks god! Somehow I'm trapped in here and I have no idea of how got in this horrible place. Now that there's you, maybe you can help me giving me some tips of what to do. Like now, what should I do? Explore the cell for some clues and maybe finding something useful or check the broken window?",
        r2:["Explore the cell and see what you can find.", "Check the broken window"],
        /////

        t4: "I checked the cell and I found a dead body with a letter inside his jacket's pocket. The letter says 'I don't have much time left, but in case you're reading this check the mfosinibcisris...'. The letter seems pretty old and consumated, that means I can't read the rest of it. Damn, we gotta find something else here... Oh look I found a knife! He could have used that to defend him self from somthing or someone! Should I take it?...",
        r3:["Of course! it can be super useful for later!", "No, just leave it there. Nobody is gonna hurt you."],
        ////

        t5: "Ok, let me see... Ohh shit, I can't go through... the window is too small from me to get out... what do I do now?..",
        r4:["Ohh damn, then proceed to check the cell"],
        ////

        t6: "Ok then, wise choice I'll take it just in cas... oh wait... omg no, no no no... the guard is coming in! but I got the knife, so I'm gonna kill him before he kills me... ok ok, what should I do? tell me quick! *guard gets closer to the cell*",
        r5:["Hide behind the dead body and fake your death","Fight him directly"],
        ////

        t7: "Oh no, no no no... the guard is coming in, fuck no! I have to do something.. *guard gets closer to the cell* QUICK!!..",
        r6:["Hide behind the dead body and fake your death","Fight him directly"],
        ////

        t8:"Ok, good idea.. I'm too afraid to die in here also don't know how to fight, so I'll fake my death behind this rotten body and hope he goes away... *guard opens the cell*",
        r7: "Wait for Glitchy...",
        ////

        t9: "He's opening the cell! I'll hide the device so I can fight him, hold on I hope I'll be back, if not.... well, thanks for your help <3... *hide the device*",
        r8: "Wait for Glitchy...",
        ////

        t10: "Are you sure?... fine I'll do that but I'm so fucking scared he looks too strong *guard opens the cell*. Please don't ARRRHGHGHGJKVMFKLMSkrskn *Connection Lost... game over*",
        r9: "Retry...",
        ////
       
        t11:"Heyyy... you still here?... he's gone away! lucky for me I didn't get killed. But now, there's a problem, I gotta find another way if I don't want to get killed next time, what do you think sho.... OMG hold on! he dropped the key on the floor, I didn't notice that I was so scared. Damn I'm so lucky!, ok now let's get out...",
        r10:"Wowww that's amazing! yes, now open the cell",
        ////

        t12:"Heyyy... you still here?... I did it, I fucking killed him! I took a while I'm sorry if I made you wait for so long, I had to cover my cuts I got from the fight... he's dead now, fuck I gotta hide him with the other dead body... also I found the key to get out! amazing isn't it? now I wonder, should I disguise myself with his clothes so nobody is gonna suspect or I just leave before they see me?",
        r11: ["Disguise and get out so you're safer","Just leave before they get you"],
        ////

        t13: "Phew! That was a close call, but thanks to your guidance, I managed to escape the cell. However, as I step out into the corridor, I realize that this castle is far from abandoned. The air is heavy with an eerie silence, and there's a sense of foreboding that hangs in the atmosphere. As I look ahead, I see multiple paths stretching out before me. To the left, there's a grand staircase that leads upward, its steps worn and ancient. To the right, there's a narrow passageway that disappears into darkness. I can't help but feel a shiver down my spine as I consider the possibilities.",
        r12: "Continue",
        ////

        t14:"Once again, I need your help. Which path should I choose? Should I ascend the grand staircase, hoping to find answers on the upper floors? Or should I venture into the mysterious depths of the narrow passageway? I trust your judgment, and I'm counting on your guidance to navigate the dangers of this castle and uncover the truth behind my imprisonment here.",
        r13:["Ascend the Grand Staicase","Explore the Mysterious Depths"],
        ////
        t15: "To be Continue....     Thanks for playing this demo!",

        }

      /////////////////////////////////////////////////////////////////////

      const GStory=(rispo)=>{

     if(text === storia.t0 && rispo === storia.r0[0]){
      setTimeout(()=>{
      settext(storia.t1)
      setrisp1(storia.r1)
      setrisp2('')
      setshow(true)
    },1500)
     } else if(text === storia.t1 && rispo === storia.r1){
      setTimeout(()=>{
      settext(storia.t3)
      setrisp1(storia.r2[0])
      setrisp2(storia.r2[1])
      setshow(false)
    }, 1500)
     } else if(text === storia.t0 && rispo === storia.r0[1]){
      setTimeout(()=>{
      settext(storia.t2)
      setrisp1('')
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t3 && rispo === storia.r2[0]){
      setTimeout(()=>{
      settext(storia.t4)
      setrisp1(storia.r3[0])
      setrisp2(storia.r3[1])
      setshow(false)
    }, 1500)
     }else if(text === storia.t3 && rispo === storia.r2[1]){
      setTimeout(()=>{
      settext(storia.t5)
      setrisp1(storia.r4[0])
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t5 && rispo === storia.r4[0]){
      setTimeout(()=>{
      settext(storia.t4)
      setrisp1(storia.r3[0])
      setrisp2(storia.r3[1])
      setshow(false)
    }, 1500)
     }else if(text === storia.t4 && rispo === storia.r3[0]){
      setTimeout(()=>{
      settext(storia.t6)
      setrisp1(storia.r5[0])
      setrisp2(storia.r5[1])
      setshow(false)
    }, 1500)
     }else if(text === storia.t4 && rispo === storia.r3[1]){
      setTimeout(()=>{
      settext(storia.t7)
      setrisp1(storia.r6[0])
      setrisp2(storia.r6[1])
      setshow(false)
    }, 1500)
     }else if(text === storia.t6 && rispo === storia.r5[0]){
      setTimeout(()=>{
      settext(storia.t8)
      setrisp1(storia.r7)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t6 && rispo === storia.r5[1]){
      setTimeout(()=>{
      settext(storia.t9)
      setrisp1(storia.r8)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t7 && rispo === storia.r6[0]){
      setTimeout(()=>{
      settext(storia.t8)
      setrisp1(storia.r7)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t7 && rispo === storia.r6[1]){
      setTimeout(()=>{
      settext(storia.t10)
      setrisp1(storia.r9)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t10 && rispo === storia.r9){
      setTimeout(()=>{
      settext(storia.t7)
      setrisp1(storia.r6[0])
      setrisp2(storia.r6[1])
      setshow(false)
    }, 1500)
     }else if(text === storia.t8 && rispo === storia.r7){
      setTimeout(()=>{
      settext(storia.t11)
      setrisp1(storia.r10)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t9 && rispo === storia.r8){
      setTimeout(()=>{
      settext(storia.t12)
      setrisp1(storia.r11[0])
      setrisp2(storia.r11[1])
      setshow(false)
    }, 1500)
     }else if(text === storia.t11 && rispo === storia.r10){
      setTimeout(()=>{
      settext(storia.t13)
      setrisp1(storia.r12)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t12 && rispo === storia.r11[0]){
      setTimeout(()=>{
      settext(storia.t13)
      setrisp1(storia.r12)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t12 && rispo === storia.r11[1]){
      setTimeout(()=>{
      settext(storia.t13)
      setrisp1(storia.r12)
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t13 && rispo === storia.r12){
      setTimeout(()=>{
      settext(storia.t14)
      setrisp1(storia.r13[0])
      setrisp2(storia.r13[1])
      setshow(false)
    }, 1500)
     }else if(text === storia.t14 && rispo === storia.r13[0]){
      setTimeout(()=>{
      settext(storia.t15)
      setrisp1('')
      setrisp2('')
      setshow(false)
    }, 1500)
     }else if(text === storia.t14 && rispo === storia.r13[1]){
      setTimeout(()=>{
      settext(storia.t15)
      setrisp1('')
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