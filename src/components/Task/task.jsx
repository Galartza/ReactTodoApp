import React from 'react'
import { BsTrash } from "react-icons/bs";

import './task.css'

export function Task( { task, onComplete, onDelete } ) {
    return (
        <section className='task'>
            <div className='container-task'>
                <div className='contentainer-check'>
                    <label className="checkBox">
                        <input id="ch1" type="checkbox" onClick={() => onComplete(task.id)}/>
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
