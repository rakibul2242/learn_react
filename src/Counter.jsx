import { useState } from "react";
function Counter() {
  const [click, setClick] = useState(0);
  const clickCounter = () => {
    setClick(click + 1);
  };
  return (
    <>
      <h3>Count is : {click}</h3>
      <h3 className="inline-block px-3 py-2 rounded text-black font-semibold bg-purple-500 hover:bg-purple-600 cursor-pointer m-2 hover:shadow-md shadow-gray-600"
        onClick={clickCounter}>
        Count
      </h3>
    </>
  );
}

export default Counter;
