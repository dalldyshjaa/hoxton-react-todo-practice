import { useState } from "react";
import { TodoType } from "../types";
type Props = {
  todo: TodoType;
  handleChange: Function;
};

export const Todo = ({ todo, handleChange }: Props) => {
  return (
    <div
      className={`flex flex-row p-4 items-center gap-2  border-l-2 ${
        todo.completed
          ? "border-green-400 bg-[#eeeeee]"
          : "border-red-400 bg-[#cfd8b2]"
      } my-2`}
      onClick={(e) => {
        handleChange(todo.id);
      }}
    >
      <input
        type="checkbox"
        name=""
        id=""
        className=""
        checked={todo.completed}
        readOnly
      />
      <h3 className={`${todo.completed && "line-through"}`}>{todo.title}</h3>
    </div>
  );
};
