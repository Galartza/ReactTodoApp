import { AiOutlinePlusCircle } from "react-icons/ai";
import "./header.css";
import { useState } from "react";
import { TbListCheck } from "react-icons/tb";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(title);

    setTitle("");
  }

  function onChacngeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className="header">
      <h1 className="logo">
        <TbListCheck /> TodoList
      </h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Agrega una nueva tarea"
          className="input"
          name="text"
          type="text"
          value={title}
          onChange={onChacngeTitle}
        />
        <button className="button">
          Crear
          <AiOutlinePlusCircle />
        </button>
      </form>
    </header>
  );
}