import prisma from "@/prisma/client";
import TaskPage from "@/src/components/TaskPage";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface PageParams {
  params: {
    taskId: string;
  };
}

export default async function Page({ params: { taskId } }: PageParams) {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(taskId) },
  });
  if (!task) return <div>No task found</div>;
  return (
    <>
      <Link href="/" className="absolute top-5 left-10">
        <ArrowLeftIcon className="h-6 w-6" />
      </Link>
      {/* <TaskPage task={task} /> */}
    </>
  );
}
