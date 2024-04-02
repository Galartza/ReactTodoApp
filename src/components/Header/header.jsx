import imgLogo from '../../assets/todoLogo.png'
import { AiOutlinePlusCircle } from "react-icons/ai";
import './header.css'
import { useState } from 'react';



export function Header({ onAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title)
    }

    function onChacngeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className='header'>
            <img src={imgLogo} className='logo' />

            <form onSubmit={handleSubmit} className='form'>
                <input placeholder="Agrega una nueva tarea" className="input" name="text" type="text" value={title} onChange={onChacngeTitle} />                
                <button className='button'>
                    Crear
                    <AiOutlinePlusCircle />
                </button>
            </form>
        </header>
    )
}