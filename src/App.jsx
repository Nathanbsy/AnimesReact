import "./App.css";
import Card from "./componentes/Card/Card.jsx";
import { v4 as uuidv4 } from "uuid";
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
              key={uuidv4()}
              titulo={anime.title}
              episodios={anime.episodes}
              imagem={anime.images.jpg.image_url}
              nota={anime.score}
              ranking={anime.rank}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
