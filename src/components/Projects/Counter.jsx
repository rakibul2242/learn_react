import { useState } from "react";
function Counter() {
  const [click, setClick] = useState(0);
  return (
    <div className="bg-[cadetblue] p-12 h-screen">
      <div className="w-4/5 m-auto text-center">
        <div className="">
          <h3 className="text-lg font-semibold">Count is : {click}</h3>
        </div>
        <h3
          className="inline-block px-3 select-none py-2 rounded text-black font-semibold bg-purple-500 hover:bg-purple-600 cursor-pointer m-2 hover:shadow-md shadow-gray-600"
          onClick={() => setClick(click + 1)}
        >
          Count +
        </h3>
        <h3
          className="inline-block px-3 select-none py-2 rounded text-black font-semibold bg-purple-500 hover:bg-purple-600 cursor-pointer m-2 hover:shadow-md shadow-gray-600"
          onClick={() => setClick(click - 1)}
        >
          Count -
        </h3>
      </div>
    </div>
  );
}

export default Counter;
