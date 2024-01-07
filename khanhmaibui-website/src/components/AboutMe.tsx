import React from 'react';
import styles from '../styles/AboutMe.module.scss';
import "../styles/Timeline.css";
import "../styles/globals.scss";

export default function AboutMe() {
  return (
    <section id = "about_me">
    <div className={styles.hello}>
      <span className={styles.hello}>Hi, I'm Kaylee Bui!</span>
      <div className = {styles.text_container}>
        <h2> 👩‍💻 I'm a current Computer Science and Business student at Simon Fraser University! 
          <br></br>
          🧮 I love mathematics! I'm constantly amazed by the endless opportunities for learning and exploration it offers.
          <br></br>
          🧑‍🍳 Cooking is my go-to method for relaxation and stress relief.
          <br></br>
          😼 Let's get to know more about me!
        </h2>
      </div>

      <div>
        <a href='#experience' className = {styles.button_container1}>
          <h1> Experience </h1>
        </a>
      </div> 

      <div>
        <a href='#projects' className = {styles.button_container2}>
          <h1> Projects </h1>
        </a>
      </div>

      <div>
      <a href='#contact_me' className = {styles.button_container3}>
        <h1> Contact </h1>
      </a>
      <br></br>
      </div>
    </div>
    </section>
  );
}
