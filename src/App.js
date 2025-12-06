import Header from "./componentes/Header/Header.js";
import Biografia from "./componentes/Biografia/Biografia.js";
import Propostas from "./componentes/Propostas/Propostas.js";
import Agenda from "./componentes/Agenda/Agenda.js";
import Footer from "./componentes/Footer/Footer.js";
import "./App.css"
import "./global.css"



export default function App(){
    return (
        <div className="App">
            <Header />
            <Biografia id="biografia" />
            <Propostas id="propostas" />
            <Agenda id="agenda" />
            <Footer id="contato" />
        </div>
    )
}