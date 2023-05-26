"use client";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex gap-5">
      <div onClick={() => setCount(count + 1)}>button</div>
      <div>{count}</div>
    </div>
  );
};

export default HomePage;
