import React, {useState,useEffect} from 'react';

const Clock = ()=> {

    const [hora,setHora] = useState('');

   function zero(a) {
    return a<10? '0'+a : a;
   }
   
   useEffect(()=>{

     const interval = setInterval(()=>{
        let data = new Date();
        let hour = data.getHours()
        let min = data.getMinutes()
        let sec = data.getSeconds()
        let d = zero(hour)+':'+zero(min)+':'+zero(sec);
        setHora(d);
        
        return ()=>clearInterval(interval);
     },1000);
   });
    
    return(
        <div>
            <h2 className="clock">{hora}</h2>
        </div>
    );
}

export default Clock;
