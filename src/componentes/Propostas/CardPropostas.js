import "./Propostas.css";
export default function CardPropostas({imagem,titulo,descricao}){
    return(
        <div className="cardProposta">
            <img src={imagem} alt={"Imagem da Proposta"}/>
            <h3 id="tituloProposta">{titulo}</h3>
            <p>{descricao}</p>
        </div>
    )
}