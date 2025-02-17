import React, { useEffect } from "react";
import moverick from "../assets/img/moverick.png";
import moverick1 from "../assets/img/moverick-1.png";
import moverickTipo from "../assets/img/moverick-tipo.png";
import moverickColor from "../assets/img/moverick-color.png";
import moverickSpace from "../assets/img/moverick-space.png";

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
              <h1 className="project__title">Moverick</h1>
            </header>

            <section className="project__info">
              <h3 className="project__description">
                En el desafiante mundo del transporte público en Chile, MOVERICK
                surgió como una respuesta audaz para modernizar un sistema
                tradicional. Esta plataforma no es solo una herramienta
                operativa, sino un entorno digital que une a operadores,
                conductores y usuarios en una experiencia coherente y en tiempo
                real.
              </h3>
              <p className="project__details">
                Diseñada de acuerdo con los rigurosos estándares del Ministerio
                de Transporte, MOVERICK optimiza la monitorización de flotas y
                transforma la experiencia del pasajero, brindando información
                actualizada a través de apps, portales web y dispositivos
                instalados en autobuses y paradas. Así, la plataforma se
                posiciona como un referente en movilidad urbana, adaptándose con
                agilidad a las particularidades de cada ciudad y región.
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
              <h2 className="section-title">
                Exploración y Definición del Problema
              </h2>
              <p className="section-text">
                El reto principal era mejorar la percepción del transporte
                público ofreciendo información confiable y accesible de forma
                inmediata. Para ello, emprendí un profundo proceso de
                investigación, realizando entrevistas y encuestas que captaron
                las verdaderas inquietudes y necesidades de los usuarios. Las
                sesiones de testing con prototipos de alta fidelidad, apoyadas
                por herramientas de análisis como Hotjar y Lookback,
                identificaron puntos críticos en la navegación y la falta de
                feedback visual en momentos clave. Este conocimiento fue
                fundamental para definir la necesidad de un sistema de
                navegación intuitivo que priorizara la presentación clara de
                rutas y tiempos de espera, sentando las bases para un diseño
                centrado en el usuario.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">Mi Rol</h2>
              <p className="section-text">
                En este proyecto, mi papel fue crucial tanto en la parte de
                UX/UI como en la implementación frontend. Diseñé la experiencia
                del usuario desde cero, creando wireframes y prototipos
                interactivos que permitieron iterar y perfeccionar cada detalle
                de la interfaz. Me centré en definir los flujos y en elaborar
                soluciones visuales que facilitaran el acceso a la información
                en tiempo real, asegurando que cada interacción fuese clara y
                eficiente. En la parte técnica, me encargué de plasmar este
                diseño en código utilizando HTML, CSS y SCSS, garantizando una
                presentación impecable y consistente en todos los dispositivos,
                sin intervenir en la lógica de JavaScript.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">La Revolución del Diseño</h2>
              <p className="section-text">
                Con el feedback recogido y la visión definida, replanteé la
                experiencia de MOVERICK para que el usuario se sintiera en el
                centro de cada interacción. Utilicé herramientas como Figma y
                Sketch para crear prototipos interactivos que permitieran iterar
                rápidamente y ajustar detalles en tiempo real. La clave fue
                implementar un sistema de diseño modular basado en Atomic
                Design, donde cada elemento, desde los componentes más pequeños
                hasta las vistas completas, se concibió como una pieza
                reutilizable dentro de un ecosistema flexible y escalable. Esta
                metodología aseguró una coherencia visual y funcional a lo largo
                de toda la plataforma, reduciendo significativamente los tiempos
                de desarrollo y facilitando futuras actualizaciones.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={moverick1} alt="Moverick" />
            <img className="project__image" src={moverick} alt="Moverick" />
          </aside>

          <article className="project__overview">
            <section className="project__text ">
              <h2 className="section-title">El Lenguaje de la Movilidad </h2>
              <p className="section-text mb-x1_2">
                Moverick debía ir más allá de ser una simple plataforma
                funcional, aspirando a convertirse en un entorno visualmente
                coherente y cargado de personalidad, donde cada interacción se
                sintiera fluida y natural. Para lograrlo, diseñé un sistema
                modular basado en Atomic Design, donde cada componente, desde
                los elementos más diminutos hasta las vistas completas, se
                concibe como una pieza reutilizable dentro de un ecosistema
                flexible y escalable. Esta aproximación dota a la plataforma de
                un “lenguaje” visual propio que traduce la complejidad del
                transporte en una experiencia de usuario armoniosa y
                consistente.
              </p>

              <p className="section-text">
                Frente al reto de adaptarse a la diversidad de dispositivos y
                contextos, aplicaciones móviles, paneles a bordo, pantallas en
                paradas y un portal web, se hizo imprescindible definir una
                identidad visual unificada. Mediante un riguroso proceso de
                investigación y testeo, establecí pautas claras de tipografía,
                iconografía y estilo, asegurando la accesibilidad y la precisión
                en la presentación de información clave, como horarios, rutas e
                incidencias. Este enfoque no solo optimizó la experiencia del
                usuario, sino que también redujo significativamente los tiempos
                de desarrollo, permitiendo que Moverick se consolidara como un
                referente en movilidad urbana, donde la tecnología y el diseño
                se unen para transformar la vida diaria de los usuarios.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={moverickTipo} alt="Moverick" />
            <img
              className="project__image"
              src={moverickColor}
              alt="Moverick"
            />
            <img
              className="project__image"
              src={moverickSpace}
              alt="Moverick"
            />
          </aside>

          <article className="project__overview">
            <section className="project__text">
              <h2 className="section-title">Impacto y Conclusión</h2>
              <p className="section-text">
                El diseño e implementación de MOVERICK, realizado desde cero, ha
                marcado un antes y un después en el transporte público chileno.
                La plataforma optimiza la monitorización de flotas y la
                eficiencia operativa, transformando radicalmente la experiencia
                del pasajero mediante una interfaz clara y moderna que eleva la
                percepción del servicio. Al digitalizar procesos críticos, como
                el recaudo, se han reducido riesgos de fraude y agilizado el
                embarque de pasajeros, consolidando a MOVERICK como un referente
                en movilidad urbana. Este proyecto demuestra cómo una
                investigación profunda, un diseño centrado en el usuario y una
                ejecución técnica precisa pueden converger para crear soluciones
                digitales que mejoran la vida de las personas, reafirmando mi
                capacidad para liderar iniciativas innovadoras en el ámbito del
                UX/UI y el desarrollo frontend.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
