import { useEffect, useState } from "react";
import Card from "../componentes/Card/Card";
import BotaoRemove from "../componentes/BotaoRemove/BotaoRemove";
import "./MinhaLista.css";

function MinhaLista() {
  const [animesLista] = useState(
    JSON.parse(localStorage.getItem("animesLista")) || []
  );

  useEffect(() => {
    localStorage.setItem("animesLista", JSON.stringify(animesLista));
  }, [animesLista]);

  return (
    <>
      <h1>Minha Lista</h1>
      <section>
        {animesLista.length > 0 ? (
          animesLista.map((anime) => {
            if (
              anime.mal_id &&
              anime.title &&
              anime.episodes &&
              anime.images?.jpg?.image_url &&
              anime.score
            ) {
              return (
                <div className="container-card">
                    <Card
                  key={anime.mal_id}
                  titulo={anime.title}
                  episodios={anime.episodes}
                  imagem={anime.images.jpg.image_url}
                  nota={anime.score}
                  idAnime={anime.mal_id}
                />
                <BotaoRemove key={anime.mal_id} idAnime={anime.mal_id} />
                </div>
                
              );
            } else {
              console.error("Anime data is incomplete", anime);
              return null;
            }
          })
        ) : (
          <p>Nenhum anime na lista.</p>
        )}
      </section>
    </>
  );
}

export default MinhaLista;
