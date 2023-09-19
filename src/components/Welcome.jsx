import { useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("Emmanuel");
  const [count, setCount] = useState(0);

  // const buttonClick = () => {
  //   setName("232266");
  // };

  function add() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count <= 0 ? 0 : count - 1);
  }

  return (
    <div className="flex text-5xl items-center justify-center gap-5 text-white">
      {/* Welcome{name}
      <button onClick={buttonClick}>Click Me</button> */}
      <button onClick={minus}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>
    </div>
  );
};
export default Welcome;
