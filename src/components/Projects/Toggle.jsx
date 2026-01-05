import { useState } from "react";
function Toggle() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h3>User name is : Rakibul</h3> : null}
    </div>
  );
}
export default Toggle;
