import Weather from "./Weather"
import './Weather.css';

function App() {
  return (
    <div className="App">
      <div className="container">
         <div className="Weather">
      <header>
       
       <Weather defaultCity="Barcelona"/>
      </header>
    </div>
    </div>
    </div>
    
 
  );
}

export default App;
