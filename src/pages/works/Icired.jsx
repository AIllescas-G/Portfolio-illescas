import React, { useEffect } from "react";
import ic1 from "../../assets/img/ic1.png";
import ic2 from "../../assets/img/ic2.png";
import ic3 from "../../assets/img/ic3.png";

import NavProyect from "../../componets/NavProyect";

export default function Icired() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container">
      <div className="container-info background-space">
        <NavProyect />

        <main className="project__content">
          <article className="project__overview">
            <header className="project__header">
              <h1 className="project__title">ICIRED</h1>
            </header>

            <section className="project__info">
              <h3 className="project__description">
                Icired representó un desafío único dentro de NoSoloSoftware, no
                solo por ser mi primer gran proyecto en la empresa, sino por la
                amplitud de responsabilidades que asumí. En un momento en el que
                la estructura aún no estaba definida por departamentos, mi rol
                abarcó desde la definición del producto y diseño UX/UI hasta la
                maquetación web e interacción con clientes.
              </h3>
              <p className="project__details">
                El objetivo era desarrollar una plataforma digital para la
                gestión de impagos y reclamaciones, combinando accesibilidad,
                eficiencia y cumplimiento legal. El reto no solo radicaba en
                ofrecer una interfaz intuitiva, sino en garantizar que cada paso
                cumpliera con las normativas jurídicas sin afectar la
                experiencia del usuario. Para ello, trabajé en estrecha
                colaboración con el equipo de ICired y el despacho de abogados
                Garrigues, asegurando que la plataforma equilibrara usabilidad y
                requisitos legales en cada interacción.
              </p>
            </section>

            <section className="project__media">
              <iframe
                className="project__video"
                width="100%"
                height="409px"
                src="https://www.youtube.com/embed/gNfoXsNHDW0?autoplay=1&mute=1&loop=1&playlist=gNfoXsNHDW0"
                title="ICIRED: Servicio de Reclamación de Impagos"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </section>


            <section className="project__text">
              <h2 className="section-title">
                Exploración y Definición del Problema
              </h2>
              <p className="section-text mb-x1_2">
                A diferencia de otros proyectos, ICired exigía un enfoque
                multidisciplinario, donde el diseño no solo respondía a
                necesidades funcionales, sino también a exigencias legales. Sin
                una estructura de departamentos claramente definida, asumí un
                rol transversal, combinando diseño de producto, UX/UI y
                validación legal.
              </p>
              <p className="section-text mb-x1_2">
                A través de pruebas con usuarios y análisis de flujo de trabajo,
                identifiqué las principales fricciones en la gestión de
                reclamaciones, desde barreras en la navegación hasta la
                complejidad en la presentación de documentos legales. Más allá
                de la usabilidad, el reto era lograr que cada paso cumpliera con
                los requisitos normativos sin generar confusión. Para ello,
                participé en reuniones con Garrigues, afinando cada detalle
                hasta lograr un sistema que fuera accesible, claro y
                jurídicamente sólido.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={ic1} alt="Moverick" />
          </aside>

          <article className="project__overview">
            <section className="project__text">
              <h2 className="section-title">
                Diseño de Interfaces – Confianza y Profesionalismo
              </h2>
              <p className="section-text mb-x1_2">
                Dado que ICired manejaba datos financieros y procesos legales
                sensibles, el diseño debía transmitir transparencia y confianza.
                Para lograrlo, desarrollé una interfaz limpia y profesional,
                donde los tonos azules reforzaban la seguridad y la fiabilidad
                del sistema. Cada pantalla fue optimizada para presentar la
                información de manera clara, asegurando que incluso usuarios sin
                conocimientos técnicos o jurídicos pudieran comprender cada paso
                del proceso.
              </p>

              <p className="section-text">
                La plataforma fue diseñada con un enfoque responsivo,
                garantizando una experiencia fluida tanto en escritorio como en
                tablets, adaptándose a distintos contextos de uso sin
                comprometer la accesibilidad ni la funcionalidad.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={ic3} alt="Moverick" />
            
          </aside>

          <article className="project__overview">
            <section className="project__text ">
              <h2 className="section-title">Implementación y Desarrollo</h2>

              <p className="section-text mb-x1_2">
                Mi rol en ICired no se limitó a la conceptualización; también
                participé activamente en la maquetación web, asegurándome de que
                cada detalle del diseño se reflejara con precisión en la
                implementación. Utilicé HTML, CSS y SCSS, enfocándome en lograr
                una estructura visual coherente y adaptable a todos los
                dispositivos.
              </p>
              <p className="section-text">
                Dado que la plataforma debía cumplir con exigencias legales
                estrictas, trabajé junto al equipo backend en la integración de
                formularios validados, procesos de firma digital y generación
                automatizada de documentación. Además, implementé
                microinteracciones y transiciones suaves que aportaron fluidez a
                la navegación sin comprometer la seriedad y formalidad del
                sistema.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={ic2} alt="Moverick" />
          </aside>

          <article className="project__overview">
            <section className="project__text">
              <h2 className="section-title">Impacto y Reflexión</h2>
              <p className="section-text mb-x1_2">
                ICired se consolidó como una plataforma robusta que digitaliza
                la gestión de reclamaciones, permitiendo a los usuarios manejar
                impagos de manera rápida y segura. La combinación de diseño de
                producto, UX/UI y desarrollo frontend resultó clave para
                equilibrar eficiencia, accesibilidad y cumplimiento normativo.
              </p>
              <p className="section-text">
                Más allá del impacto del proyecto, ICired supuso un punto de
                inflexión en mi carrera. Fue el primer producto en el que asumí
                un rol integral, desde la estrategia y la conceptualización
                hasta la implementación técnica. Esta experiencia reafirmó mi
                capacidad para liderar soluciones digitales en sectores donde el
                diseño debe armonizarse con la tecnología y la normativa legal.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
