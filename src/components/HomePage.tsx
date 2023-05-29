"use client";

import { Task } from "../types/models";
import CreateTaskForm from "./CreateTaskForm";
import SignInForm from "./SignInForm";
import TaskRow from "./TaskRow";

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
      </div>
    );
  } else {
    return <SignInForm />;
  }
};

export default HomePage;
