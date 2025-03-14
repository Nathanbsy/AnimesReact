import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import "./Detalhes.css";

function Detalhes() {
  const [searchParams] = useSearchParams();
  const idAnime = searchParams.get("q");
  const [animes, setAnimes] = useState(null); // Começa como null

  useEffect(() => {
    async function fetchAnimes() {
      const resposta = await fetch(`https://api.jikan.moe/v4/anime/${idAnime}`);
      const dados = await resposta.json();
      setAnimes(dados.data);
    }
    fetchAnimes();
  }, [idAnime]);

  if (!animes || !animes.images) {
    return <p>Carregando detalhes do anime...</p>;
  }

  return (
    <main className="container-anime">
      <section className="anime">
        <div className="anime-image">
          <img src={animes.images.webp.large_image_url} alt="Imagem do anime" />
        </div>
        <div className="anime-infos">
          <div>
            <h2>{animes.title}</h2>
            <p>({animes.type})</p>
            <p>Original: {animes.source}</p>
            <p>Ano {animes.year}</p>
            <p>Eps {animes.episodes}</p>
          </div>
          <div>
            <h3>Sinopse:</h3>
            <p>{animes.synopsis}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Detalhes;
