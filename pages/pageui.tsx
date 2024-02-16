import next from "next";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Uis from "./Data/dataui/arraydatalist";


export default function Uipage(){
 
    return (
    <div className={styles.container}>
    <div className={styles.menutop}>Pagina UI Design</div>
    <div className={styles.main}>
     <Uis/>
    </div>
    <div className={styles.footer}></div>
  </div>
    )
 
}