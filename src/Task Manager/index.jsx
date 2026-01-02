import { useState } from "react";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <Forms tasks={tasks} setTasks={setTasks} />
      <ViewTasks tasks={tasks} />
    </div>
  );
}

function Forms({ tasks, setTasks }) {
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  function handleForm() {
    // Add task to the tasks list

    if (!inputValue || !dateValue) return;

    const newTask = {
      text: inputValue,
      date: dateValue,
    };

    setTasks([...tasks, newTask]);
    console.log(tasks);
    setInputValue("");
    setDateValue("");
  }

  return (
    <div className="forms">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
        name=""
        id=""
      />
      <button className="submit" onClick={handleForm}>
        Add
      </button>
    </div>
  );
}

function ViewTasks({ tasks }) {
  return (
    <div className="view-tasks">
      {tasks.map((TASKSS) => (
        <Task task={TASKSS.text} data={TASKSS.date} key={Math.random()} />
      ))}
    </div>
  );
}

function Task({ task, data }) {
  return (
    <div className="task">
      <span className="task-text">{task}</span>
      <span className="task-date"> {data} </span>
      <button className="delete-btn">Delete</button>
    </div>
  );
}

export default App;
