import "./App.css";
import Card from "./componentes/Card/Card.jsx";
import { useEffect, useState } from "react";

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
          {animes.map((anime) => (
            <Card
              key={anime.mal_id}
              titulo={anime.title}
              episodios={anime.episodes}
              imagem={anime.images.jpg.image_url}
              nota={anime.score}
              ranking={anime.rank}
              idAnime={anime.mal_id}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
