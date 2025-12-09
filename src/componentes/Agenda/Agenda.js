import "./Agenda.css";

export default function Agenda() {
    return (
        <section className="agenda" id="agenda">
            <h2>Agenda de Campanha</h2>

            <div className="eventosContainer">

                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">05</span>
                        <span className="mes">AGO</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Lançamento Oficial da Campanha</h3>
                        <p className="horario">🕐 19h00</p>
                        <p className="local">📍 Praça XV - Centro</p>
                    </div>
                </div>
                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">15</span>
                        <span className="mes">AGO</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Caminhada com Moradores da Rocinha</h3>
                        <p className="horario">🕐 9h00</p>
                        <p className="local">📍 Rocinha - Zona sul</p>
                    </div>
                </div>
                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">15</span>
                        <span className="mes">AGO</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Reunião com Comerciantes</h3>
                        <p className="horario">🕐 16h30</p>
                        <p className="local">📍 SAARA - Centro</p>
                    </div>
                </div>
                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">02</span>
                        <span className="mes">SET</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Debate sobre Saúde Publica</h3>
                        <p className="horario">🕐 14h00</p>
                        <p className="local">📍 UERJ - Maracanã</p>
                    </div>
                </div>
                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">10</span>
                        <span className="mes">SET</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Visita ao complexo do Alemão</h3>
                        <p className="horario">🕐 8h10</p>
                        <p className="local">📍 Complexo do Alemão</p>
                    </div>


                </div>

                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">15</span>
                        <span className="mes">SET</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Almoço com Empresários</h3>
                        <p className="horario">🕐 12h10</p>
                        <p className="local">📍 Barra da Tijuca - Zona Sul</p>
                    </div>


                </div>

                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">20</span>
                        <span className="mes">SET</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Debate na TV Record</h3>
                        <p className="horario">🕐 22h00</p>
                        <p className="local">📍 Estudios RecordTV</p>
                    </div>


                </div>

                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">25</span>
                        <span className="mes">SET</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Debate TV Globoo</h3>
                        <p className="horario">🕐 22h00</p>
                        <p className="local">📍Estudios Globo</p>
                    </div>


                </div>

                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">01</span>
                        <span className="mes">OUT</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Carreata pela Zona Oeste</h3>
                        <p className="horario">🕐 16h00</p>
                        <p className="local">📍 Barra da Tijuca -> Campo Grande</p>
                    </div>


                </div>

                <div className="evento">
                    <div className="eventoDataBox">
                        <span className="dia">05</span>
                        <span className="mes">OUT</span>
                    </div>
                    <div className="evento-detalhes">
                        <h3>Ultimo Comício Antes do 1º Turno </h3>
                        <p className="horario">🕐 18h00</p>
                        <p className="local">📍 Centro do Rio de Janeiro</p>
                    </div>


                </div>

                <div className="eventoP">
                    <div className="eventoDataBoxP">
                        <span className="dia">06</span>
                        <span className="mes">OUT</span>
                    </div>
                    <div className="evento-detalhesP">
                        <h3>Votação 1º Turno </h3>
                        <p className="horario">🕐 06h00 - 19h00</p>
                        <p className="local">📍 Rio de Janeiro</p>
                    </div>


                </div>



            </div>
        </section>
    );
}