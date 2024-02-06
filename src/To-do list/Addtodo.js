import React, { useState } from "react";

const Addtodos = ({addTasks}) => {
  const [newTask, setNewTasks] = useState([]);

  const handleInput = (e) => {
    setNewTasks(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
    addTasks(newTask)
    setNewTasks("")
    }
  };

  function enter(event){
    if(event.keyCode === 13 || event.which === 13) addTask();
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInput}
        onKeyDown={enter}
        placeholder="Enter task name..."
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Addtodos;
