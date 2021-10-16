import './App.css';
import countapi from 'countapi-js';


//Gets Count of site visits from Daniellescounters
function getDanielleCount() {
  fetch('https://api.countapi.xyz/hit/daniellescounters/1ccb732e-b55a-4404-ad3f-0f99c02fe44', { method: 'GET' })
  .then (response => response.json())
  .then (data => alert('This site has been visited '+(data.value)+' times!')
  )
}

//Gets Count of site visits for Danielles counters using xhr 
function xhrCount() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'https://api.countapi.xyz/hit/daniellescounters/1ccb732e-b55a-4404-ad3f-0f99c02fe44');
  xhr.responseType = "json";
  xhr.onload = function() {
    alert(`Danielle's Counters has been visited ${this.response.value} times!`);
  }
  xhr.send();
}

//Gets Count of site visits for all of CountApi 
function countApijs() {
  countapi.visits().then((result) => {
    console.log(result.value);
    alert(`Countapi.xyz has been visited ${result.value} times!`);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getDanielleCount}>Total API Calls for Danielle's Counters (Fetch Method)</button>       
        <button onClick={xhrCount}>Total API Calls for Danielle's Counters (XHR Method)</button>
        <button onClick={countApijs}>Total API Calls for Countapi.xyz using CountApi-js </button>
      </header>
    </div>   
  );
}

export default App;
