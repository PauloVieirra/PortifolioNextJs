// pages/index.js

import Link from "next/link";
import styles from "../styles/Home.module.css";

type Item = {
    id: number,
    title: string,
    description: string,
    coverImage: string,
}

const movies = [
  {
    id: 1,
    title: "Filme 1",
    description: "Descrição do Filme 1",
    coverImage: "/images/movie1.jpg",
    backgroundImage: "/images/background1.jpg",
  },
  // Adicione mais filmes conforme necessário
];

const MovieItem = ({ movie}:{movie:Item}) => {
  return (
    <Link href={`/libplay/${movie.id}`}>
      <a className={styles.movieItem}>
        <div
          className={styles.movieImage}
          style={{ backgroundImage: `url(${movie.coverImage})` }}
        ></div>
        <div className={styles.movieInfo}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      </a>
    </Link>
  );
};

const Catalogo = () => {
  return (
    <div>
      <h1>Filmes</h1>
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
