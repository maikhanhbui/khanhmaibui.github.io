import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import styles from '../styles/AboutMe.module.scss';
import "../styles/Timeline.css";
import "../styles/globals.scss";

const TextLoop = () => {
  const messages = [
    " am a software engineer.",
    " love Mathematics.",
    " enjoy cooking.",
    " am happy you are here!",
  ];

  const colors = ["#FBA1D4", "#E2B4FF", "#ADE989", "#FFE595"];
  const [message, setMessage] = useState(messages[0]);
  const [color, setColor] = useState(colors[0]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setTyping(true);
  }, [typing]);

  const repeatText = () => {
    setTyping(false);
    let index = messages.indexOf(message);
    if (index >= messages.length - 1) {
      index = -1;
    }
    setMessage(messages[index + 1]);
    setColor(colors[index + 1]);
  };

  return (
    <div>
      {typing ? (
        <Typist
          cursor={{ show: false }}
          onTypingDone={() => {
            repeatText();
          }}
          stdTypingDelay={0}
          className="typist"
        >
          <h2 style={{ color: color }} className={styles.message}>
            {message}
          </h2>
          <Typist.Backspace count={message.length+1} delay={700} />
        </Typist>
      ) : (
        <h2 className={color}>{message}</h2>
      )}
    </div>
  );
};


export default function AboutMe() {
  return (
    <section id = "about_me">
      <div className={styles.button}>
        <a href='#experience' className = {styles.button_container1}>
          <h1> Experience </h1>
        </a>
      </div> 

      <div className={styles.button}>
        <a href='#projects' className = {styles.button_container2}>
          <h1> Projects </h1>
        </a>
      </div>

      <div className={styles.button}>
      <a href='#contact_me' className = {styles.button_container3}>
        <h1> Contact </h1>
      </a>
      </div>

    <div className={styles.hello}>
    <br></br>
      <h1 className={styles.hello}>Hello there, I'm Kaylee! 👋 </h1>
      <span className={styles.i}>
            <h2>I&nbsp;</h2>
            <TextLoop />
      </span>
    <br></br>
    <br></br>
    <br></br>
    </div>
    </section>
  );
}
