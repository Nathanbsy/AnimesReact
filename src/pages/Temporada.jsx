import { useEffect, useState } from "react";
import Card from "../componentes/Card/Card";
import BotaoAdd from "../componentes/BotaoAdd/BotaoAdd";

function Temporada() {
    const [animes, setAnimes] = useState([]);
    useEffect(() => {
    async function fetchAnimes() {
      const resposta = await fetch(`https://api.jikan.moe/v4/seasons/now`, {
        method: "GET",
      });
      const dados = await resposta.json();
      setAnimes(dados.data);
    }
    fetchAnimes();
  }, []);
  return (
    <>
      <main>
        <h1>Animes da Temporada</h1>
        <section>
          {animes.map((anime) => (
            <div className="container-card">
              <Card
                key={anime.mal_id}
                titulo={anime.title}
                episodios={anime.episodes}
                imagem={anime.images.jpg.image_url}
                nota={anime.score}
                idAnime={anime.mal_id}
              />
              <BotaoAdd key={anime.mal_id} anime={anime} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Temporada;