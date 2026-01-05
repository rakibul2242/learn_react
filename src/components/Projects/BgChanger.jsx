import { useEffect, useState } from "react";

function BgChanger() {
  const [bgColor, setBgColor] = useState(() => {
    return localStorage.getItem("bgColor") || "cadetblue";
  });

  useEffect(() => {
    localStorage.setItem("bgColor", bgColor);
  }, [bgColor]);

  const lightBackgrounds = ["yellow", "orange", "pink", "white"];
  const isLight = lightBackgrounds.includes(bgColor.toLowerCase());
  const textColorClass = isLight ? "text-black" : "text-white";

  return (
    <div
      className="w-full h-screen transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`absolute top-5 left-1/2 transform -translate-x-1/2 ${textColorClass} text-lg font-bold`}
      >
        Background Color : {bgColor}
      </div>
      <div className="fixed flex justify-center bottom-10 inset-x-0">
        <div className="flex flex-wrap justify-center gap-2 shadow-md shadow-gray-500 bg-white px-3 py-2 rounded-full">
          <button
            onClick={() => setBgColor("blue")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-blue-500 hover:bg-blue-600 text-white"
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("yellow")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Yellow
          </button>
          <button
            onClick={() => setBgColor("pink")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-pink-500 hover:bg-pink-600 text-white"
          >
            Pink
          </button>
          <button
            onClick={() => setBgColor("red")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-red-500 hover:bg-red-600 text-white"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("orange")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-orange-500 hover:bg-orange-600 text-white"
          >
            Orange
          </button>
          <button
            onClick={() => setBgColor("green")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-green-500 hover:bg-green-600 text-white"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("purple")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-purple-500 hover:bg-purple-600 text-white"
          >
            Purple
          </button>
          <button
            onClick={() => setBgColor("indigo")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            Indigo
          </button>
          <button
            onClick={() => setBgColor("teal")}
            className="cursor-pointer py-1 px-3 rounded-full font-semibold transition bg-teal-500 hover:bg-teal-600 text-white"
          >
            Teal
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
