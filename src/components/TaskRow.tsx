"use client";

import { Task } from "@/src/types/models";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckIcon, XMarkIcon, ClockIcon } from "@heroicons/react/20/solid";
import { MouseEvent } from "react";
import { DateTime, Duration } from "luxon";
import RunningTime from "./RunningTime";
import useFocusApi from "../context/useFocusApi";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  const router = useRouter();
  const api = useFocusApi();

  const onClick = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await api.delete(`/api/tasks/${task.id}`);

    router.refresh();
  };
  return (
    <Link
      href={`/tasks/${task.id}`}
      className="grid grid-cols-6 even:bg-gray-50 "
    >
      {/* <div>{task.id}</div> */}
      <div>
        <div className="font-bold">{task.name}</div>
      </div>
      <div className="flex items-center">
        {task.complete ? (
          <CheckIcon className="h-4 w-4 " />
        ) : (
          <ClockIcon className="h-4 w-4" />
        )}
      </div>
      <div>
        {DateTime.fromJSDate(task.createdAt).toLocaleString(
          DateTime.DATETIME_SHORT
        )}
      </div>
      <RunningTime task={task} />
      <div>
        {task.estimated_time
          ? Duration.fromMillis(task.estimated_time).toFormat("hh:mm:ss")
          : "-"}
      </div>
      <div>
        <button onClick={onClick}>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </Link>
  );
};

export default TaskRow;
