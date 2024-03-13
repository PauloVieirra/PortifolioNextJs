// Importações corrigidas
import { useState, useRef } from "react";
import globalstyle from '../../styles/Items.module.css';
import Head from "next/head";
import styles from './style.module.css';
import { Menu, Navbar } from "../compenents/Menu/Menu";
import Footer from "../compenents/Footer/footer";

type Item = {
  id: number;
  title: string;
  videoUrl: string;
  image: string;
  cover: string;
}

const Channel = () => {
  const [movies, setMovies] = useState<Item[]>([
    { id: 1, 
      title: 'Filme 1', 
      videoUrl: 'https://www.youtube.com/watch?v=WYeAUpvWeI8', 
      image:'https://m.media-amazon.com/images/I/61zzj8A+ZGL._AC_UF1000,1000_QL80_.jpg',
      cover: './cover.jpg',
    },
      { id: 2, 
      title: 'Filme 2', 
      videoUrl: 'https://www.youtube.com/watch?v=F1B9Fk_SgI0&list=RDMMF1B9Fk_SgI0&start_radio=1', 
      image:'ee',
      cover: '../../public/cover.jpg',
    },
    { id: 3, 
      title: 'Filme 3', 
      videoUrl: 'URL_VIDEO_3',
      image:'123',
      cover:'../../public/cover.jpg',
      
      },
    // Adicione mais filmes conforme necessário
  ]);

  const [selectedMovie, setSelectedMovie] = useState<Item | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hoverMediaRef = useRef<HTMLDivElement | null>(null);

  const handleMovieClick = (movie: Item) => {
    setSelectedMovie(movie);
  };

  const handlePlayClick = () => {
    if (selectedMovie && videoRef.current) {
      videoRef.current.src = selectedMovie.videoUrl;

      // Tente reproduzir o vídeo automaticamente
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Reprodução iniciada com sucesso
        }).catch((error) => {
          console.error('Erro ao tentar reproduzir o vídeo:', error);
        });
      }

      // Tentar entrar em tela cheia
      videoRef.current.requestFullscreen().catch((error) => {
        console.error('Erro ao tentar entrar em tela cheia:', error);
      });
    }
  };

  const closePlayer = () => {
    if (videoRef.current) {
      videoRef.current.pause();  // Pausa o vídeo
      videoRef.current.currentTime = 0;  // Reinicia o tempo de reprodução para o início
      
      // Sai do modo de tela cheia se estiver em tela cheia
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
  
      setSelectedMovie(null);  // Limpa o estado do vídeo
    }
  };

  const handleMouseEnter = (movie: Item) => {
    if (hoverMediaRef.current) {
      hoverMediaRef.current.innerHTML = `
        <img src="${movie.cover}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p>Breve resumo do filme...</p>
      `;
    }
  };

  const handleMouseLeave = () => {
    if (hoverMediaRef.current) {
      hoverMediaRef.current.innerHTML = ''; // Limpa o conteúdo ao sair do hover
    }
  };

  return (
    <div className={globalstyle.container}>
      <Head>
        <title>Portfolio - Tv</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
      <main className={globalstyle.main}>
        <section className={styles.container}>
          <div className={styles.hovermedia} ref={hoverMediaRef}>
            {selectedMovie && (
              <div className={styles.contmediahome} style={{backgroundImage:`url(${selectedMovie.cover})`}}>
                <div>
                
                </div>
                
               
              </div>
            )}
          </div>
          <div>
            <div className={styles.cardlist}>
              {!selectedMovie && movies.map((movie) => (
                <div 
                  key={movie.id} 
                  onClick={() => handleMovieClick(movie)} 
                  onMouseEnter={() => handleMouseEnter(movie)}
                  onMouseLeave={handleMouseLeave}
                  className={styles.card}
                >
                  <img src={movie.image} className={styles.imgcover} alt={movie.title} />
                 
                </div>
              ))}
            </div>

            {selectedMovie && (
              <div className={styles.movieplay}>
                {selectedMovie && 
                  <div onClick={closePlayer} className={styles.btnclose}>Fechar</div>
                }
                <video id="videoPlayer" ref={videoRef} controls autoPlay width="76%" height="84%">
                  <source src={selectedMovie.videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <Navbar />
    </div>
  );
};

export default Channel;
