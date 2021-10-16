import './App.css';
import countapi from 'countapi-js';


countapi.visits().then((result) => {
  alert(result.value);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Current Hits Count</button>
      </header>
      <p id="visits">... </p>
    </div>
    
  );
}



export default App;
