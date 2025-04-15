"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./animeList.module.css"

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
                setAnimes(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar filmes na API");
                setError("Não foi possível carregar os filmes. Tente novamente mais tarde!");
                setLoading(false);
            }
        };

        fetchAnimes();
    }, []);
    
    return (
        <div className={styles.content}>
            
        </div>
    )
}

export default AnimeList;