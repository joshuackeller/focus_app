import prisma from "@/prisma/client";
import CreateTaskForm from "@/src/components/CreateTaskForm";
import TaskRow from "@/src/components/TaskRow";

export default async function Home() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="my-5 mx-10">
      <div className="mb-3">
        <CreateTaskForm />
      </div>
      <div className="text-2xl font-bold">Tasks</div>
      {tasks.length === 0 ? (
        <div className="text-center py-10">
          <div>No tasks found</div>
          <div>Create a task to get started</div>
        </div>
      ) : (
        tasks.map((task) => <TaskRow task={task} key={task.id} />)
      )}
    </div>
  );
}
