import React, { useEffect, useState, useRef } from "react";
import { training } from "../data/training";

const TrainingItem = ({ category, courses }) => (
  <div className="training-category">
    {courses.map((course, index) => (
      <div className="container-training" key={index}>
        <p className="date">
          <span className="s1">{course.date}</span>
        </p>
        <div className="description">
          <p className="s1">
            {course.title} <b>{course.institution}</b>
          </p>
        </div>
      </div>
    ))}
  </div>
);

export const Training = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTitleVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Detecta cuando el 50% del título es visible
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div id="tra" className="container-training">
      <p
        ref={titleRef}
        className={`title mb-x1_2 ${isTitleVisible ? "scrolled" : ""}`}
      >
        FORMACIÓN ACADÉMICA & CERTIFICACIONES
      </p>
      {training.map((item, index) => (
        <TrainingItem key={index} {...item} />
      ))}
    </div>
  );
};
