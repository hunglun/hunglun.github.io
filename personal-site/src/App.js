import logo from './logo.svg';
import './App.css';
import projects from './components/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Personal Projects 
        </h1>
        
        {projects.map(p =>   <a href={p.url} className="App-link" alt={p.description}>{p.title}</a>)}
      
        
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
