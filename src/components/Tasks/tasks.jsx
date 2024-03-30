import React from 'react'
import './tasks.css'

export function Task () {
  return (
    <section className='tasks'>
        <div className='container-valores'>
            <div>
                <p>crear tarea</p>
                <span>10</span>
            </div>
            <div>
                <p>Tarea completada</p>
                <span>1 de 10</span>
            </div>
        </div>
    </section>
  )
}
