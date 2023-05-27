"use client";

import { Task } from "@/prisma";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  const router = useRouter();
  const onClick = async () => {
    await axios.delete(`/api/tasks/${task.id}`);
    router.refresh();
  };
  return (
    <div className="flex gap-4">
      <Link href={`/tasks/${task.id}`}>
        <div className="text-lg">{task.name}</div>
      </Link>
      <button onClick={onClick}>X</button>
    </div>
  );
};

export default TaskRow;
