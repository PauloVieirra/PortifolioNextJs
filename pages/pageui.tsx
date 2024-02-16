import next from "next";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Uis from "./Data/dataui/arraydatalist";
import Menu from "./compenents/Menu";


export default function Uipage(){
 
    return (
    <div className={styles.container}>
     <Menu/>
    <div className={styles.main}>
     <Uis/>
    </div>
    <div className={styles.footer}></div>
  </div>
    )
 
}