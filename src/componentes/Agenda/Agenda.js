import "./Agenda.css";

export default function Agenda() {
    return (
        <section className="agenda" id="agenda">
            <h2>Agenda de Campanha</h2>

            <div className="eventosContainer">

                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">15</span>
                        <span className="mes">DEZ</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Debate sobre Educação</h3>
                        <p className="horario">🕐 14h00</p>
                        <p className="local">📍 Praça XV - Centro</p>
                    </div>
                </div>
                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">15</span>
                        <span className="mes">DEZ</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Debate sobre Educação</h3>
                        <p className="horario">🕐 14h00</p>
                        <p className="local">📍 Praça XV - Centro</p>
                    </div>
                </div>
                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">15</span>
                        <span className="mes">DEZ</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Debate sobre Educação</h3>
                        <p className="horario">🕐 14h00</p>
                        <p className="local">📍 Praça XV - Centro</p>
                    </div>
                </div>
                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">15</span>
                        <span className="mes">DEZ</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Debate sobre Educação</h3>
                        <p className="horario">🕐 14h00</p>
                        <p className="local">📍 Praça XV - Centro</p>
                    </div>
                </div>



            </div>
        </section>
    );
}