import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name } = await req.json();
  const data = await prisma.task.create({
    data: {
      name,
      start_time: new Date(),
    },
  });

  return NextResponse.json(data);
}
