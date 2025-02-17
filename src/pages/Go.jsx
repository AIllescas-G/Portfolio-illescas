import React, { useEffect } from "react";
import go from "../assets/img/go.png";
import NavProyect from "../componets/Layout/NavProyect";

export default function Moverick() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container">
      <div className="container-info">
        <NavProyect />

        <main className="project__content">
          <article className="project__overview">
            <p className="project__role">UX/UI - Wireframes - HTML - CSS - JavaScripts </p>
            <header className="project__header">
              <h1 className="project__title">APP - Go-Certius</h1>
            </header>

            <section className="project__info">
              <h3 className="project__description">
                Se desarrolla en el marco de la transformación digital,
                atendiendo la necesidad de profesionales de gestionar, validar y
                certificar sus competencias de forma ágil y segura. Conecta a
                usuarios con oportunidades de certificación y entidades
                acreditadoras, ofreciendo un sistema intuitivo con seguimiento
                en tiempo real, recordatorios de renovación y recomendaciones
                personalizadas.
              </h3>
              <p className="project__details">
                Además, la plataforma refuerza la confianza y credibilidad de
                profesionales y empleadores al proporcionar un medio
                transparente para validar habilidades. Su interfaz limpia y
                moderna facilita la gestión de certificaciones, posicionándose
                como un aliado estratégico que impulsa la formación continua y
                el reconocimiento del talento en un mercado laboral competitivo.
              </p>
            </section>

            <section className="project__media">
              <iframe
                className="project__video"
                width="100%"
                height="409px"
                src="https://www.youtube-nocookie.com/embed/22WAC3guCOk?autoplay=1&mute=1&loop=1&playlist=l6nXomzoerA&enablejsapi=1"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
              ></iframe>
            </section>

            <section className="project__text">
              <h2 className="section-title">Contexto y Visión</h2>
              <p className="section-text">
                En un mundo en el que la transformación digital redefine las
                reglas del juego laboral, la App Profesional de GoCertius surge
                como una respuesta innovadora a la creciente necesidad de
                gestionar, validar y certificar competencias de forma ágil y
                segura. Esta plataforma se erige como un puente que conecta a
                los profesionales con oportunidades de certificación,
                permitiéndoles acceder a credenciales oficiales y fortalecer su
                reputación en un entorno laboral altamente competitivo.
                Inspirada en el propósito de eliminar la burocracia y
                simplificar procesos tradicionales, la aplicación optimiza cada
                paso del registro, la verificación y la visualización de
                certificaciones, ofreciendo una experiencia integral y
                personalizada en un mercado en constante evolución.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">Estudio de Usabilidad</h2>
              <p className="section-text">
                El camino hacia la excelencia comenzó con un exhaustivo estudio
                de usabilidad, centrado en comprender las necesidades y
                expectativas de los usuarios. A través de entrevistas y
                encuestas, se obtuvieron insights valiosos que, complementados
                con sesiones de testing mediante prototipos de alta fidelidad,
                revelaron áreas críticas de mejora en la navegación y respuesta
                del sistema. La aplicación de heurísticas inspiradas en los
                principios de Nielsen, junto con el mapeo del customer journey,
                permitió identificar momentos clave donde la claridad y el
                feedback visual eran esenciales para generar confianza. Estos
                hallazgos fueron la base para rediseñar la interfaz,
                enfocándonos en una experiencia coherente y centrada en el
                usuario.
              </p>
            </section>
          </article>

          <article className="project__overview">
            <section className="project__text ">
              <h2 className="section-title">
                Solución de Diseño y Sistema de Diseño
              </h2>
              <p className="section-text">
                Con el objetivo de crear una interfaz intuitiva y funcional, la
                solución se fundamentó en un diseño centrado en el usuario.
                Rediseñamos la experiencia para facilitar el acceso a
                información vital sobre certificaciones, implementando un
                sistema de diseño modular basado en la metodología Atomic
                Design. Este enfoque permitió integrar de forma armoniosa desde
                los componentes más elementales hasta la estructura completa de
                cada vista, garantizando consistencia, escalabilidad y
                eficiencia. Cada interacción se diseñó meticulosamente para
                ofrecer una experiencia visualmente atractiva y coherente a lo
                largo de toda la plataforma.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={go} alt="Moverick" />
          </aside>

          <article className="project__overview">
            <section className="project__text ">
              <h2 className="section-title">Implementación Frontend</h2>
              <p className="section-text">
                La ejecución técnica se basó en tecnologías modernas que
                aseguraron una experiencia fluida y dinámica. Utilizando HTML5,
                CSS3 y JavaScript (ES6+), y aprovechando React.js para el
                desarrollo de componentes interactivos, se construyeron
                interfaces optimizadas y semánticas. La integración de
                preprocesadores como SASS y frameworks como Tailwind CSS
                permitió mantener un estilo coherente y acelerar el desarrollo,
                mientras que el diseño responsive garantizó que la experiencia
                se adaptara a dispositivos móviles, tablets y escritorios. Las
                transiciones suaves y microanimaciones añadieron un toque
                sofisticado, proporcionando feedback visual inmediato y haciendo
                cada interacción natural e intuitiva.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={go} alt="Moverick" />
          </aside>

          <article className="project__overview">
            <section className="project__text">
              <h2 className="section-title">Impacto y Conclusión</h2>
              <p className="section-text">
                El resultado fue una plataforma que no solo simplificó el
                proceso de certificación, sino que también elevó la confianza y
                credibilidad tanto de los profesionales como de los empleadores.
                La navegación se volvió intuitiva, la integración de datos en
                tiempo real facilitó decisiones informadas y la interfaz, pulida
                y moderna, reflejó con precisión la identidad de GoCertius. Este
                proyecto es un claro testimonio de cómo la investigación
                profunda, el diseño estratégico y una implementación técnica
                robusta pueden converger para transformar la experiencia
                digital. En definitiva, la App Profesional de GoCertius reafirma
                mi capacidad para liderar soluciones innovadoras en el ámbito
                del UX/UI y el desarrollo frontend, convirtiéndose en un ejemplo
                tangible de excelencia en la transformación digital.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
