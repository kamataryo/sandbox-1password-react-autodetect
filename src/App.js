import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="">
          <h3>Works!</h3>
          <input type="password" />
          <button type="submit">submit</button>
        </form>

        <form action="">
          <h3>Works!</h3>
          <input type="password" />
          <button type="button">submit</button>
        </form>

        <form action="">
          <h3>Works!</h3>
          <input type="password" />
          <input type="button" value="submit"></input>
        </form>

        <form>
          <h3>Works!</h3>
          <input type="password" />
          <input type="button" value="signin"></input>
        </form>

        <form>
          <h3>Not Works.</h3>
          <input type="password" />
          <input type="button" value="signi"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
