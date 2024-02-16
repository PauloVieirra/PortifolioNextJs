  import { useState, useEffect } from 'react';
  import Head from 'next/head'
  import Image from 'next/image'
  import styles from '../styles/Home.module.css'
  import Link from 'next/link';
  import Certification from './Data/certifications';
  import Menu from './compenents/Menu';

  export default function Home() {

    const [texthi, setTextHi] = useState('');
    const [btnrotulo, setBetnRotulo] = useState ('');

    useEffect(() => {
      const fraseCompleta = "  Hi, I’m UI Design and Front-end Developer.";
      let index = 0;

      const intervalId = setInterval(() => {
        // Verifica se o índice é menor que 41 antes de adicionar o caractere ao texto
        if (index < 43 && fraseCompleta[index] !== undefined) {
          setTextHi((prevText) => prevText + fraseCompleta[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 80); // Ajuste a velocidade da digitação conforme necessário

      // Limpe o intervalo quando o componente for desmontado
      return () => clearInterval(intervalId);
    }, []);

    const testebtn= () => {
      setBetnRotulo('Talk to me!');
    };
  
    return (
      <div className={styles.container}>
        <Head>
          <title>Portifólio Paulo Vieira</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu/>
        <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.contbannerinto} >
            <div className={styles.profilecard}>
              <Image
                src="/images/pjperson.png"
                alt="Descrição da imagem"
                width={140} 
                height={140} 
                />
          <div className={styles.datacardprof}>
              <a> Paulo Vieira</a>
              <a style={{fontSize:'12px'}}>vieirajjr@gmail.com</a>
          
            <div className={styles.contlinebtn}>
              <div className={styles.contbutton}>
                <Image
                alt="Descrição da imagem"
                src="/whats.png"
                width={32}
                height={32}
                />
                {btnrotulo && 
                    <div style={{marginLeft:'6px'}}>
                    {btnrotulo}
                    </div>
                }
          </div>
          <div className={styles.contbutton}>
                <Image
                  alt="Descrição da imagem"
                src="/iconguit.png"
                width={32}
                height={32}
                />
                  {btnrotulo && 
                    <div style={{marginLeft:'6px'}}>
                  {btnrotulo}
                </div>
                  }
          </div>
          <div className={styles.contbutton}>
                <Image
                  alt="Descrição da imagem"
                src="/iconin.png"
                width={32}
                height={32}
                />
                  {btnrotulo && 
                    <div style={{marginLeft:'6px'}}>
                  {btnrotulo}
                </div>
                  }
          </div>
          </div>
          </div>
          </div>
            </div>
            <div className={styles.contbannerintotext} style={{ maxWidth:'900px'}}>
            <div className={styles.line}>
            <div  className={styles.hi}><a>{"Hi, I’m UI Design and Front-end Developer."}</a></div>
              </div>
              <div className={styles.line}>
              </div>
              <div className={styles.line}>
              </div>
            </div>
        </div>
        <div className={styles.contant}>
        <div className={styles.firstsection}>
              <div className={styles.title}><a> A little about myself </a></div>
              <text className={styles.text}>Owner of a very creative mind, quick to learn, analytical and hyperfocused on my goals, I love technology and its ability to promote change. Select how I can contribute to your project from the options below.</text>
        </div>
        <div className={styles.contmove}>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/jX_CYgOKodg"
          title="YouTube Video Player"
          allowFullScreen
        />
      </div>
        <div className={styles.secondsection}>
            <div className={styles.secondcenter}>
          <Link href={"/pageux"} style={{width:'20%', height:'200px'}}>
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

            <Link href={"/pageui"} style={{width:'20%', height:'200px'}}>
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
              <Link href={"/pagefrontend"} style={{width:'20%', height:'200px'}}> 
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
              <Link href={"/pagebackend"}style={{width:'20%', height:'200px'}}> 
              <div className={styles.card}> 
              <Image
                src="/server.png" 
                alt="Descrição da imagem"
                width={48} 
                height={48} 
              />
              <p>Back-End</p>
            </div> </Link>
        </div>
        </div>
        </div>
        <div className={styles.firstsection} style={{paddingTop:'20px'}}>
              <div className={styles.title}><a>Some courses and training</a></div>
              <text className={styles.text}>Check out some course and training certificates that help me develop an analytical and creative vision for projects.</text>
        </div>

    
        <div className={styles.certificationsGrid}>
            <Certification/>
        <div className={styles.linebass}>
        <div className={styles.btnseeall}> See all! </div> 
          </div> 
        </div>
          
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
  }
