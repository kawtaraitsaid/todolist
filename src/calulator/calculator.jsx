import { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default function Calclator() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text" name="" id="" value={value} />
      {btnValues.map((el, index) => (
        <div>
          {el.map((data, i) => (
            <button onClick={() => setValue(data)}>{data}</button>
          ))}
        </div>
      ))}
    </div>
  );
}
