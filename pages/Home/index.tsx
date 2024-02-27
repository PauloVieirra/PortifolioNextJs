  import { useState, useEffect, MouseEventHandler } from 'react';
  import Head from 'next/head'
  import Image from 'next/image'
  import styles from './Home.module.css';
  import globalstyle from '../../styles/global.module.css';
  import Link from 'next/link';
  import Certification from '../Data/certifications';
  import Menu from '../compenents/Menu/Menu';
  import { Navbar } from '../compenents/Menu/Menu';
  import Banner from '../compenents/Banner/banner';
  import Footer from '../compenents/Footer/footer';


  export default function Home() {

    const [btnrotulo, setBetnRotulo] = useState ('');
    const [handleviewmore, setHandleViewMore] = useState(false);

    const viewmore : MouseEventHandler<HTMLDivElement> = (event) => {
      setHandleViewMore ((prevValue) => !prevValue);
    };

  
    return (
      <div className={globalstyle.container}>
        <Head>
          <title>Portifólio - Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu/>
        <main className={globalstyle.main}>
        <Banner/>

        <section className={styles.contsesion}>
          
          <div className={styles.firstsection}>
          <div className={styles.title}><a> A little about myself </a></div>
          <div className={styles.text}>Owner of a very creative mind, quick to learn, analytical and hyperfocused on my goals, I love technology and its ability to promote change.</div>
          </div>
          <div className={styles.line}>
            <div className={styles.btnlearnmore} onClick={viewmore}> {handleviewmore ? 'Close' : 'More'}</div>
          </div>
          <div className={styles.contmove}>
          { handleviewmore === true &&
           <iframe
            src="https://www.youtube.com/embed/jX_CYgOKodg"
            title="YouTube Video Player"
            className={styles.player}
            allowFullScreen/>
          }
          </div>

        </section>
        
        <section className={styles.contsesionsec}>

        <div className={styles.firstsection}>
              <div className={styles.title}><a> how I can help your organization </a></div>
              <div className={styles.text}> Select how I can contribute to your project from the options below.</div>
        </div>
        <div className={styles.gridcontainer}>
          <Link href={"./Ux"} style={{width:'100%', height:'200px'}}>
            <div className={styles.card}>
            <Image
                src="/ux.png" 
                alt="Descrição da imagem"
                width={48} 
                height={48} 
              />
              <p>UX Design </p>
                </div>
          </Link>
          <Link href={"./Ui"} style={{width:'100%', height:'200px'}}>
            <div className={styles.card}>
            <Image
                src="/pencil.png" 
                alt="Descrição da imagem"
                width={48} 
                height={48} 
              />
              <p>UI Design </p>
              </div>
          </Link>
          <Link href={"./Front"} style={{width:'100%', height:'200px'}}> 
            <div className={styles.card}>
            <Image
                src="/code.png" 
                alt="Descrição da imagem"
                width={48} 
                height={48} 
              />
              <p>Front-End</p>
              </div>
          </Link>
              <Link href={"./Mobile"}style={{width:'100%', height:'200px'}}> 
              <div className={styles.card}> 
              <Image
                src="/server.png" 
                alt="Descrição da imagem"
                width={48} 
                height={48} 
              />
              <p>Mobile</p>
            </div> </Link>
        </div>
        </section>

        <section className={styles.contsesionter}>
        <div className={styles.firstsection}>
              <div className={styles.title}><a>Some courses and training</a></div>
              <div className={styles.text}>Check out some course and training certificates that help me develop an analytical and creative vision for projects.</div>
        </div>
        <div className={styles.certificationsGrid}>
            <Certification/>
        
        </div>
        
        </section>
        <div className={styles.linebass}>
        <div className={styles.btnseeall}> See all! </div> 
          </div> 
        </main>
       <Footer/>
       <Navbar/>
      </div>
    )
  }
