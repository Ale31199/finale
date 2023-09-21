import logo from './logo.svg';
import './homepage.css';
import React, {useState} from 'react';
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



const HomePage=()=> {
  const [open, setOpen]=useState(false);
  const [cerca, setCerca]=useState(false);
  const [pause, setPause]=useState(false);
  const [mutex, setMute]=useState(false);

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
            <div className='song'style={song}>
              <img className='star' src={star}></img>
              <div className='names'>
               <p className='title'style={title}>Starfield Official Theme</p>
               <p className='artist'style={artist}>Bethesda Games Studio</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r1}></img>
              <div className='names'>
               <p className='title'style={title}>Born Villain</p>
               <p className='artist'style={artist}>Marilyn Manson</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r2}></img>
              <div className='names'>
               <p className='title'style={title}>Burn Into The Ground</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r3}></img>
              <div className='names'>
               <p className='title'style={title}>Self Control</p>
               <p className='artist'style={artist}>Laura Branigan</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r4}></img>
              <div className='names'>
               <p className='title'style={title}>Metallica</p>
               <p className='artist'style={artist}>Master Of Puppets</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r5}></img>
              <div className='names'>
               <p className='title'style={title}>Into The Matrix</p>
               <p className='artist'style={artist}>Aurora</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r6}></img>
              <div className='names'>
               <p className='title'style={title}>All Eyes On Me</p>
               <p className='artist'style={artist}>Eminem</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r7}></img>
              <div className='names'>
               <p className='title'style={title}>Because We Can</p>
               <p className='artist'style={artist}>Bon Jovi</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r8}></img>
              <div className='names'>
               <p className='title'style={title}>This Means War</p>
               <p className='artist'style={artist}>Nickelback</p>
              </div> 
            </div>

            <div className='song'style={song}>
              <img className='star' src={r9}></img>
              <div className='names'>
               <p className='title'style={title}>Bad </p>
               <p className='artist'style={artist}>Micheal Jackson</p>
              </div> 
            </div>

            <div className='song'style={song}>
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
                <div className='liked'>
                  <div className='boxpic'>
                  <img className='star2' src={r1}></img>
                  </div>
                  <p className='text2x'>Marilyn Manson's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
                <div className='liked'>
                  <div className='boxpic'>
                  <img className='star2' src={r3}></img>
                  </div>
                  <p className='text2x'>Laura Branigan's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
              </div>

              <div className='gridbenv2'style={grid2} >
              <div className='liked'>
                  <div className='boxpic'>
                  <img className='star2' src={r4}></img>
                  </div>
                  <p className='text2x'>Metallica's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
                <div className='liked'>
                  <div className='boxpic'>
                  <img className='star2' src={r6}></img>
                  </div>
                  <p className='text2x'>Eminem's Playlist</p>
                  <img className='play'src={play}></img>
                </div>
                <div className='liked'>
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
                   
                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star3' src={r4}></img>
                  <img className='play2'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Master Of Puppets</p>
                    <p className='namex'>Metallica</p>
                   </div>
                  </div>


                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star3' src={star}></img>
                  <img className='play3'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Starfield OST</p>
                    <p className='namex'>Bethesda Games Studio and more</p>
                   </div>
                  </div>

                  <div className='singer'>
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
                   
                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star3' src={r3}></img>
                  <img className='play2'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Self Control</p>
                    <p className='namex'>Laura Branigan</p>
                   </div>
                  </div>


                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star3' src={r6}></img>
                  <img className='play5'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>All Eyes On Me</p>
                    <p className='namex'>Eminem</p>
                   </div>
                  </div>

                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star3' src={r9}></img>
                  <img className='play6'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Bad</p>
                    <p className='namex'>Michael Jackson</p>
                   </div>
                  </div>

                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star3' src={r1}></img>
                  <img className='play7'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Born Villain</p>
                    <p className='namex'>Marilyn Manson</p>
                   </div>
                  </div>

                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star3' src={r2}></img>
                  <img className='play8'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Burn Into The Ground</p>
                    <p className='namex'>Nickelback</p>
                   </div>
                  </div>

                  <div className='singer'>
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
                   
                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star4' src={r1}></img>
                  <img className='play2'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Marilyn Manson</p>
                    <p className='namex'>Artist</p>
                   </div>
                  </div>


                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star4' src={r4}></img>
                  <img className='play5'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Metallica</p>
                    <p className='namex'>Artist</p>
                   </div>
                  </div>

                  <div className='singer'>
                   <div className='artpic'>
                  <img className='star4' src={r7}></img>
                  <img className='play6'src={play}></img>
                  </div> 
                   <div className='nameart'>
                    <p className='namez'>Bon Jovi</p>
                    <p className='namex'>Artist</p>
                   </div>
                  </div>

                  <div className='singer'>
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
                 <img className='starxx' src={r8}></img>
               <div className='namesx'>
                 <p className='titlex'>This Means War</p>
                 <p className='artistx'>Nickelback</p>
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