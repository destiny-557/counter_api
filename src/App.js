import './App.css';
import countapi from 'countapi-js';


countapi.visits().then((result) => {
  alert('This button has been clicked '+(result.value)+' times!');
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button></button>
      </header>
    </div>
    
  );
}



export default App;
