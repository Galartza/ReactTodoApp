import React from 'react'
import { BsTrash } from "react-icons/bs";

import './task.css'

export function Task() {
    return (
        <section className='task'>
            <div className='container-task'>
                <div class="content">
                    <label class="checkBox">
                        <input id="ch1" type="checkbox" />
                        <div class="transition"></div>
                    </label>
                </div>

                <p className='text-task'>
                asdasnjdlkandslasdnuasjdnalkjdnakj
                </p>

                <button className='deleteButton'>
                    <BsTrash />
                </button>
            </div>
        </section>


    )
}
