import React, {useState} from 'react';
import './xflies.css';



const Xflies =()=>{
    const [load, setload]=useState(false);


    const loadNow=()=>{
        if(load){
            setload(false)
        } else{
            setload(true);
        }
    }



    const loadingBar = {
        width:'300px',
        height:'30px',
        backgroundColor:'black',
    }
    const loadBar = load ? {
        width:'100%',
        height:'30px',
        backgroundColor:'green',
    }
:{};

    return(
    <div className="test">
<p className='fly'>Fly with aliens, book now!</p>
<div style={loadingBar}>
    <div style={loadBar} className='loadBar'></div>
</div>
<button onClick={loadNow}>Load</button>
    </div>


    )
}
export default Xflies