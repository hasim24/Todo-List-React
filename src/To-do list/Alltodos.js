import React from "react";
import List from "./Todo";

const Alltodos = ({ tasks, deleteTask, upTask, downTask, finishedTask }) => {
  const isComplete = false;
  return (
    <div>
      {tasks.map((tasks, index) => {
        return (
          <li key={index}>
            <List
              tasks={tasks}
              isComplete={false}
              deleteTask={deleteTask}
              upTask={upTask}
              downTask={downTask}
              index={index}
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
