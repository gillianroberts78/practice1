import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click below to learn about the country
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Spain"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Spain
        </a>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Portugal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Portugal
        </a>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Scotland"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Scotland
        </a>
      </header>
    </div>
  );
}

export default App;
