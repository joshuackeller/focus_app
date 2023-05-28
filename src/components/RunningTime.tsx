import clsx from "clsx";
import { Duration } from "luxon";
import { useState, useEffect } from "react";

interface RunningTimeProps {
  millis: number;
  disabled?: boolean;
  className?: string;
}

const RunningTime = ({
  millis,
  disabled = false,
  className,
}: RunningTimeProps) => {
  const [time, setTime] = useState<number>(millis);

  useEffect(() => {
    let intervalId: any;
    if (!disabled) {
      intervalId = setInterval(() => {
        setTime((prevTimeSpent) => prevTimeSpent + 1000);
      }, 1000);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        location.reload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (!disabled) clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const formattedTime = Duration.fromMillis(time).toFormat("hh:mm:ss");

  return (
    <div
      className={clsx(className)}
      dangerouslySetInnerHTML={{ __html: formattedTime }}
    />
  );
};

export default RunningTime;
