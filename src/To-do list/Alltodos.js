import React from "react";
import List from "./Todo";
import { useSelector } from "react-redux";
import { tasksSelector } from "../Slices/Slice";

const Alltodos = ({ upTask, downTask, finishedTask }) => {
  const task = useSelector(tasksSelector);
  const isComplete = false

  return (
    <div>
      {task.map((tasks, index) => {
        return (
          <li key={index}>
            
            <List
              tasks={tasks}
              
              index={index}
              upTask={upTask}
              downTask={downTask}
              finishedTask={finishedTask}
            />
            {isComplete ? (
              <span style={{ textDecoration: "line-through" }}>{tasks}</span>
            ) : (
              <>
                <button
                  className="doneButton"
                  onClick={() => {
                    finishedTask(index);
                  }}
                >
                  Done
                </button>

                <button
                  className="move"
                  onClick={() => {
                    upTask(index);
                  }}
                >
                  Up
                </button>
                <button
                  className="move"
                  onClick={() => {
                    downTask(index);
                  }}
                >
                  Down
                </button>
              </>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default Alltodos;