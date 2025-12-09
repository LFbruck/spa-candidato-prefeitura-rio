import "./Propostas.css";
import CardPropostas from "./CardPropostas";

export default function Propostas(){

    return (
        <section className="propostas">
            <h2 id="propostas">Propostas que Mudarão o Rio!</h2>
            <div className="cardContainer">
                <CardPropostas imagem="https://imagens.ebc.com.br/HxkV5IOoPC0vVqkUta6xnERTVs8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/10/22/whatsapp-image-2021-05-05-at-19.00.28.jpeg?itok=gzbXJ5Ln" titulo="Cidade Segura" descricao ="Um programa de integração entre Guarda Municipal, tecnologia e ações comunitárias para reduzir criminalidade e aumentar a sensação de segurança em todas as regiões do Rio."/>
                <CardPropostas imagem="https://espacomedicobrasil.com.br/wp-content/uploads/2024/05/espaco-medico-brasil_hero-sm.jpg" titulo="Saúde 24 Horas" descricao ="Ampliação do atendimento noturno em unidades de saúde, reforço de equipes e implementação de teleatendimento para agilizar diagnósticos e reduzir filas."/>
                <CardPropostas imagem="https://campos24horas.com.br/portal/wp-content/uploads/2018/12/1907_54d15e29-c0ec-4f14-97d1-6d300d.jpg" titulo="Educação que Transforma" descricao ="Modernização das escolas municipais, com aulas em tempo integral, tecnologia em sala de aula e programas de reforço escolar focados no futuro dos jovens."/>
                <CardPropostas imagem="https://rederiohoteis.com/wp-content/uploads/2023/05/onibus-zona-sul.jpg.webp" titulo="Transporte Digno e Eficiente" descricao ="Reorganização das linhas de ônibus, aumento da frota, fiscalização rigorosa e implantação de corredores inteligentes para diminuir o tempo de viagem do carioca."/>
                <CardPropostas imagem="https://www.gov.br/pt-br/noticias/viagens-e-turismo/2020/03/parques-nacionais-e-unidades-de-conservacao-sao-fechados-para-visitacao/parque_tijuca_icmbio.jpg" titulo="Rio +Limpo e Sustentavel" descricao ="Ampliação da coleta seletiva, combate a pontos de descarte irregular, revitalização de praças e criação do programa “Bairro Verde” para cuidar do meio ambiente."/>
                <CardPropostas imagem="https://trabalho.prefeitura.rio/wp-content/uploads/sites/22/2025/06/Trabalha-Rio9-scaled.jpg" titulo="Trabalho , Renda e  Oportunidades" descricao ="Criação de hubs de empreendedorismo, capacitação profissional gratuita e incentivo a novas empresas para gerar emprego e movimentar a economia local."/>





            </div>
            <div className="outrasPropostas">
                <h3>Outras Propostas:</h3>
                <ul>
                    <li>Turismo que Movimenta</li>
                    <li>Esportes para Todos</li>
                    <li>Ensino Mercado Financeiro e Criptomoedas</li>
                    <li>Agua e Saneamento sem Falhas</li>
                    <li>Iluminação e Acessibilidade</li>
                </ul>


            </div>
        </section>
    )

}