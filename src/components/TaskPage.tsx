"use client";

import { Task } from "@/src/types/models";
import { Duration } from "luxon";
import { useRouter } from "next/navigation";
import RunningTime from "../components/RunningTime";
import useFocusApi from "../context/useFocusApi";

const TaskPage = ({ task }: { task: Task }) => {
  const router = useRouter();
  const api = useFocusApi();

  const handleCompleteTask = async () => {
    await api.put(`/api/tasks/${task.id}`);
    router.push("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-gray-700 text-sm">Task #{task.id}</div>
        <div className="text-5xl">
          <div>{task.name}</div>
          <div className="py-2">
            <RunningTime
              task={task}
              className={
                task.estimated_time ? "border-b-2 border-black" : undefined
              }
              colorsEnabled={true}
            />
            {task.estimated_time ? (
              <div>
                {Duration.fromMillis(task.estimated_time).toFormat("hh:mm:ss")}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {task.complete ? (
          <div className="border border-black rounded-lg px-12 mt-2">
            Completed
          </div>
        ) : (
          <button
            onClick={handleCompleteTask}
            className="bg-black text-white rounded-lg px-12 mt-2"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskPage;
