import next from "next";
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Uxpage(){
    return (
         <div className={styles.container}>
    <div className={styles.menutop}>Pagina UX Design</div>
    <div className={styles.main}> body</div>
    <div className={styles.footer}> footer</div>
  </div>
    )
 
}