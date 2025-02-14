import React, { useState, useEffect } from "react";
import { experiences } from "../data/experience";

const ExperienceItem = ({ date, title, company, description, tags }) => (
  <div   className="experience">
    <p className="s1 date">{date}</p>
    <div className="info">
      <h5 className="sub-title">
        {title} - <b>{company}</b>
      </h5>

      {/* Renderiza la descripción con formato HTML */}
      <div className="description space-y-2">
        {description.map((desc, index) => (
          <p className="s1" key={index} dangerouslySetInnerHTML={{ __html: desc }} />
        ))}
      </div>

      <div className="container-tag">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <p className="s3">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Experience = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector(".title");
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect();
        setIsScrolled(rect.top <= 50); // Cambia de estilo si el título está cerca de la parte superior
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-experience">
      <p id="ex" className={`s1 title ${isScrolled ? "scrolled" : ""}`}>EXPERIENCIA</p>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};
