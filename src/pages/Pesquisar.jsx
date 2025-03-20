import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Card from "../componentes/Card/Card";
import BotaoAdd from "../componentes/BotaoAdd/BotaoAdd";

function Pesquisar() {
  const [searchParams] = useSearchParams();
  const titulo = searchParams.get("q");
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    async function fetchAnimes() {
      const resposta = await fetch(
        `https://api.jikan.moe/v4/anime?q=${titulo}`,
        {
          method: "GET",
        }
      );
      const dados = await resposta.json();
      setAnimes(dados.data);
    }
    fetchAnimes();
  }, [titulo]);

  return (
    <>
      <main>
        <h1>Resultados por: {titulo}</h1>
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
              <BotaoAdd anime={anime} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Pesquisar;
