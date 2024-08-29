import React, { useRef, useState } from "react";

const buttonStyles = {
  background: "grey",
  padding: "0.5rem",
  margin: "0.5rem",
};

const ToDoList = () => {
  const [todoItem, setTodoItem] = useState([
    "Walk the dogs",
    "Water the plants",
    "Wash the dishes",
  ]);
  const ref = useRef(null);

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            id="addTask"
            name="addTask"
            aria-label="Add new task"
            ref={ref}
            style={{
              border: "1px solid black",
            }}
            placeholder="Add your task"
          />
          <div>
            <button
              style={buttonStyles}
              onClick={() => {
                setTodoItem([...todoItem, ref.current?.value]);
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <ul>
          {todoItem.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button
                style={buttonStyles}
                onClick={(event) => {
                  const filteredTodos = todoItem.filter((e) => e !== item);
                  setTodoItem(filteredTodos);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
