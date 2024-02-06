import React from 'react'

const CompletedList = ({tasks, isComplete}) => {
  return (
    <div className="flex">
        <span 
               style={{textDecoration: isComplete ? "line-Through" : "none"}}
         >{tasks}</span>
            <button
              className="delete-button"
              onClick={() => {
                 deleteTask(index);
              }}
            >
              Delete
            </button>
    </div>
  )
}

export default CompletedList;