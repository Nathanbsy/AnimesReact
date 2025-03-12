import "./Card.css";

function Card({ titulo, episodios, imagem, nota, ranking }) {
  return (
      <div className="card">
        <div className="card-imagem">
          <img className="imagem" src={imagem} alt={titulo} />
        </div>
        <div className="card-infos">
          <h2>{titulo}</h2>
          <p>Rank: {ranking}</p>
          <p>Nota: {nota}</p>
          <p>{episodios} Episodios</p>
        </div>
      </div>
  );
}

export default Card;
