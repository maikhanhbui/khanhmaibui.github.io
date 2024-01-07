import styles from "../styles/Footer.module.scss";


export default function Footer() {
    return (
      <footer className={styles.container}>
        <a href="#about_me" className={styles.back_to_top}>
            <span className={styles.container}>↑ Back to top </span>
        </a>
            <span className={styles.last_updated}>Last Updated: January 2024</span>
      </footer>
    );
  }