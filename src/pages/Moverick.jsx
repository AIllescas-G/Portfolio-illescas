import React, { useEffect } from "react";
import moverick1 from "../assets/img/moverick.png";
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
            <p className="project__role">UX/UI - Wireframes - HTML & CSS </p>
            <header className="project__header">
              <h1 className="project__title">MOVERICK</h1>
            </header>

            <section className="project__info">
              <h3 className="project__description">
                Una solución integral para operadores, conductores y usuarios
                del transporte público en Chile, diseñada según los estándares
                del Ministerio de Transporte. Optimiza la operación y
                monitorización de flotas, y mejora la experiencia del pasajero
                al difundir información en tiempo real a través de aplicaciones,
                sitios web y dispositivos a bordo y en paradas.
              </h3>
              <p className="project__details">
                Gracias a esta innovación, MOVERICK se ha consolidado como líder
                en la gestión de movilidad, adaptándose ágilmente a las
                particularidades de cada ciudad o región, lo que la posiciona
                como una herramienta esencial para la modernización del
                transporte público.
              </p>
            </section>

            <section className="project__media">
              <iframe
                className="project__video"
                width="100%"
                height="408px"
                src="https://www.youtube-nocookie.com/embed/22WAC3guCOk?autoplay=1&mute=1&loop=1&playlist=l6nXomzoerA&enablejsapi=1"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
              ></iframe>
            </section>

         

            <section className="project__text">
              <h2 className="section-title">
                Exploración y Definición del Problema
              </h2>
              <p className="section-text">
                El principal desafío que enfrentábamos era mejorar la percepción
                del usuario sobre el transporte público, ofreciendo información
                confiable y accesible al instante. Para lograrlo, emprendí un
                proceso de investigación que incluyó entrevistas y encuestas,
                capturando de forma directa las inquietudes y expectativas de
                quienes utilizan el sistema. Las sesiones de testing con
                prototipos de alta fidelidad, respaldadas por herramientas como
                Hotjar y Lookback, permitieron observar en vivo la interacción
                con las interfaces, revelando dificultades en la navegación y la
                falta de confirmación visual en acciones críticas. Este
                conocimiento fue determinante para definir la necesidad de un
                sistema de navegación intuitivo que priorizara la presentación
                clara de rutas y tiempos de espera, cimentando las bases para un
                rediseño enfocado en el usuario.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">Mi Rol</h2>
              <p className="section-text">
                En este proyecto desempeñé un papel fundamental, centrando mis
                esfuerzos en la parte de UX/UI y en la implementación frontend.
                Fui responsable de diseñar la experiencia del usuario, creando
                wireframes y prototipos interactivos que sirvieron para iterar y
                refinar la interfaz. Mi labor incluyó el rediseño de flujos y la
                elaboración de soluciones visuales que facilitaran el acceso a
                la información en tiempo real, logrando que cada interacción
                fuera clara y eficiente. En el ámbito del frontend, me concentré
                exclusivamente en la implementación de HTML, CSS y SCSS,
                asegurando que la presentación visual fuera impecable y
                consistente en todos los dispositivos, sin involucrarme en la
                lógica de JavaScript.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">La Revolución del Diseño</h2>
              <p className="section-text">
                Con los insights obtenidos, se trazó un nuevo camino para la
                interfaz de MOVERICK. La experiencia se replanteó con un enfoque
                que coloca al usuario en el centro, facilitando el acceso
                inmediato a información crucial como horarios, rutas e
                incidencias. Utilicé herramientas como Figma y Sketch para
                desarrollar prototipos interactivos que permitieron iterar de
                forma ágil, integrando el feedback constante de usuarios y
                stakeholders. La implementación de un sistema de diseño modular
                basado en la metodología Atomic Design fue clave para garantizar
                una coherencia visual y funcional en cada componente, desde lo
                más elemental hasta la estructura completa de la interfaz,
                reduciendo así los tiempos de desarrollo y facilitando futuras
                actualizaciones.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={moverick1} alt="Moverick" />
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
            <img className="project__image" src={moverick1} alt="Moverick" />
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
