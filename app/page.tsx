import prisma from "@/prisma/client";
import HomePage from "@/src/components/HomePage";

export default async function Home() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 25,
  });

  return <HomePage tasks={tasks} />;
}
