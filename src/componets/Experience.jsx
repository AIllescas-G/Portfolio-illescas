import React from "react";

const experiences = [
  {
    date: "2016 - 2024",
    title: "Responsable de UX/UI & Frontend Developer",
    company: "NosoloSoftware",
    description: [
      "Inicié como Frontend Developer, creando interfaces accesibles y dinámicas con HTML, CSS y JavaScript.",
      "En 2018, asumí el liderazgo del equipo de UX/UI, gestionando seis personas y combinando diseño e integración técnica.",
      "Diseñé un sistema modular basado en Atomic Design con Figma y Sketch, optimizando la escalabilidad y estandarización.",
      "Impulsé pruebas de usabilidad y prototipos interactivos, mejorando la accesibilidad y eficiencia en el desarrollo digital.",
    ],
    tags: ["UX/UI", "Frontend", "Diseño", "Accesibilidad"],
  },
  {
    date: "2014 - 2015",
    title: "Diseñador Gráfico & Frontend Developer",
    company: "OPA",
    description: [
      "Diseñé y desarrollé landing pages, portales y tiendas online para más de 100 autónomos, optimizando la conversión y experiencia del usuario.",
      "Integré marcas, ilustraciones y retoques fotográficos en plataformas digitales.",
      "Lideré un pequeño equipo asegurando coherencia visual y funcional en cada entrega.",
    ],
    tags: ["Diseño Web", "Identidad Visual", "Frontend"],
  },
  {
    date: "2013 - 2014",
    title: "Director de Arte, Ilustrador & Frontend Developer",
    company: "GRX",
    description: [
      "Desarrollé proyectos digitales con tecnologías web básicas, asegurando compatibilidad y diseño responsivo.",
      "Diseñé interfaces y materiales publicitarios para campañas regionales y editoriales de alto impacto.",
    ],
    tags: ["Diseño", "Branding", "Publicidad"],
  },
  {
    date: "2009 - 2013",
    title: "Gerente & Director de Arte",
    company: "Señor Correcto Publicidad",
    description: [
      "Dirigí campañas digitales y tradicionales, integrando branding, diseño gráfico y desarrollo web.",
      "Gestioné un equipo multidisciplinario, creando productos visuales y funcionales adaptados a diversas plataformas.",
    ],
    tags: ["Branding", "Estrategia Digital", "Gestión de Equipos"],
  },
  {
    date: "2007 - 2009",
    title: "Diseñador Gráfico, Ilustrador & Frontend Developer",
    company: "MB Global",
    description: [
      "Gestioné proyectos multimedia en un entorno de publicidad y marketing, combinando diseño y desarrollo web.",
      "Diseñé y maqueté sitios web con Flash, HTML, CSS y ActionScript, creando experiencias visuales interactivas.",
      "Edición y postproducción de videos con Adobe Premiere y Flash, aportando dinamismo a campañas audiovisuales.",
      "Ilustré cartelería, desarrollé identidades visuales y preparé artes finales para impresión de alta calidad.",
    ],
    tags: ["Diseño", "Multimedia", "Producción Audiovisual"],
  },
];

const ExperienceItem = ({ date, title, company, description, tags }) => (
  <div className="experience">
    <p className="s1 date">{date}</p>
    <div className="info">
      <h5 className="sub-title">
        <b>
          {title} - {company}
        </b>
      </h5>
      {description.map((desc, index) => (
        <p className="s1" key={index}>
          {desc}
        </p>
      ))}
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
  return (
    <div className="container-experience">
      <p className="s1 title">EXPERIENCIA</p>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};
