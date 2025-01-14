import React, { useState, useTransition } from "react";

export interface TransitionHookProps {
  enableTransition?: boolean;
}

const TransitionHook = ({ enableTransition = true }: TransitionHookProps) => {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value); // High-priority update for input

    const updateList = () => {
      const filteredList = Array(100000)
        .fill(0)
        .map((_, i) => `Item ${i + 1}`)
        .filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setList(filteredList);
    };

    if (enableTransition) {
      startTransition(updateList); // Low-priority update
    } else {
      updateList(); // Immediate update
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "white", fontSize: "1.5rem", marginBottom: "2rem" }}>
        useTransition Example
      </h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type to filter..."
        style={{ padding: "8px", width: "300px" }}
      />
      {enableTransition && isPending && <p>Loading filtered results...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransitionHook;
