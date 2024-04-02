import { useEffect, useState } from "react";
import { Header } from "./components/Header/header";
import { Tasks } from "./components/Tasks/tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function setTaskAndSave(newTasks) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
}

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setTaskAndSave(newTasks);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    setTaskAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = {
          ...task,
          isCompleted: !task.isCompleted,
        };
        return updatedTask;
      }
      return task;
    });
    setTasks(newTasks);
    setTaskAndSave(newTasks);
  }
  

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}

export default App;
