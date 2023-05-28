import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, hours = 0, minutes = 0 } = await req.json();

  const estimated_time = hours * 60 * 60 * 1000 + minutes * 60 * 1000;
  const data = await prisma.task.create({
    data: {
      name,
      start_time: new Date(),
      estimated_time,
    },
  });

  return NextResponse.json(data);
}
