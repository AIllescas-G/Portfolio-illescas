import React, { useEffect } from "react";
import moverick from "../../assets/img/moverick.png";
import moverick1 from "../../assets/img/moverick-1.png";
import moverickTipo from "../../assets/img/moverick-tipo.png";
import moverickColor from "../../assets/img/moverick-color.png";
import moverickSpace from "../../assets/img/moverick-space.png";
import moverickUno from "../../assets/img/moverick-2.png";
import movericParada from "../../assets/img/moverick-parada.png";

import al1 from "../../assets/img/al1.png";
import al2 from "../../assets/img/al2.png";
import al3 from "../../assets/img/al3.png";
import al4 from "../../assets/img/al4.png";
import al5 from "../../assets/img/al5.png";
import al6 from "../../assets/img/al6.png";

import NavProyect from "../../componets/NavProyect";

export default function Subbetica() {
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
              <h1 className="project__title">Subbética</h1>
            </header>

            <section className="project__info">
              <h3 className="project__description">
                En el corazón de la producción de aceite en La Subbética, surgió
                la necesidad de garantizar la fiabilidad y transparencia de los
                datos en las almazaras. Para ello, nació Subbética, una
                plataforma integral que permite la recolección y almacenamiento
                de información mediante formularios, registrándolos en una
                cadena de bloques (blockchain). Este enfoque asegura la
                autenticidad de los datos y refuerza la confianza en el proceso
                de producción.
              </h3>
              <p className="project__details">
                Además, la plataforma establece un roadmap para la
                automatización de la información en cada etapa, desde la
                producción hasta el cliente final. De este modo, Subbética no
                solo optimiza la trazabilidad del producto, sino que también
                impulsa la modernización del sector, alineándose con las
                exigencias actuales de calidad y transparencia.
              </p>
            </section>

            <aside className="project__gallery">
              <img className="project__image" src={al1} alt="Subbetica" />
            </aside>

            <section className="project__text">
              <h2 className="section-title">
                Exploración y Definición del Problema
              </h2>
              <p className="section-text mb-x1_2">
                El reto era transformar un proceso técnico y fragmentado en una
                experiencia intuitiva y accesible. Se diseñó una interfaz que
                organiza grandes volúmenes de datos sin perder claridad,
                permitiendo a productores y consumidores verificar información
                de manera rápida y sencilla. La clave: eliminar complejidad y
                ofrecer una navegación visualmente atractiva.
              </p>
            </section>

            <section className="project__text">
              <h2 className="section-title">
                Solución de Diseño y Enfoque Visual
              </h2>

              <p className="section-text">
                Para reflejar la modernización del sector sin perder identidad,
                opté por ilustraciones en lugar de fotografías, dotando a la
                plataforma de un estilo visual propio. Minimalismo, claridad y
                coherencia guiaron el diseño, asegurando que cada pantalla
                contara una historia sin abrumar al usuario.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={al3} alt="Moverick" />
            <img className="project__image" src={al4} alt="Moverick" />
            <img className="project__image" src={al5} alt="Moverick" />
          </aside>

          <article className="project__overview">
            <section className="project__text ">
              <h2 className="section-title">Implementación y Desarrollo </h2>
              <p className="section-text mb-x1_2">
                Desde los wireframes hasta el código, mi rol combinó UX/UI y
                frontend. Implementé la interfaz con HTML, CSS y SCSS,
                asegurando un diseño modular adaptable a cualquier dispositivo.
                La estructura se desarrolló para integrarse fácilmente con
                futuras automatizaciones sin comprometer la experiencia visual.
              </p>
            </section>
          </article>

          <aside className="project__gallery">
            <img className="project__image" src={al2} alt="Subbetica" />
          </aside>

          <article className="project__overview">
            <section className="project__text">
              <h2 className="section-title">Impacto y Conclusión</h2>
              <p className="section-text">
                Subbética redefine la trazabilidad del aceite con una plataforma
                que fusiona diseño y tecnología. Más que una herramienta de
                control, es una experiencia digital que aporta valor al producto
                y confianza al consumidor. Un claro ejemplo de cómo la
                innovación puede modernizar una industria sin perder su esencia.
              </p>
            </section>
          </article>
          <aside className="project__gallery">
            <img className="project__image" src={al6} alt="Moverick" />
          </aside>
        </main>
      </div>
    </div>
  );
}
