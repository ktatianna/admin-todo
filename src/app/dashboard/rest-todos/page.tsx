import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";
import NoResults from "@/todos/components/NoResults";

export const metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className=" px-3 mx-7 my-5">
        <NewTodo />
      </div>
      {todos.length ? <TodosGrid todos={todos} /> : <NoResults /> }
    </div>
  );
}
