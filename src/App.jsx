import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./TodoList";
import DataTable from "./table";
import Calclator from "./calulator/calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        <p className="test">first try</p>
        {/* <input type="text" placeholder="search"></input>
        <button>Add</button> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
      {/* <div className="cart2">
        <button className="btn1">Delete</button>
        <button className="btn2">Edit</button>
      </div> */}
      {TodoList()}
      <Calclator />
      <DataTable />
    </>
  );
}

export default App;
