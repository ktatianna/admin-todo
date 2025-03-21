import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Todo } from "@prisma/client";
import * as yup from "yup";

interface Segments {
  params: Promise<{
    id: string;
  }>;
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { error: `Todo with id ${id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo with id ${id} not found` },
      { status: 404 }
    );
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );
    const updatedTodo = await prisma.todo.update({
      where: { id: id },
      data: { complete, description },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
