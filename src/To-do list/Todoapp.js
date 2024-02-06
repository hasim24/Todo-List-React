import React from "react";
import { useState } from "react";
import Addtodos from "./Addtodo";
import Alltodos from "./Alltodos";
import CompletedTask from "./CompletedTask";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const filteredTasks = completedTask.filter((_, i) => i !== index)
    setCompletedTask(filteredTasks)
  };

  const finishedTask = (index) => {
    const markedTasks = (tasks[index])
    const filteredTasks = tasks.filter((_, i) => i !== index)
    setTasks(filteredTasks)
    setCompletedTask([...completedTask, markedTasks])
  }
  const upTask = (index) => {
    if (index > 0) {
      const taskUp = [...tasks];
      [taskUp[index], taskUp[index - 1]] = [taskUp[index - 1], taskUp[index]];
      setTasks(taskUp);
    }
  };

  const downTask = (index) => {
    if (index < tasks.length - 1) {
      const taskUp = [...tasks];
      [taskUp[index], taskUp[index + 1]] = [taskUp[index + 1], taskUp[index]];
      setTasks(taskUp);
    }
  };
  return (
    <div className="container">
      <h1>To-do List</h1>


      <div className="input">
        {/*  put input and add button in a separate comp */}
        <Addtodos addTasks={addTask} />
      </div>


      <ul>
        {/* AllTodos - a component which renders a list of Todo Component */}
        <Alltodos upTask={upTask} 
                  downTask={downTask} 
                  tasks={tasks}
                  finishedTask={finishedTask}
                  />
      </ul>
      <ul>
      <CompletedTask 
        deleteTask={deleteTask}
        completedTask={completedTask}
        />
      </ul>
       
    </div>
  );
};

export default Todo;
