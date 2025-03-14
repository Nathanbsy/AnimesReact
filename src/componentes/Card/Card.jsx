import { useNavigate } from "react-router";
import "./Card.css";

function Card({ titulo, episodios, imagem, nota, ranking, idAnime }) {
  const navigate = useNavigate();
  function detalhes(idAnime) {
    const query = new URLSearchParams();
    query.set("q", idAnime);
    navigate(`/detalhes?${query.toString()}`);
  }
  let rankP;
  if(ranking) {
    rankP = `Rank: ${ranking}`;
  }
  return (
      <div className="card" onClick={() => detalhes(idAnime)}>
        <div className="card-imagem">
          <img className="imagem" src={imagem} alt={titulo} />
        </div>
        <div className="card-infos">
          <h2>{titulo}</h2>
          <p>{rankP}</p>
          <p>Nota: {nota}</p>
          <p>{episodios} Episodios</p>
        </div>
      </div>
  );
}

export default Card;
