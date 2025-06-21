import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center p-6">
        <div className="text-center text-cyan-400 drop-shadow-lg">
          <div
            className="text-4xl font-mono font-extrabold tracking-widest bg-black border-4 border-cyan-400 rounded-lg px-10 py-6 select-none shadow-[0_0_30px_cyan] animate-pulse"
            style={{ animationDuration: "1.8s" }}
          >
            {time}
          </div>
          <div className="mt-5 text-cyan-300 uppercase tracking-wider font-semibold text-lg">
            DIGITAL CLOCK
          </div>
        </div>
      </div>
    </>
  );
}
export default Clock;
