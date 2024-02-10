import React from "react";
import Addtodos from "./Addtodo";
import Alltodos from "./Alltodos";
import CompletedTask from "./CompletedTask";
import { useDispatch } from "react-redux";
import { addTask as addTaskAction } from "../Slices/Slice";
import { finishedTask as finishedTaskAction } from "../Slices/Slice";
import { taskUp } from "../Slices/Slice";
import { taskDown } from "../Slices/Slice";

const Todo = () => {
  const dispatch = useDispatch();

  const addTask = (newTask) => {
    dispatch(addTaskAction(newTask));
  };

  const finishedTask = (index) => {
    dispatch(finishedTaskAction(index));
  };
  const upTask = (index) => {
    dispatch(taskUp(index));
  };

  const downTask = (index) => {
    dispatch(taskDown(index));
  };
  return (
    <div className="container">
      <h1>To-do List</h1>

      <div className="input">
        <Addtodos addTasks = {addTask} />
      </div>

      <ul>
        <Alltodos
          upTask = {upTask}
          downTask = {downTask}
          finishedTask = {finishedTask}
        />
      </ul>
      <ul>
        <CompletedTask />
      </ul>
    </div>
  );
};

export default Todo;
