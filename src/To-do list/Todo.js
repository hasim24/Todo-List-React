import React from "react";

const List = ({ tasks, isComplete,  }) => {
  return (
    <div className="flex">
      <span style={{ textDecoration: isComplete ? "line-Through" : "none" }}>
        {tasks}
      </span>
      
    </div>
  );
};

export default List;
