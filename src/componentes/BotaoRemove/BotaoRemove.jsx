import { useEffect, useState } from "react";
import "./BotaoRemove.css";

function BotaoRemove({ idAnime }) {
  const [animesLista, setAnimesLista] = useState(
    JSON.parse(localStorage.getItem("animesLista")) || []
  );
  useEffect(() => {
    localStorage.setItem("animesLista", JSON.stringify(animesLista));
  }, [animesLista]);
  function removerAnime(idAnime) {
    const novosAnimes = animesLista.filter((anime) => anime.mal_id !== idAnime);
    setAnimesLista(novosAnimes);
    window.location.reload();
  }
  return (
    <button className="btn-remove" onClick={() => removerAnime(idAnime)}>
      <i className="bi bi-trash"></i>
    </button>
  );
}

export default BotaoRemove;