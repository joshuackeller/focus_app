import { useState } from "react";
import useFocusApi from "../context/useFocusApi";

const SignInForm = () => {
  const api = useFocusApi();
  const [secret, setSecret] = useState<string>("");

  const handleSubmit = async () => {
    const response = await api.post("/api/signin", { secret });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    location.reload();
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <div>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="border border-black rounded-lg px-1"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-10 py-1 rounded-lg"
        >
          get started
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
