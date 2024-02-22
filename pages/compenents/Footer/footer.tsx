import React from 'react';
import styles from './styles.module.css';

export default function Footer(){
    return(
       <div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
           © 2024 Paulo Vieira.
            <span className={styles.logo}>
            </span>
          </a>
        </footer>
       </div>
    );
}