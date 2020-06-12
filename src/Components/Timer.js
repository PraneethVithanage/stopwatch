import React, { useState, useEffect } from 'react';
import Calculate from  './Calculate'

let preTime = 0;

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0)
  

  
  
   function toggle() {
     setIsActive(!isActive);
     if(isActive){
      preTime = seconds
      setTime(seconds)
      props.setTotalTime(props.totalTime + seconds/10)
    }

  }

  function reset() {
    props.setTotalTime(props.totalTime - seconds/10)
    setSeconds(0);
    setIsActive(false);
  }

 
  

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds (seconds => seconds + 1);
      }, 100);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    
    <div>
    <div><Calculate time1 ={time/10}/></div>  
    <h1>Timer 1 </h1>
      <div className="time">
        {seconds/10}s
        
      </div>
      <div className="row">
        <button 
        className={` button-primary stopwatch-btn-gre button -${isActive ? 'active' : 'inactive'}`} 
        onClick={toggle} 
        >
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button className="stopwatch-btn-gre button" onClick={reset}>
          Reset
        </button>
      </div>

      
    </div>
  );
};

export default Timer;