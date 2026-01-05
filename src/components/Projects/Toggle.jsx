import { useState } from "react";

function Toggle() {
  const [display, setDisplay] = useState(true);

  return (
    <div className="flex h-100 flex-col items-center justify-center bg-gray-200 p-6">
      <button
        onClick={() => setDisplay(!display)}
        className="mb-4 px-6 py-2 bg-gray-500 text-white cursor-pointer font-semibold rounded-lg shadow hover:bg-gray-400 transition-colors"
      >
        {display ? "Hide Name" : "Show Name"}
      </button>

      {display && (
        <h3 className="text-lg text-gray-800 font-medium bg-white px-4 py-2 rounded-lg shadow">
          User name is: <span className="font-bold">Rakibul</span>
        </h3>
      )}
    </div>
  );
}

export default Toggle;
