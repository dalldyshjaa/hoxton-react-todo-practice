import { useState } from "react";
import { TodoType } from "../types";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

type Props = {
  todos: TodoType[];
};

export function Todos({ todos }: Props) {
  const [toggle, setToggle] = useState<boolean | null>(null);
  const [stateTodos, setStateTodos] = useState(todos);

  function addTodo(text: string) {
    let newTodo = {
      title: text,
      completed: false,
      id: todos[todos.length - 1].id + 1,
    };
    // todos.push(newTodo);
    setStateTodos([...stateTodos, newTodo]);
  }
  function handleChange(id: number) {
    let todosCopy = structuredClone(stateTodos);
    let todoCopy = todosCopy.find((todo) => todo.id === id);
    todoCopy!.completed = !todoCopy?.completed;
    setStateTodos(todosCopy);
  }
  return (
    <div className="h-[600px] p-7 ">
      <AddTodo addTodo={addTodo} />
      <h1 className="text-[30px]">Todos</h1>
      <div className="flex gap-2 justify-center">
        <span
          className="p-4 bg-slate-400 cursor-pointer"
          onClick={() => {
            // @ts-ignore
            if (toggle !== true) {
              setToggle(true);
            } else {
              setToggle(null);
            }
          }}
        >
          Completed
        </span>
        <span
          className="p-4 bg-slate-400 cursor-pointer"
          onClick={() => {
            // @ts-ignore
            if (toggle !== false) {
              setToggle(false);
            } else {
              setToggle(null);
            }
          }}
        >
          Not completed
        </span>
      </div>
      {stateTodos
        .filter((todos) => {
          if (toggle === null) {
            return true;
          } else {
            return todos.completed === toggle;
          }
        })
        .map((todo, index) => (
          <Todo todo={todo} handleChange={handleChange} key={index} />
        ))}
    </div>
  );
}
