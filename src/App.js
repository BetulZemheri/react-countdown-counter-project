import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(100);
  useEffect (() => {
    if(timer !== 0) {
      const interval = setInterval(() => {
        setTimer(timer-1);
      },1000);
      return () => clearInterval(interval);
    }
    document.title = timer;
  },)

  return (
    <div className="App">
      <h1 style={{textAlign:"center", margin:"90px", fontSize:"40px", fontFamily:"cursive"}}>COUNTDOWN COUNTER </h1>
     <div style={{height:"250px",width:"250px",backgroundColor:"rgb(252, 179, 44)",borderRadius:"50%",color:"rgb(45, 45, 45)",fontSize:"85px",margin:"70px auto",lineHeight:"250px", textAlign: "center"}}>{timer}</div>
    </div>
  );
}

export default App;
