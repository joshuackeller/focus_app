"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTaskForm = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const createNewTask = async () => {
    const response = await axios.post("/api/tasks", {
      name,
      hours,
      minutes,
    });
    router.push(`/tasks/${response.data.id}`);
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-black rounded-lg text-sm px-1"
        placeholder="name"
      />
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(parseInt(e.target.value))}
        className="border border-black rounded-lg text-sm w-10 text-right"
        placeholder="hh"
      />
      <span>:</span>
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
        className="border border-black rounded-lg text-sm  w-10 text-right"
        placeholder="mm"
      />
      <button
        onClick={createNewTask}
        className="bg-black text-white  px-5 py-1 rounded-lg "
      >
        New Task
      </button>
    </div>
  );
};

export default CreateTaskForm;
