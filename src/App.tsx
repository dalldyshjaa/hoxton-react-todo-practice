import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Todos } from "./components/Todos";
import { TodoType } from "./types";

let todos: TodoType[] = [
  {
    title: "Study Algorithms and Data Structures",
    id: 1,
    completed: false,
  },
  {
    title: "Learn flex",
    id: 2,
    completed: false,
  },
  {
    title: "Go to buy milk",
    id: 3,
    completed: false,
  },
  {
    title: "Never come back",
    id: 4,
    completed: false,
  },
];

function App() {
  return (
    <div className="App h-screen w-screen flex justify-center items-center">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
