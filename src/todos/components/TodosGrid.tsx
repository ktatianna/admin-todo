"use client";

import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import { toggleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 max-w-[500px]">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
