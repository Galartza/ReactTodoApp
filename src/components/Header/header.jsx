import imgLogo from '../../assets/todoLogo.png'
import { AiOutlinePlusCircle } from "react-icons/ai";
import './header.css'



export function Header() {
    return (
        <header className='header'>
            <img src={imgLogo} className='logo' />

            <form className='form'>
                <input placeholder="Agrega una nueva tarea" class="input" name="text" type="text" />
                <button className='button'>
                    Crear
                    <AiOutlinePlusCircle />
                </button>
            </form>
        </header>
    )
}