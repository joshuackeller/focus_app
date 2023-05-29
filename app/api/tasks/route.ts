import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { headers } from "next/dist/client/components/headers";

export async function POST(req: Request) {
  const headersList = headers();
  const token = headersList.get("Authorization");
  if (!token) throw Error("No token provided");
  if (!process.env.JWT_SECRET) throw Error("No secret found");
  jwt.verify(token, process.env.JWT_SECRET);

  const { name, hours = 0, minutes = 0 } = await req.json();

  const estimated_time = hours * 60 * 60 * 1000 + minutes * 60 * 1000;
  const data = await prisma.task.create({
    data: {
      name,
      start_time: new Date(),
      estimated_time,
    },
  });

  revalidatePath("/");
  return NextResponse.json(data);
}
