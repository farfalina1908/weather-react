import Weather from "./Weather"
import './Weather.css';

function App() {
  return (
    <div className="Weather">
      <header className="Weather-wrapper">
       
       <Weather city="Barcelona"/>
      </header>
    </div>
  );
}

export default App;
