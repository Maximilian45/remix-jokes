import { useState } from "react";

export default function Calc() {
  const [valueB, setValueB] = useState<number>(0);
  const [valueA, setValueA] = useState<number>(0);
  const [operator, setOperator] = useState<string>("+");

  function calc(val1: number, val2: number, operator: string) {
    switch (operator) {
      case "+":
        return val1 + val2;
      case "-":
        return val1 - val2;
      case "*":
        return val1 * val2;
      case "/":
        return val1 / val2;
      default:
        return 0;
    }
  }

  return (
    <div>
      <div className="text-3xl">
        <div>
          <h1>Calculator</h1>
          <input
            className="border-2 border-black rounded-lg text-black"
            type="number"
            onChange={(e) => {
              setValueA(parseInt(e.target.value));
            }}
          />
          <input
            className="border-2 border-black rounded-lg text-black"
            type="number"
            onChange={(e) => {
              setValueB(parseInt(e.target.value));
            }}
          />

          <button
            className={`text-white w-[100px] flex
            ${operator === "-" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setOperator("-");
            }}
          >
            -
          </button>
          <br />
          <button
            className={`text-white w-[100px]
            ${operator === "+" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setOperator("+");
            }}
          >
            +
          </button>
          <br />
          <br />
          <button
            className={` text-white w-[100px]
            ${operator === "/" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setOperator("/");
            }}
          >
            /
          </button>
          <br />
          <br />
          <button
            className={` text-white w-[100px] flex
            ${operator === "*" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setOperator("*");
            }}
          >
            *
          </button>

          <p>
            <b>summe</b>:{calc(valueA, valueB, operator)}
          </p>

          <br />

          <div className="border-2 border-black rounded-lg text-black link w-[200px]">
            calc
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}
