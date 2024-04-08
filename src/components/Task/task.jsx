import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import "./task.css";

export function Task({ task, onComplete, onDelete }) {
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  useEffect(() => {
    setIsChecked(task.isCompleted);
  }, [task.isCompleted]);

  const handleCheckboxChange = () => {
    onComplete(task.id);
    setIsChecked(!isChecked);
  };

  return (
    <section className="task">
      <div className="container-task">
        <div className="contentainer-check">
          <label className="container">
            <input
              id="ch1"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="checkmark" />
          </label>
        </div>

        <p className="text-task">{task.title}</p>

        <button
          className="deleteButton taskDeleteButton"
          onClick={() => onDelete(task.id)}
        >
          <BsTrash />
        </button>
      </div>
    </section>
  );
}