import React, { useEffect } from "react";
import yo from "../assets/img/yo.jpg";

export default function About() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container">
      <div className="container-about background-space">
        <main className="bio__content">
          <article className="bio__overview">
            <section className="bio__info">
              <h2 className="bio__description">
                UX/UI Developer - Diseño y Desarrollo de Experiencias Digitales
              </h2>
              <p className="bio__details">
                Soy un UX/UI Developer con una visión estratégica para crear
                experiencias digitales intuitivas, eficientes y accesibles. Mi
                enfoque combina diseño centrado en el usuario y desarrollo
                frontend para transformar ideas en productos digitales que no
                solo son atractivas visualmente, sino que realmente mejoran la
                interacción y la conversión.
              </p>
              <p className="bio__details">
                A lo largo de mi carrera, he trabajado en proyectos de alto
                impacto, optimizando interfaces y garantizando una experiencia
                fluida para los usuarios. Domino herramientas como Figma,
                React.js y Tailwind CSS, y aplico metodologías ágiles para
                iterar rápido y mejorar constantemente. Me motiva resolver
                problemas, crear sistemas de diseño escalables y trabajar en
                equipo para construir productos que marquen la diferencia.
              </p>
              <p className="bio__details">
                Mi filosofía es clara: el diseño no es solo estética, es
                funcionalidad, accesibilidad y eficiencia. Creo en interfaces
                que guían, que se sienten naturales y que se adaptan a las
                necesidades del usuario sin fricción. Si buscas a alguien que
                entienda tanto el diseño como el desarrollo y se preocupe por
                cada detalle de la experiencia digital, entonces hablemos.
              </p>
            </section>

            <aside className="bio__gallery">
              <img className="bio__image" src={yo} alt="Moverick" />
            </aside>
          </article>

          <section className="experience__text">
            <h3 className="section-title mt-x3">Experiencia Profesional</h3>
            <div className="containe__experience flex  gap-x5 md:block">
              <div className="col1">
                <div className="experience__description">
                  <h6 className=" mb-d3">
                    Responsable UX/UI <br /> & Frontend Developer
                  </h6>
                  <p className="section-text  s1">NosoloSoftware</p>
                  <p className="s2 mb-x1_2">(2016 - 2024)</p>
                </div>
                <div className="experience__description">
                  <h6 className=" mb-d3">Frontend Developer</h6>
                  <p className="section-text  s1">OPA</p>
                  <p className="s2 mb-x1_2">(2014 - 2015)</p>
                </div>

                <div className="experience__description">
                  <h6 className=" mb-d3">
                    Director de Arte <br /> & Frontend Developer
                  </h6>
                  <p className="section-text  s1">GRX</p>
                  <p className="s2 mb-x1_2">(2013 - 2014)</p>
                </div>
              </div>

              <div className="col2">
                <div className="experience__description">
                  <h6 className=" mb-d3">Director de Arte</h6>
                  <p className="section-text  s1">Señor Correcto Publicidad</p>
                  <p className="s2 mb-x1_2">(2009 - 2013)</p>
                </div>

                <div className="experience__description">
                  <h6 className=" mb-d3">
                    Diseñador Gráfico <br /> & Frontend Developer
                  </h6>
                  <p className="section-text  s1">MB Global</p>
                  <p className="s2 mb-x1_2">(2007 - 2009)</p>
                </div>
                <p className="s2">Para más información</p>
                <a className="email" href="https://drive.google.com/file/d/1gRNaMRed3Z2z2ZjlPfxscDFy8loDjwUg/view?usp=drive_link" download="curriculum-antonio-illescas.pdf" target="_blank" rel="noopener noreferrer">
                  <h6>Descargar currículum</h6>{" "}
                </a>
              </div>
            </div>
          </section>

          <section className="experience__text">
            <h3 className="section-title ">
              Formación Académica & Certificaciones
            </h3>
            <div className="containe__experience">
              <div className="experience__description">
                <h6 className=" mb-d3">
                  Certificación en Frontend Development
                </h6>
                <p className="section-text  s1">Academia CodeSpace</p>
                <p className="s2 mb-x1_2">(2024 - 2025)</p>
              </div>

              <div className="experience__description">
                <h6 className=" mb-d3">
                  Curso en Usabilidad y Experiencia de Usuario
                </h6>
                <p className="section-text  s1">Fundación UNED</p>
                <p className="s2 mb-x1_2">(2018 - 2019)</p>
              </div>

              <div className="experience__description">
                <h6 className=" mb-d3">
                  Certificación en Frontend Development
                </h6>
                <p className="section-text  s1">Academia CodeSpace</p>
                <p className="s2 mb-x1_2">(2023 - 2025)</p>
              </div>

              <div className="experience__description">
                <h6 className=" mb-d3">Bootcamp en Desarrollo Web</h6>
                <p className="section-text  s1">CoSfera & Nosolosoftware</p>
                <p className="s2 mb-x1_2">(2015 - 2016)</p>
              </div>
            </div>
          </section>

          <section className="experience__text">
            <h3 className="section-title">Áreas de Especialización</h3>
            <div className="containe__experience flex  gap-x5 md:block">
              <div className="col1">
                <div className="experience__description flex flex-col gap-3">
                  <p>Diseño de Experiencia de Usuario (UX Design)</p>{" "}
                  <p>Diseño de Interfaces (UI Design)</p>{" "}
                  <p>Desarrollo Frontend Sistemas de Diseño</p>{" "}
                  <p>Prototipado e Interacción</p> <p>Motion Design</p>{" "}
                  <p>Consultoría en Diseño Digital</p>{" "}
                  <p>Optimización de Conversión y Usabilidad</p>
                </div>
              </div>
            </div>
          </section>

          <div className="contact">
            <h3 className="mb-x1_2">Contacto</h3>
            <p className=" mb-x1">
              Si crees que el diseño y la tecnología pueden cambiar la forma en
              que las personas interactúan con el mundo digital, entonces
              estamos en la misma página. Estoy abierto a nuevos proyectos,
              colaboraciones y conversaciones interesantes. Escríbeme y hagamos
              que las ideas cobren vida.
            </p>
            <a className="email" href="mailto:illescas@srcorrecto.com">
              <h6>illescas@srcorrecto.com</h6>{" "}
            </a>
            <a className="Linkedin" href="https://www.linkedin.com/in/illescas/" target="_blank" rel="noopener noreferrer">
              <h6>Linkedin</h6>{" "}
            </a>
            <a className="curriculum" href="https://drive.google.com/file/d/1gRNaMRed3Z2z2ZjlPfxscDFy8loDjwUg/view?usp=drive_link" download="curriculum-antonio-illescas.pdf" target="_blank" rel="noopener noreferrer">
              <h6>Descargar currículum</h6>{" "}
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
