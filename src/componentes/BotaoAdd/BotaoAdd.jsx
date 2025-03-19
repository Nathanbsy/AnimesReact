import { useEffect, useState } from "react";
import "./BotaoAdd.css";

function BotaoAdd({ anime }) {
  const [animesLista, setAnimesLista] = useState(
    JSON.parse(localStorage.getItem("animesLista")) || []
  );
  useEffect(() => {
    localStorage.setItem("animesLista", JSON.stringify(animesLista));
  }, [animesLista]);
  function adicionarAnime(anime) {
    console.log(anime, animesLista);
    if (animesLista.some((item) => item.mal_id === anime.mal_id)) return;
    setAnimesLista([...animesLista, anime]);
  }
  if (animesLista.some((item) => item.mal_id === anime.mal_id)) {
    return (
      <button className="btn-add">
        <i class="bi bi-check"></i>
      </button>
      );}
  return (
    <button className="btn-add" onClick={() => adicionarAnime(anime)}>
      <i class="bi bi-plus"></i>
    </button>
  );
}

export default BotaoAdd;
