import React from "react";
import CompletedList from "./CompletedList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completedTasksSelector } from "../Slices/Slice";
import { deleteTask as deleteTaskAction } from "../Slices/Slice";

const CompletedTask = () => {
  const dispatch = useDispatch();
  const deleteTask = (index) => {
    dispatch(deleteTaskAction(index));
  };
  const completedTask = useSelector(completedTasksSelector);

  return (
    <div>
      {completedTask.map((tasks, index) => {
        return (
          <div>
            <li key={index}>
              <CompletedList tasks={tasks} isComplete />
              <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedTask;
