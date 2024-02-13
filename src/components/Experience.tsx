import React from "react";
import Header from "./Header";
import { experience } from "../content/Experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import styles from "../styles/Experience.module.scss";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <Header title="Experience" color="#FBA1D4" />
      <div className={styles.content}>
        <VerticalTimeline animate={true} layout="1-column">
          {experience.map((exp) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  border: "6px solid " + exp.bgColor,
                }}
                position="left"
                icon={exp.logo}
                date={exp.time}
              >
                <div className={styles.title}>
                  <h2 className="vertical-timeline-element-title">
                  <span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                    {exp.role}
                  </span>
                  </h2>
                  <h2 className={styles.company}>{" @ " + exp.company}</h2>
                </div>
                <div className={styles.title}>
                {exp.tools.length > 0 && 
                (<p className="vertical-timeline-element-subtitle">
                  Tools: {exp.tools.join(", ")}
                </p>)}
                </div>
                <div className={styles.desc}>{exp.desc}</div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
