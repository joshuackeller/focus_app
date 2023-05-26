import prisma from "@/prisma/client";
import CreateTaskForm from "@/src/components/CreateTaskForm";
import HomePage from "@/src/pages/HomePage";
import Link from "next/link";

export default async function Home() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="py-5 px-10">
      <div className="mb-3">
        <CreateTaskForm />
      </div>
      <div className="text-2xl font-bold">Tasks</div>
      {tasks.map((task) => (
        <Link href={`/tasks/${task.id}`}>
          <div className="text-lg">{task.name}</div>
        </Link>
      ))}
    </div>
  );
}
