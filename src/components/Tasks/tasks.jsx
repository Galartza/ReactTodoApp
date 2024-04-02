import React from 'react'
import './tasks.css'
import { Task } from "../Task/task"

export function Tasks({ tasks, onComplete, onDelete }) {
  const tasksQuantity = tasks.length;
  const completeTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className="tasks">
      <div className="container-valores">
        <div>
          <p>Tareas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p>Tarea completa</p>
          <span>{completeTasks} de {tasksQuantity}</span>
        </div>
      </div>

      <div className="list-task">
        {tasks &&
          tasks.map((task) => (
            <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
          ))}
      </div>
    </section>
  );
}