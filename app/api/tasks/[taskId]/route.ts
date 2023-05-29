import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { headers } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface ContextParams {
  params: {
    taskId: string;
  };
}

export async function PUT(
  _req: NextRequest,
  { params: { taskId } }: ContextParams
) {
  const headersList = headers();
  const token = headersList.get("Authorization");
  if (!token) throw Error("No token provided");
  if (!process.env.JWT_SECRET) throw Error("No secret found");
  jwt.verify(token, process.env.JWT_SECRET);

  const task = await prisma.task.findUniqueOrThrow({
    where: { id: parseInt(taskId) },
  });

  if (task.start_time === null)
    throw Error("Could not update time spent, start time not defined");
  const timeSpent = Date.now() - task.start_time.getTime();

  revalidatePath("/");
  return NextResponse.json(
    await prisma.task.update({
      where: { id: parseInt(taskId) },
      data: {
        start_time: null,
        time_spent: task.time_spent + timeSpent,
        complete: true,
      },
    })
  );
}

export async function DELETE(
  _req: NextRequest,
  { params: { taskId } }: ContextParams
) {
  const headersList = headers();
  const token = headersList.get("Authorization");
  if (!token) throw Error("No token provided");
  if (!process.env.JWT_SECRET) throw Error("No secret found");
  jwt.verify(token, process.env.JWT_SECRET);

  revalidatePath("/");
  return NextResponse.json(
    await prisma.task.delete({
      where: { id: parseInt(taskId) },
    })
  );
}
