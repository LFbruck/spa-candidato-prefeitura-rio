import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerPrincipal">
                <div className="redesSociais">
                    <h3>Siga a Campanha</h3>
                    <div className="iconesRedes">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="contato">
                    <h3>Contato da Campanha</h3>
                    <p>📧 contato@marcomadureira.com.br</p>
                    <p>📞 (21) 99999-9999</p>
                </div>
            </div>

            <div className="footerCreditos">
                <img src="https://avatars.githubusercontent.com/u/133892887?s=400&u=c5ede3c1fb51f534e29464ef14c24243d1c115c2&v=4" alt="Luiz Filipe Bruck" />
                <p>Desenvolvido por: <strong>Luiz Filipe Bruck Reis Mattos</strong></p>
                <div className="creditosLinks">
                    <a href="https://www.linkedin.com/in/luiz-filipe-bruck-reis-mattos-651497268/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/LFbruck" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}