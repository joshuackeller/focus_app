import clsx from "clsx";
import { Duration } from "luxon";
import { useState, useEffect } from "react";
import { Task } from "../types/models";

const COLORS = [
  "text-emerald-800",
  "text-emerald-700",
  "text-emerald-600",
  "text-green-600",
  "text-green-500",
  "text-lime-500",
  "text-lime-400",
  "text-yellow-300",
  "text-yellow-400",
  "text-amber-400",
  "text-amber-500",
  "text-orange-400",
  "text-red-400",
  "text-red-500",
  "text-red-600",
];

interface RunningTimeProps {
  task: Task;
  className?: string;
  colorsEnabled?: boolean;
}

const RunningTime = ({
  task,
  className,
  colorsEnabled = false,
}: RunningTimeProps) => {
  const [time, setTime] = useState<number>(
    task.start_time
      ? Date.now() - task.start_time.getTime() + task.time_spent
      : task.time_spent
  );
  const [color, setColor] = useState<string>(GetColor(task));
  useEffect(() => {
    let intervalId: any;
    if (!task.complete) {
      intervalId = setInterval(() => {
        setTime((prevTimeSpent) => {
          setColor(GetColor(task));
          return prevTimeSpent + 1000;
        });
      }, 1000);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        location.reload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (!task.complete) clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const formattedTime = Duration.fromMillis(time).toFormat("hh:mm:ss");

  return (
    <div
      className={clsx(className, colorsEnabled ? color : "text-black")}
      dangerouslySetInnerHTML={{ __html: formattedTime }}
    />
  );
};

const GetColor = (task: Task) => {
  if (task.estimated_time) {
    const timeSpent = task.start_time
      ? Date.now() - task.start_time.getTime() + task.time_spent
      : task.time_spent;
    const progress = timeSpent / task.estimated_time;
    if (progress < 1 / 14) return COLORS[0];
    else if (progress < 2 / 14) return COLORS[2];
    else if (progress < 3 / 14) return COLORS[3];
    else if (progress < 4 / 14) return COLORS[4];
    else if (progress < 5 / 14) return COLORS[5];
    else if (progress < 6 / 14) return COLORS[6];
    else if (progress < 7 / 14) return COLORS[7];
    else if (progress < 8 / 14) return COLORS[8];
    else if (progress < 9 / 14) return COLORS[9];
    else if (progress < 10 / 14) return COLORS[10];
    else if (progress < 11 / 14) return COLORS[11];
    else if (progress < 12 / 14) return COLORS[12];
    else if (progress < 13 / 14) return COLORS[13];
    else return COLORS[14];
  } else return "text-black";
};

export default RunningTime;
