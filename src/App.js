import './App.css';

const trenutnoVrijeme = new Date().getHours();
let boja="white";
console.log(trenutnoVrijeme);


if (trenutnoVrijeme>=21 || trenutnoVrijeme<=7) {
  boja="black";
}

function App() {
  
  return (
    <div className="App">
      <div style={{backgroundColor:boja}}><p>Hello</p></div>
    </div>
  );
}

export default App;
