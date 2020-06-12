import React, { useState, useEffect } from 'react';
import Calculate from  './Calculate'
const Timer3= (props) => {

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0)
  

  
  
   function toggle() {
     setIsActive(!isActive);
    if(isActive){
      setTime(seconds)
      props.setTotalTime(props.totalTime + seconds)
    }

  }

  function reset() {
    setSeconds(0);
    props.setTotalTime(props.totalTime - seconds)
    setIsActive(false);
  }

 
  

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds (seconds => seconds + 10);
      }, 10000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    
    <div>
    <div><Calculate time3 ={time}/></div>  
    <h1>Timer 1 </h1>
      <div className="time">
        {seconds}s
        
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

export default Timer3;