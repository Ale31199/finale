import logo from './logo.svg';
import './homepage.css';
import React, {useState, useRef, useEffect} from 'react';
import home from './im/home.png';
import src from './im/search.png';
import devices from './im/devices.png';
import friends from './im/friends.png';
import library from './im/library.png';
import medium from './im/medium-volume.png';
import mic from './im/microphone.png';
import library2 from './im/music-album.png';
import mute from './im/mute.png';
import pausee from './im/pause.png';
import play from './im/play-button-arrowhead.png';
import prev from './im/previous.png';
import queue from './im/queue.png';
import repeat from './im/repeat.png';
import shuffle from './im/shuffle.png'; 
import star from './im/star2 - Copy.jpg';
import r1 from './im/R2.jpg';
import r2 from './im/R3.jpg';
import r3 from './im/R4.jpg';
import r4 from './im/R5.jpg';
import r5 from './im/R6 .jpg';
import r6 from './im/R7 .jpg';
import r7 from './im/R8.jpg';
import r8 from './im/R9 .jpg';
import r9 from './im/R10.jpg';
import r10 from './im/R11 .jpg';
import hrt from './im/heart.png';
import user from './im/user.png';
import starfield from './songs/starfield.mp3';
import villain from './songs/bornvillain.mp3';
import burn from './songs/burninto.mp3';
import selfcontrol from './songs/selfcontrol.mp3';
import masterpuppets from './songs/masterpuppets.mp3';
import entermatrix from './songs/entermatrix.mp3';
import alleyes from './songs/alleyes.mp3';
import becausebonjovi from './songs/becausebonjovi.mp3';
import thismeanswar from './songs/thismeanswar.mp3';
import bad from './songs/bad.mp3';
import someday from './songs/someday.mp3';



const HomePage=()=> {
  const [open, setOpen]=useState(false);
  const [cerca, setCerca]=useState(false);
  const [pause, setPause]=useState(false);
  const [mutex, setMute]=useState(false);
  const [songstar, setsongstar]=useState(false)
  const [songvilla, setsongvilla]=useState(false)
  const [songbur, setsongbur]=useState(false)
  const [songself, setsongself]=useState(false)
  const [songmaster, setsongmaster]=useState(false)
  const [songenter, setsongenter]=useState(false)
  const [songally, setsongally]=useState(false)
  const [songbejon, setsongbejon]=useState(false)
  const [songthis, setsongthis]=useState(false)
  const [songbad, setsongbad]=useState(false)
  const [songsome, setsongsome]=useState(false)
  const starf =useRef(null);
  const villa=useRef(null);
  const bur = useRef(null);
  const selfcon =useRef(null);
  const masterpu =useRef(null);
  const enterma =useRef(null);
  const ally =useRef(null);
  const bejon =useRef(null);
  const thisme=useRef(null);
  const badd =useRef(null);
  const somed =useRef(null);
  const [songplaying, setsongplaying]=useState('')
  const [artistplaying, setartistplaying]=useState('')
  const [imgplaying, setimgplaying]=useState()

  

   const playStar=()=>{
    if(songstar){
     starf.current.pause()
     setsongstar(false)
     setPause(false)
   } else {
    starf.current.play()
    setsongstar(true)
    setsongplaying('Starfield Official Theme')
    setartistplaying('Bethesda Games Studio')
    setimgplaying(star)
    setPause(true)
   }
  }

  const playBorn=()=>{
    if(songvilla){
     villa.current.pause()
     setsongvilla(false)
     setPause(false)
   } else {
    villa.current.play()
    setsongvilla(true)
    setsongplaying('Born Villain')
    setartistplaying('Marilyn Manson')
    setimgplaying(r1)
    setPause(true)
   }
  }

  const playBurn=()=>{
    if(songbur){
     bur.current.pause()
     setsongbur(false)
     setPause(false)
   } else {
    bur.current.play()
    setsongbur(true)
    setsongplaying('Burn Into The Ground')
    setartistplaying('Nickelback')
    setimgplaying(r2)
    setPause(true)
   }
  }

  const playSelf=()=>{
    if(songself){
     selfcon.current.pause()
     setsongself(false)
     setPause(false)
   } else {
    selfcon.current.play()
    setsongself(true)
    setsongplaying('Self Control')
    setartistplaying('Laura Branigan')
    setimgplaying(r3)
    setPause(true)
   }
  }

  const playMaster=()=>{
    if(songmaster){
     masterpu.current.pause()
     setsongmaster(false)
     setPause(false)
   } else {
    masterpu.current.play()
    setsongmaster(true)
    setsongplaying('Master of Puppets')
    setartistplaying('Metallica')
    setimgplaying(r4)
    setPause(true)
   }
  }

  const playMatrix=()=>{
    if(songenter){
     enterma.current.pause()
     setsongenter(false)
     setPause(false)
   } else {
    enterma.current.play()
    setsongenter(true)
    setsongplaying('Into The Matrix')
    setartistplaying('Aurora')
    setimgplaying(r5)
    setPause(true)
   }
  }

  const playEyes=()=>{
    if(songally){
     ally.current.pause()
     setsongally(false)
     setPause(false)
   } else {
    ally.current.play()
    setsongally(true)
    setsongplaying('All Eyes On Me')
    setartistplaying('Eminem')
    setimgplaying(r6)
    setPause(true)
   }
  }

  const playJovi=()=>{
    if(songbejon){
     bejon.current.pause()
     setsongbejon(false)
     setPause(false)
   } else {
    bejon.current.play()
    setsongbejon(true)
    setsongplaying('Because We Can')
    setartistplaying('Bon Jovi')
    setimgplaying(r7)
    setPause(true)
   }
  }

  const playWar=()=>{
    if(songthis){
     thisme.current.pause()
     setsongthis(false)
     setPause(false)
   } else {
    thisme.current.play()
    setsongthis(true)
    setsongplaying('This Means War')
    setartistplaying('Nickelback')
    setimgplaying(r8)
    setPause(true)
   }
  }

  const playBad=()=>{
    if(songbad){
     badd.current.pause()
     setsongbad(false)
     setPause(false)
   } else {
    badd.current.play()
    setsongbad(true)
    setsongplaying('Bad')
    setartistplaying('Michael Jackson')
    setimgplaying(r9)
    setPause(true)
   }
  }

  const playSome=()=>{
    if(songsome){
     somed.current.pause()
     setsongsome(false)
     setPause(false)
   } else {
    somed.current.play()
    setsongsome(true)
    setsongplaying('Someday')
    setartistplaying('Nickelback')
    setimgplaying(r10)
    setPause(true)
   }
  }
   
  


  const inMute=()=>{
    if (mutex){
      setMute(false)
    } else {
      setMute(true)
    }
  }

  const inPause=()=>{
    if (pause){
      setPause(false)
    } else {
      setPause(true)
    }
  }



  const trova=()=>{
    if (cerca){
      setCerca(false)
    }else{
      setCerca(true)
    }
  }

  const openHeader=()=>{
    if (open){
      setOpen(false)
    } else{
      setOpen(true)
    }
  }


  const inp = cerca ? {
visibility:'visible'
  }
  :{};

  const homesrc = open ? {
    alignItems:'start',
    width:'320px'
    }
    :{};

  const libraryy = open ? {
  width:'320px',
  alignItems:'start',
  position:'relative',
  left:'-295px'
  }
  :{};

  const song = open ? {
    display:'flex',
    flexDirection:'row',
    height:'70px',
    borderRadius:'5px',
    marginBottom:'-10px'
    }
    :{};

  const title = open ? {
    visibility:'visible',
    top:'5px',
    left:'15px',
    fontWeight:'bold',
    
    }
    :{};

    const artist = open ? {
      visibility:'visible',
      top:'-5px',
    left:'14px',
    color:'grey'
      }
      :{};

        const text = open ? {
          visibility:'visible',
          }
          :{};

          const find = open ? {
            visibility:'visible',
            }
            :{};

            const libr = open ? {
              left:'30px',
              }
              :{};

              const libra = open ? {
                left:'75px',
                visibility:'visible',
                top:'-0px',
          
                }
                :{};
              
                const fixed = open ? {
                  flexDirection:'row',
                  display:'inline-flex',
                  left:'18px'
                  }
                  :{};

                  const homex = open ? {
                    left:'14px',
                    }
                    :{};

                    const srcx = open ? {
                      left:'14px',
                      }
                      :{};

                      const back = open ? {
                        width:'270px',
                        left:'3px',
                        display:'flex',
                        flexDirection:'column'
                        }
                        :{};

                        
                        const main = open
                        ? {
                            width: '1490px',
                            left: '320px',
                        
                          }
                        : {};
                        

                          const grid1 = open ? {
                           zoom:'82.5%'
                             }
                             :{};
                             const grid2 = open ? {
                              zoom:'82.5%'
                                }
                                :{};

                                const barr = open ? {
                                  width:'1490px'
                                    }
                                    :{};

                                    const pla = pause ? {
                                      visibility:'hidden'
                                        }
                                        :{};

                                        const pa = pause ? {
                                          visibility:'visible'
                                            }
                                            :{};

                                            const volu = mutex ? {
                                              visibility:'hidden'
                                                }
                                                :{};
        
                                                const mutee = mutex ? {
                                                  visibility:'visible'
                                                    }
                                                    :{};

                                                    const progr = mutex ? {
                                                      backgroundColor:'#353535'
                                                        }
                                                        :{};

                      
  

  return (
    <div className="Appe">

   
     
     <div className='homesrc' style={homesrc}>
      
      <img className='home'style={homex} src={home}></img>
      <p className='texty' style={text}>Home</p>
      
      <img className='src' onClick={trova} style={srcx} src={src}></img>
      <p className='textt' style={find}>Search</p>

     </div>



       <div className='library' style={libraryy}>
         <div className='fixed' style={fixed}>
           <img  onClick={openHeader} style={libr} className='lib' src={library}></img>
           <p className='libra' style={libra}>Your Library</p>
         </div>

          <div className='backg' style={back}>
            <div className='song'style={song} onClick={playStar}>
              <audio src={starfield} ref={starf}></audio>
              <img className='star' src={star}></img>
              <div className='names'>
               <p className='title'style={title}>Starfield Official Theme</p>
               <p className='artist'style={artist}>Bethesda Games Studio</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playBorn}>
            <audio src={villain} ref={villa}></audio>
              <img className='star' src={r1}></img>
              <div className='names'>
               <p className='title'style={title}>Born Villain</p>
               <p className='artist'style={artist}>Marilyn Manson</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playBurn}>
            <audio src={burn} ref={bur}></audio>
              <img className='star' src={r2}></img>
              <div className='names'>
               <p className='title'style={title}>Burn Into The Ground</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playSelf}>
            <audio src={selfcontrol} ref={selfcon}></audio>
              <img className='star' src={r3}></img>
              <div className='names'>
               <p className='title'style={title}>Self Control</p>
               <p className='artist'style={artist}>Laura Branigan</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playMaster}>
            <audio src={masterpuppets} ref={masterpu}></audio>
              <img className='star' src={r4}></img>
              <div className='names'>
               <p className='title'style={title}>Metallica</p>
               <p className='artist'style={artist}>Master Of Puppets</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playMatrix}>
            <audio src={entermatrix} ref={enterma}></audio>
              <img className='star' src={r5}></img>
              <div className='names'>
               <p className='title'style={title}>Into The Matrix</p>
               <p className='artist'style={artist}>Aurora</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playEyes}>
              <audio src={alleyes} ref={ally}></audio>
              <img className='star' src={r6}></img>
              <div className='names'>
               <p className='title'style={title}>All Eyes On Me</p>
               <p className='artist'style={artist}>Eminem</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playJovi}>
            <audio src={becausebonjovi} ref={bejon}></audio>
              <img className='star' src={r7}></img>
              <div className='names'>
               <p className='title'style={title}>Because We Can</p>
               <p className='artist'style={artist}>Bon Jovi</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playWar}>
            <audio src={thismeanswar} ref={thisme}></audio>
              <img className='star' src={r8}></img>
              <div className='names'>
               <p className='title'style={title}>This Means War</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playBad}>
            <audio src={bad} ref={badd}></audio>
              <img className='star' src={r9}></img>
              <div className='names'>
               <p className='title'style={title}>Bad </p>
               <p className='artist'style={artist}>Micheal Jackson</p>
              </div> 
            </div>

            <div className='song'style={song} onClick={playSome}>
            <audio src={someday} ref={somed}></audio>
              <img className='star' src={r10}></img>
              <div className='names'>
               <p className='title'style={title}>Best Of Nickelback Volume 1</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>
          </div>
        </div>


        <div className='mainpage' style={main}>

              <h1 className='hi'>Good afternoon</h1>


              <div className='gridbenv' style={grid1}>
                <div className='liked'>
                  <div className='boxpic'>
                  <img className='starx' src={hrt}></img>
                  </div>
                  <p className='text2x'>Liked Songs</p>
                  <img className='play'src={play}></img>
                </div>
                <div className='liked' onClick={playBorn} >
                <audio src={villain} ref={villa}></audio>
                  <div className='boxpic'>
                  <img className='star2' src={r1}></img>
                  </div>
                  <p className='text2x'>Marilyn Manson's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
                <div className='liked' onClick={playSelf} >
                <audio src={selfcontrol} ref={selfcon}></audio>
                  <div className='boxpic'>
                  <img className='star2' src={r3}></img>
                  </div>
                  <p className='text2x'>Laura Branigan's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
              </div>

              <div className='gridbenv2'style={grid2} >
              <div className='liked' onClick={playMaster}>
              <audio src={masterpuppets} ref={masterpu}></audio>
                  <div className='boxpic'>
                  <img className='star2' src={r4}></img>
                  </div>
                  <p className='text2x'>Metallica's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
                <div className='liked'onClick={playEyes} >
                <audio src={alleyes} ref={ally}></audio>
                  <div className='boxpic'>
                  <img className='star2' src={r6}></img>
                  </div>
                  <p className='text2x'>Eminem's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
                <div className='liked' onClick={playBad} >
                <audio src={bad} ref={badd}></audio>
                  <div className='boxpic'>
                  <img className='star2' src={r9}></img>
                  </div>
                  <p className='text2x'>Micheal Jackson's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
                </div>



                
                <div className='playlist'>
                 
                     <h2 className='hi2'>My Favorite Songs</h2>
                
                     <p className='show'>Show all</p>
                   
                  <div className='singer'onClick={playMaster} >
                  <audio src={masterpuppets} ref={masterpu}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r4}></img>
                  <img className='play2'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Master Of Puppets</p>
                    <p className='namex'>Metallica</p>
                   </div>
                  </div>


                  <div className='singer'onClick={playStar} >
                  <audio src={starfield} ref={starf}></audio>
                   <div className='artpic'>
                  <img className='star3' src={star}></img>
                  <img className='play3'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Starfield OST</p>
                    <p className='namex'>Bethesda Games Studio and more</p>
                   </div>
                  </div>

                  <div className='singer' onClick={playSome} >
                  <audio src={someday} ref={somed}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r10}></img>
                  <img className='play4'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>The Best of Nickelback</p>
                    <p className='namex'>Nickelback</p>
                   </div>
                  </div>
                </div>


                <div className='playlist2'>
                 
                     <h2 className='hi2'>My Most Played Songs</h2>
                
                     <p className='show2'>Show all</p>
                   
                  <div className='singer'onClick={playSelf} >
                  <audio src={selfcontrol} ref={selfcon}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r3}></img>
                  <img className='play2'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Self Control</p>
                    <p className='namex'>Laura Branigan</p>
                   </div>
                  </div>


                  <div className='singer' onClick={playEyes}>
                  <audio src={alleyes} ref={ally}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r6}></img>
                  <img className='play5'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>All Eyes On Me</p>
                    <p className='namex'>Eminem</p>
                   </div>
                  </div>

                  <div className='singer' onClick={playBad} >
                  <audio src={bad} ref={badd}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r9}></img>
                  <img className='play6'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Bad</p>
                    <p className='namex'>Michael Jackson</p>
                   </div>
                  </div>

                  <div className='singer' onClick={playBorn}>
                  <audio src={villain} ref={villa}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r1}></img>
                  <img className='play7'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Born Villain</p>
                    <p className='namex'>Marilyn Manson</p>
                   </div>
                  </div>

                  <div className='singer' onClick={playBurn}>
                  <audio src={burn} ref={bur}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r2}></img>
                  <img className='play8'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Burn Into The Ground</p>
                    <p className='namex'>Nickelback</p>
                   </div>
                  </div>

                  <div className='singer' onClick={playWar}>
                  <audio src={thismeanswar} ref={thisme}></audio>
                   <div className='artpic'>
                  <img className='star3' src={r8}></img>
                  <img className='play9'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>This Means War</p>
                    <p className='namex'>Nickelback</p>
                   </div>
                  </div>





                </div>


                <div className='playlist3'>
                 
                     <h2 className='hi2'>My Favorite Artist</h2>
                
                     <p className='show3'>Show all</p>
                   
                  <div className='singer' onClick={playBorn}>
                  <audio src={villain} ref={villa}></audio>
                   <div className='artpic'>
                  <img className='star4' src={r1}></img>
                  <img className='play2'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Marilyn Manson</p>
                    <p className='namex'>Artist</p>
                   </div>
                  </div>


                  <div className='singer' onClick={playMaster}>
                  <audio src={masterpuppets} ref={masterpu}></audio>
                   <div className='artpic'>
                  <img className='star4' src={r4}></img>
                  <img className='play5'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Metallica</p>
                    <p className='namex'>Artist</p>
                   </div>
                  </div>

                  <div className='singer'onClick={playJovi} >
                  <audio src={becausebonjovi} ref={bejon}></audio>
                   <div className='artpic'>
                  <img className='star4' src={r7}></img>
                  <img className='play6'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Bon Jovi</p>
                    <p className='namex'>Artist</p>
                   </div>
                  </div>

                  <div className='singer'onClick={playWar} >
                  <audio src={thismeanswar} ref={thisme}></audio>
                   <div className='artpic'>
                  <img className='star4' src={r10}></img>
                  <img className='play7'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Nickelback</p>
                    <p className='namex'>Artist</p>
                   </div>
                  </div>

                  
                </div>

                <div className='bar' style={barr}>
                <button className='but'>&lt;</button>
                <button className='but2'>&lt;</button>

                <img className='friends' src={friends}></img>
                <img className='user' src={user}></img>

               <div className='theinp' style={inp}>
                <input className='input'
                placeholder='What do you want to listen to?'></input>
                <img className='src2' src={src}></img>
                </div>
                 </div>
            

            
          
          
          
          
              </div>

              <div className='musicbar'>
               <div className='songxx'>
                 <img className='starxx' src={imgplaying}></img>
               <div className='namesx'>
                 <p className='titlex'>{songplaying}</p>
                 <p className='artistx'>{artistplaying}</p>
                 <img className='heart' src={hrt}></img>
               </div> 

               <div className='playbar'>
                <img className='shuffle' src={shuffle}></img>
                <img className='prev' src={prev}></img>
                <img className='playy' onClick={inPause} style={pla} src={play}></img>
                <img className='pause'onClick={inPause} style={pa} src={pausee}></img>
                <img className='next' src={prev}></img>
                <img className='repeat' src={repeat}></img>
                <div class="probar">
                <div class="progress"></div>
                </div>

               </div>
               <div className='timesong'>
               <p className='time'>1:21</p>
<p className='time'>3:20</p>
</div>


<div className='rightside'>
<img className='mic' src={mic}></img>
<img className='queue' src={queue}></img>
<img className='device' src={devices}></img>
<img className='medium' onClick={inMute} style={volu} src={medium}></img>
<div class="probarx">
                <div style={progr} class="progressx"></div>
                </div>
<img className='mute' onClick={inMute} style={mutee} src={mute}></img>
</div>

              </div>


              </div>

              <div className='menumobile'>
   <img className='homemobile' src={home}></img>
   <img className='srcmobile' src={src}></img>
   <img  className='libmobile' src={library}></img>
    </div>  
    </div>


  );
}

export default HomePage;