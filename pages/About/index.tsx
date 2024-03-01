import next from "next";
import globalstyle from '../../styles/Items.module.css';
import Head from "next/head";
import styles  from './style.module.css';
import { Menu } from "../compenents/Menu/Menu";
import { Navbar } from "../compenents/Menu/Menu";
import Footer from "../compenents/Footer/footer";

export default function About(){
    return(
      <div className={globalstyle.container}>
           <Head>
          <title> Portifólio - About</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <Menu/>
          <main className={globalstyle.main}>
          <div className={styles.container}>
          
            
 

         </div>
         
        </main>
        <Navbar/>
        <Footer/>
      </div>
    );
}