import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {

  await prisma.todo.deleteMany(); // delete * from todo

  await prisma.todo.createMany({
    data: [
      { description: 'Piedra del alma', complete: true },
      { description: 'Piedra del poder' },
      { description: 'Piedra del tiempo' },
      { description: 'Piedra del espacio' },
      { description: 'Piedra del realidad' },
    ]
  })

  return NextResponse.json({
    message: 'Seed Executed',
  })
}