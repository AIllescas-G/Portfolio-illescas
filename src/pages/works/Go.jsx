import React, { useEffect } from "react";
import go from "../../assets/img/go.png";
import go2 from "../../assets/img/go2.png";
import go3 from "../../assets/img/go3.png";
import go4 from "../../assets/img/go4.png";
import go5 from "../../assets/img/go5.png";
import go6 from "../../assets/img/go6.png";
import go7 from "../../assets/img/go7.png";
import gogif1 from "../../assets/img/gogif1.gif";
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

        <main className="project__content ">
          <article className="project__overview">
            <header className="project__header">
              <h1 className="project__title">Go-Certius</h1>
            </header>

            <section className="project__info">
              <h3 className="project__description">
                Cada proyecto plantea un desafío único y exige un equilibrio
                entre funcionalidad, accesibilidad y propósito. En GoCertius, el
                reto no era solo diseñar una plataforma eficiente, sino generar
                confianza en un ámbito donde la seguridad jurídica es clave.
              </h3>
              <p className="project__details">
                La certificación electrónica es una necesidad creciente, pero
                muchas herramientas del mercado resultaban complejas y poco
                intuitivas. El desafío iba más allá de optimizar la interfaz;
                era fundamental que
                <b>
                  {" "}
                  cada interacción transmitiera credibilidad y transparencia sin
                  fricciones innecesarias.
                </b>
              </p>

              <p className="project__details">
                Desde el inicio, comprendí que este proyecto requería más que un
                buen diseño:
                <b>
                  {" "}
                  debía transformar procesos legales y técnicos en una
                  experiencia clara y accesible.
                </b>{" "}
                Cada pantalla, flujo y detalle fueron concebidos para ofrecer
                una solución digital robusta, asegurando al mismo tiempo una
                navegación fluida y sin barreras. sin barreras.
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
                Construyendo confianza en cada detalle
              </h2>
              <p className="section-text mb-x1_2">
                Para que la certificación digital fuera intuitiva y confiable,
                la interfaz debía minimizar la carga cognitiva y ofrecer una
                trazabilidad clara en todo momento. La incertidumbre no estaba
                en la cantidad de pasos, sino en la falta de claridad en la
                información. Aplicando principios como
                <b>
                  {" "}
                  la visibilidad del estado del sistema y el reconocimiento
                  sobre la memorización
                </b>
                , diseñé una estructura intuitiva que evitara la sobrecarga de
                datos técnicos y guiara al usuario de forma natural, reforzando
                la seguridad y accesibilidad sin comprometer la experiencia.
              </p>

              <p className="section-text">
                <b>Trabajamos estrechamente con el equipo legal de Garrigues</b>{" "}
                para garantizar que cada flujo cumpliera con las normativas sin
                añadir barreras innecesarias. La iteración constante entre
                diseño y requisitos legales permitió que la experiencia final no
                solo fuera eficiente, sino que transmitiera{" "}
                <b>la solidez jurídica que el producto necesitaba.</b>
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={go5} alt="Moverick" />

            <img className="project__image" src={gogif1} alt="Moverick" />
            <img className="project__image" src={go3} alt="Moverick" />
          </aside>

          <article className="project__overview">
            <section className="project__text">
              <h2 className="section-title">
                Transformando un diseño en una experiencia real
              </h2>
              <p className="section-text mb-x1_2">
                Pero diseñar algo funcional y comprensible no era suficiente si
                no se materializaba de manera impecable en la implementación
                técnica. La ejecución debía ser rápida, responsiva y robusta,
                garantizando que los procesos de certificación digital se
                realizaran sin margen de error. Trabajé junto al equipo de
                desarrollo para trasladar cada decisión de diseño al código,
                utilizando HTML, CSS y SCSS para plasmar la interfaz y asegurar
                una coherencia total entre la visión inicial y la experiencia
                final.
              </p>

              <p className="section-text">
                La optimización para dispositivos móviles y tablets fue una
                prioridad, ya que la plataforma debía poder utilizarse en
                distintos entornos sin comprometer la usabilidad. Se
                incorporaron transiciones suaves, microinteracciones y
                validaciones en tiempo real, asegurando que cada usuario
                sintiera en todo momento que el proceso era claro, seguro y sin
                bloqueos innecesarios.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={go6} alt="Moverick" />
            
          </aside>

          <article className="project__overview">
            <section className="project__text">
              <h2 className="section-title">Impacto y conclusiones</h2>
              <p className="section-text mb-x1_2">
                El resultado fue más que una plataforma funcional; GoCertius se
                convirtió en un referente en certificación digital, logrando que
                un proceso altamente técnico y regulado pudiera ejecutarse de
                manera simple y accesible. Personas y empresas ahora tienen en
                sus manos una herramienta que no solo cumple con los más altos
                estándares legales, sino que además ofrece una experiencia
                optimizada y libre de fricciones.
              </p>
              <p className="section-text">
                Este proyecto consolidó una idea que ha sido constante en mi
                trabajo: la tecnología debe ser comprensible para que sea
                adoptada, y la confianza no se construye solo con seguridad
                técnica, sino también con una experiencia diseñada para
                inspirarla. En GoCertius, cada detalle estuvo pensado para que
                la certificación digital no fuera solo un trámite, sino un
                proceso claro, seguro y accesible para todos.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
