import prisma from "@/prisma/client";
import TaskPage from "@/src/pages/TaskPage";

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
  return <TaskPage task={task} />;
}
