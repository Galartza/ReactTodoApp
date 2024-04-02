import React, { useState, useEffect } from 'react';
import { BsTrash } from "react-icons/bs";

import './task.css'

export function Task({ task, onComplete, onDelete }) {
    const [isChecked, setIsChecked] = useState(task.isCompleted);

    // Actualiza el estado del checkbox al renderizar el componente
    useEffect(() => {
        setIsChecked(task.isCompleted);
    }, [task.isCompleted]);

    // Función para manejar el cambio de estado del checkbox
    const handleCheckboxChange = () => {
        onComplete(task.id);
        setIsChecked(!isChecked); // Actualiza el estado del checkbox
    }

    return (
        <section className='task'>
            <div className='container-task'>
                <div className='contentainer-check'>
                    <label className="checkBox">
                        <input 
                            id="ch1" 
                            type="checkbox" 
                            checked={isChecked} // Establece el estado del checkbox
                            onChange={handleCheckboxChange} // Maneja el cambio de estado del checkbox
                        />
                        {<div/>}
                        <div className="transition"></div>
                    </label>
                </div>

                <p className='text-task'>
                    {task.title}
                </p>

                <button className='deleteButton' onClick={() => onDelete(task.id)}>
                    <BsTrash />
                </button>
            </div>
        </section>
    )
}
