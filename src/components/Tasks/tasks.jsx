import React from 'react'
import './tasks.css'

export function Tasks () {
  return (
    <section className='tasks'>
        <div className='container-valores'>
            <div>
                <p>Tareas</p>
                <span>10</span>
            </div>
            <div>
                <p>Tarea completa</p>
                <span>1 de 10</span>
            </div>
        </div>
    </section>
  )
}
