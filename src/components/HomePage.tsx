"use client";

import clsx from "clsx";
import { Task } from "../types/models";
import CreateTaskForm from "./CreateTaskForm";
import SignInForm from "./SignInForm";
import TaskRow from "./TaskRow";

const COLORS = [
  "bg-emerald-800",
  "bg-emerald-700",
  "bg-emerald-600",
  "bg-green-600",
  "bg-green-500",
  "bg-lime-500",
  "bg-lime-400",
  "bg-yellow-300",
  "bg-yellow-400",
  "bg-amber-400",
  "bg-amber-500",
  "bg-orange-400",
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",
];

interface HomePageProps {
  tasks: Task[];
}

const HomePage = ({ tasks }: HomePageProps) => {
  let token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("token");
  }

  if (token) {
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
        <div className="flex">
          {COLORS.map((c) => (
            <div className={clsx(c, "h-12 w-12")} />
          ))}
        </div>
      </div>
    );
  } else {
    return <SignInForm />;
  }
};

export default HomePage;
