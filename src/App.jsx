import "./App.css";
import BotaoAdd from "./componentes/BotaoAdd/BotaoAdd.jsx";
import Card from "./componentes/Card/Card.jsx";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function fetchAnimes() {
      const resposta = await fetch("https://api.jikan.moe/v4/top/anime", {
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
        <h1>Seja Bem-vindo(a)</h1>
        <section>
          <h2>Top animes</h2>
          {animes.map((anime) => (
            <div className="container-card">
              <Card
                key={anime.mal_id}
                titulo={anime.title}
                episodios={anime.episodes}
                imagem={anime.images.jpg.image_url}
                nota={anime.score}
                ranking={anime.rank}
                idAnime={anime.mal_id}
              />
              <BotaoAdd key={uuidv4} anime={anime} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
