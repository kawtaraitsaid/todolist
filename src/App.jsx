import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./TodoList";
import DataTable from "./table";
import Mycalc from "./Mycalc";
import Calclator from "./calulator/calculator";

function App() {
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
      <div className="card">
        <p className="test">first try</p>
      </div>
      {TodoList()}
      <Calclator />
      <Mycalc />
      <DataTable />
    </>
  );
}

export default App;
