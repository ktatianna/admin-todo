"use client";

import { FormEvent, useState } from "react";
import { addTodo, deleteCompleted } from "../actions/todo-actions";

export const NewTodo = () => {
  const [description, setDescription] = useState("");

  const onsubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim() === "") return;

    addTodo(description)
    setDescription("");
  };

  return (
    <form onSubmit={onsubmit} className="flex w-full">
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="w-1/3 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Add new task"
      />
      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Add new task
      </button>
      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        Delete completed
      </button>
    </form>
  );
};
