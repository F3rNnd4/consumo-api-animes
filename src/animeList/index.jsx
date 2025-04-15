"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./animeList.module.css";

const AnimeList = () => {
  const url = "https://api.jikan.moe/v4/anime";

  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setAnimes(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar filmes na API");
        setError(
          "Não foi possível carregar os filmes. Tente novamente mais tarde!"
        );
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Carregando filmes...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.filmGrid}>
        {animes.map((anime) => (
          <div key={anime.id} className={styles.animeCard}>
            <div className={styles.imageContainer}>
              <img
                src={anime.url}
                alt={anime.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.animeTitle}>{anime.title}</h2>
              <h3 className={styles.animesJaponeseType}>{anime.title_japanese}</h3>
              <p className={styles.animesType}>Type: {anime.type}</p>
              <p className={styles.source}>Source: {anime.source}</p>
              <p className={styles.episodes}>Episodes: {anime.episodes}</p>
              <p className={styles.rank}>Rank: {anime.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
