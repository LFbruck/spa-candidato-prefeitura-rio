import "./Header.css";
import {useState} from "react";

export default function Header(
){

    const[menuAberto, setMenuAberto] = useState(false)  ;
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className="header">
            <h1 className="titulo"> Marco Madureira</h1>
            <button className="menuToggle" onClick={toggleMenu}>☰
            </button>
            <nav className={`nav ${menuAberto ? 'nav-aberto' : ''}`}>
                <a href="#biografia" onClick={toggleMenu}>Biografia</a>
                <a href="#propostas" onClick={toggleMenu}>Propostas</a>
                <a href="#agenda" onClick={toggleMenu}>Agenda</a>
                <a href="#contato" onClick={toggleMenu}>Contatos</a>
            </nav>


        </header>
    )

}