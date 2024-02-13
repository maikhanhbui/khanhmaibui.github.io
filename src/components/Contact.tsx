import React from "react";
import Header from "./Header";
import LinkedIn from "../public/svg/linkedinLogo.png";
import Email from "../public/svg/emailLogo.png";
import Github from "../public/svg/githubLogo2.png";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact_me" className={styles.contact}>
      <Header title="Contact" color="#69818d" />
      <div className={styles.content}>
        <div className={styles.social_container}>
          <h1 className={styles.header}>Let's connect!</h1>
          <div className={styles.shell_container}>
            <div className={styles.shell_container1}>
              <a
                className={styles.linkedin}
                href="mailto:khanh_bui@sfu.ca"
              >
                <img src={Email} alt="Email" className={styles.shell} />
              </a>
              <a
                className={styles.github}
                href="https://github.com/khanhmaibui"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github" className={styles.shell} />
              </a>
            </div>
            <div className={styles.shell_container2}>
              <a
                className={styles.email}
                href="https://www.linkedin.com/in/khanh-mai-bui//"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" className={styles.shell} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
