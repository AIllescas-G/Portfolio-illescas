import React, { useEffect } from "react";
import moverick from "../../assets/img/moverick.png";
import moverick1 from "../../assets/img/moverick-1.png";
import moverickTipo from "../../assets/img/moverick-tipo.png";
import moverickColor from "../../assets/img/moverick-color.png";
import moverickSpace from "../../assets/img/moverick-space.png";
import moverickUno from "../../assets/img/moverick-2.png";
import movericParada from "../../assets/img/moverick-parada.png";

import NavProyect from "../../componets/NavProyect";

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
      <div className="container-info background-space">
        <NavProyect />

        <main className="project__content">
          <article className="project__overview">
            <header className="project__header">
              <h1 className="project__title">Moverick</h1>
            </header>

            <section className="project__info">
              <h3 className="project__description">
                Moverse por la ciudad debería ser simple, intuitivo y sin
                fricciones. Pero en Chile, como en muchas partes del mundo, el
                transporte público ha sido durante años un rompecabezas para los
                pasajeros: tiempos inciertos, rutas confusas, sistemas
                anticuados. MOVERICK nació para cambiar eso.
              </h3>
              <p className="project__details">
                Desde el inicio, MOVERICK se diseñó para hacer que moverse por
                la ciudad fuera más fácil y predecible. A través de una app, un
                portal web y pantallas en paradas y autobuses, el sistema
                conecta a pasajeros, conductores y operadores, proporcionando
                información en tiempo real sobre rutas, horarios y cualquier
                cambio en el servicio. 
              </p>
            </section>

            <section className="project__media">
              <iframe
                src="https://www.youtube.com/embed/22WAC3guCOk?autoplay=1&loop=1&mute=1&playlist=22WAC3guCOk"
                title="Tutorial de la aplicación Moverick"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
              ></iframe>
            </section>

            <section className="project__text">
              <h2 className="section-title">
                Exploración y Definición del Problema
              </h2>
              <p className="section-text mb-x1_2">
                MOVERICK no solo optimiza el transporte público, sino que
                transforma la experiencia del usuario. Desde el inicio,
                realizamos entrevistas con pasajeros y pruebas con prototipos de
                alta fidelidad, utilizando herramientas como Hotjar y Lookback
                para entender cómo interactuaban con la plataforma y detectar
                sus necesidades reales. Con esta información, diseñamos un
                ecosistema digital que conecta pasajeros, conductores y
                operadores a través de una app, un portal web y pantallas en
                paradas y autobuses. Además de ofrecer información en tiempo
                real sobre la llegada de los buses y las mejores rutas, facilita
                el pago con tarjetas de transporte, crédito, débito y códigos
                QR, agilizando el embarque y mejorando la seguridad.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">Mi Rol</h2>
              <p className="section-text mb-x1_2">
                Desde el diseño hasta la implementación, mi rol en MOVERICK fue
                crear una experiencia donde la tecnología se sintiera invisible:
                que todo fluyera de forma natural. Arranqué diseñando la
                interfaz desde cero, creando wireframes y prototipos
                interactivos que fuimos refinando con cada prueba y cada
                iteración.
              </p>

              <p className="section-text">
                Más allá de una apariencia atractiva, me enfoqué en que cada
                pantalla tuviera un propósito claro y que cada interacción
                guiara al usuario de forma intuitiva y sin esfuerzo. Trabajé
                mano a mano con el equipo de desarrollo para asegurarme de que
                todo lo que diseñábamos no solo fuera bonito, sino también
                funcional y rápido. En la parte técnica, llevé esos diseños a
                código con HTML, CSS y SCSS, cuidando que se vieran y sintieran
                bien en cualquier dispositivo.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">
                Darle un lenguaje visual al movimiento
              </h2>
              <p className="section-text mb-x1_2">
                Diseñé una interfaz intuitiva donde rutas, tiempos de espera y
                cambios en el servicio se presentaran de manera clara y sin
                fricciones.
              </p>

              <p className="section-text">
                A través de wireframes y prototipos interactivos, validé cada
                decisión con usuarios reales, asegurando una navegación fluida.
                La clave estuvo en equilibrar funcionalidad y simplicidad,
                eliminando cualquier obstáculo entre el usuario y la información
                que necesitaba. Finalmente, implementé este diseño en código con
                HTML, CSS y SCSS, garantizando una experiencia consistente en
                todos los dispositivos.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={moverick1} alt="Moverick" />
            <img className="project__image" src={moverick} alt="Moverick" />
            <img className="project__image" src={moverickUno} alt="Moverick" />
            <img
              className="project__image"
              src={movericParada}
              alt="Moverick"
            />
          </aside>

          <article className="project__overview">
            <section className="project__text ">
              <h2 className="section-title">
                Sistema de Diseño: Un lenguaje visual coherente y escalable{" "}
              </h2>
              <p className="section-text mb-x1_2">
                Para que MOVERICK funcionara en cualquier contexto, desde apps
                móviles hasta pantallas en buses. Desarrollé un sistema modular
                basado en Atomic Design. Cada componente fue diseñado como una
                pieza reutilizable, asegurando coherencia visual, optimización
                en tiempos de desarrollo y facilidad de escalabilidad.
              </p>

              <p className="section-text">
                Definí reglas claras de tipografía, iconografía y colores,
                priorizando accesibilidad y legibilidad en cualquier entorno.
                Gracias a esta base sólida, la plataforma puede evolucionar sin
                comprometer la experiencia del usuario, manteniendo siempre una
                identidad visual clara y funcional.
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
                Hoy, MOVERICK ha transformado la forma en que miles de personas
                se desplazan por la ciudad. Ahora, los pasajeros cuentan con
                información clara y en tiempo real, reduciendo la incertidumbre
                y mejorando su experiencia. Para los operadores, la optimización
                de flotas ha mejorado la eficiencia y reducido los tiempos de
                espera. Además, la digitalización del recaudo ha hecho el
                sistema más seguro y ágil. Lo que comenzó como un desafío
                técnico se convirtió en un cambio real en la vida de las
                personas.{" "}
                <b>
                  Para mí, reafirma una idea clave: un buen diseño no es solo
                  cómo se ve, sino cómo hace sentir a quien lo usa.
                </b>
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
