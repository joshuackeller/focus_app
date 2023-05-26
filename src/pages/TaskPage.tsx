"use client";

import { Task } from "@/prisma";
import { useState, useEffect } from "react";
import { Duration } from "luxon";

const TaskPage = ({ task }: { task: Task }) => {
  const [timeSpent, setTimeSpent] = useState<number>(task.time_spent);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSpent((prevTimeSpent) => prevTimeSpent + 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <div className="text-gray-700 text-sm">Task #{task.id}</div>
        <div className="text-5xl">
          <div>{task.name}</div>
          <div>{Duration.fromMillis(timeSpent).toFormat("hh:mm:ss")}</div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
