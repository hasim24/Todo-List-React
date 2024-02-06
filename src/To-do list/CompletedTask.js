import React from "react";
import CompletedList from "./CompletedList";

const CompletedTask = ({ deleteTask, completedTask }) => {
  
  return (
    <div>
      {completedTask.map((tasks, index) => {
        return (
          <li key={index}>
            <CompletedList
              tasks={tasks}
              index={index}
              isComplete
              deleteTask={deleteTask}
            />
            <button
              className="delete-button"
              onClick={() => {
                deleteTask(index);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default CompletedTask;
