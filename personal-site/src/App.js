import logo from './logo.svg';
import './App.css';

const projects = [
  { title: "Notes Keeper", url:"keeper", description: "Note taking app with blockchain backend [WIP]" },
  { title: "Tic Tae Toe", url:"tic-tac-toe-with-reactjs", description: "Tic Tae Toe game with AI player [WIP]" }
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Personal Projects 
        </h1>
        
        {projects.map((p) => { <a href={p.url} className="App-link">{p.title}</a> })}
        <a href={projects[0].url} className="App-link">{projects[0].title}</a>
        
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
