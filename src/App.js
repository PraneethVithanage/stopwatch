import React, {useState} from 'react';
import Timer from './Components/Timer';
import Timer2 from './Components/Timer2';
import Timer3 from './Components/Timer3';

import './App.css';


function App() {
  
  const [totalTime, setTotalTime] = useState(0)


  var num = 100*totalTime, num1 = 0,num2 =0 ,num3 =0;

 

  if(num/100>0){
    num3 =Math.floor(num/6000);
    num1 =Math.floor(num/100)%60;
    num2=num%100;
 }
  return (
  
   <div>
   <div className="clock-holder">
   <div className="stopwatch">
     <Timer totalTime={totalTime} setTotalTime={setTotalTime}/> 
     <Timer2 totalTime={totalTime} setTotalTime={setTotalTime}/>
     <Timer3 totalTime={totalTime} setTotalTime={setTotalTime}/> 
    </div>
    </div>
    
    <div className="display-holder">
  
    <div className="display">
      <h1>totalTime</h1>

      <span>{num3}<h3>mt</h3></span>&nbsp;&nbsp;
      <span>{num1}<h3>ss</h3></span>&nbsp;&nbsp;
      <span>{num2}<h3>ms</h3></span>&nbsp;&nbsp;
      
      <button className="stopwatch-btn-gre button" onClick={()=>setTotalTime(0)}>Reset</button>
    </div> 
    </div> 
    </div>

  
 


      
  );

  

}





export default App;