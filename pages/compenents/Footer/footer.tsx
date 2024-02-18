import styles from './styles.module.css';

export function Footer(){
    return(
       <div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
            </span>
          </a>
        </footer>
       </div>
    );
}