import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface ContextParams {
  params: {
    taskId: string;
  };
}

export async function PUT(
  _req: NextRequest,
  { params: { taskId } }: ContextParams
) {
  const task = await prisma.task.findUniqueOrThrow({
    where: { id: parseInt(taskId) },
  });

  if (task.start_time === null)
    throw Error("Could not time spent, start time not defined");

  const timeSpent = Date.now() - task.start_time.getTime();

  return await prisma.task.update({
    where: { id: parseInt(taskId) },
    data: {
      start_time: null,
      time_spent: task.time_spent + timeSpent,
    },
  });
}

export async function DELETE(
  _req: NextRequest,
  { params: { taskId } }: ContextParams
) {
  return NextResponse.json(
    await prisma.task.delete({
      where: { id: parseInt(taskId) },
    })
  );
}
