import React, { useState } from "react";

const Demo = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [text, setText] = useState("");

  const isPrime = (num) => {};
  return (
    <div
      className={
        darkMode ? "bg-black w-full max-h-full" : "bg-white w-full max-h-full"
      }
    >
      <section className="border border-blue-700">
        <button
          role="btn"
          className= { darkMode ? "text-white" : "text-black"}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "lightmode" : "darkmode"}
        </button>
        <input
          type="text"
          value={text}
          className="bg-green-400 p-2 h-[200px] w-[200px]"
          onChange={(e) => setText(e.target.value)}
        />
      </section>
    </div>
  );
};

export default Demo;
