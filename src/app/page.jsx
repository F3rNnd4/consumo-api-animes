import AnimeList from "@/animeList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Anime List</h1>
        <p className={styles.description}>Um projeto para listar animes</p>
      </header>

      <main className={styles.main}>
        <AnimeList />
      </main>
      
    </div>
  );
}
