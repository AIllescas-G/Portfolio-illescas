import React from "react";

export default function Training() {
  return (
    <section className="container-training">
      <h1 className="s1 title">FORMACIÓN ACADÉMICA & CERTIFICACIONES</h1>

      <article>
        <h6 className="sub-title">Desarrollo Frontend & Diseño UX/UI</h6>
        <ul>
          <li className="s1">
            <span className="date">2023 - 2025</span> Certificación en Frontend
            Development | Academia CodeSpace
          </li>
          <li className="s1">
            <span className="date">2023</span> Certificación en Digital Product
            Design | The Hero Camp
          </li>
          <li className="s1">
            <span className="date">2018 - 2019 </span> Curso en Usabilidad y
            Experiencia de Usuario (500h) | Fundación UNED
          </li>
        </ul>
      </article>

      <article>
        <h6 className="sub-title">Desarrollo Web & Metodologías Ágiles</h6>
        <ul>
          <li className="s1">
            <span className="date"> 2015 - 2016</span> Bootcamp de Desarrollo Web
            Inmersivo | CoSfera
          </li>
          <li className="s1">
            <span className="date"> 2010 - 2011 </span> Certificación en Community
            Management & Social Media Strategy | Instituto Internacional de
            Marketing
          </li>
        </ul>
      </article>

      <article>
        <h6 className="sub-title">Diseño Gráfico & Producción Multimedia</h6>
        <ul>
          <li className="s1">
            <span className="date"> 2004 - 2006 </span> Especialización en Diseño
            Gráfico y Producción Multimedia | Escuela de Arte
          </li>
          <li className="s1">
            <span className="date"> 2002 - 2004</span> Técnico Superior en
            Gráficas Publicitarias | Escuela de Arte y Oficios
          </li>
        </ul>
      </article>
    </section>
  );
}
