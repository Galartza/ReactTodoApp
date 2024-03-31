import { useState } from "react"
import { Header } from "./components/Header/header"
import { Task } from "./components/Task/task"
import { Tasks } from "./components/Tasks/tasks"


function App() {
const {task, setTasks } = useState([]);
  return (
    <>
      <Header />
      <Tasks />
      <Task />
    </>
  )
}

export default App
