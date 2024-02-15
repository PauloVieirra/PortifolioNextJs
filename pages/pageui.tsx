import next from "next";
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Uipage(){
    return (
         <div className={styles.container}>
    <div className={styles.menutop}>Pagina UI Design</div>
    <head>123</head>
    <div className={styles.main}>12345</div>
    <div className={styles.footer}></div>
  </div>
    )
 
}