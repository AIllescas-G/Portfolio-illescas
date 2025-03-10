import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import pMoverick from "../assets/img/moverick-p.png";
import pCertius from "../assets/img/go-por.png";
import pSubbetica from "../assets/img/subbetica-por.png";
import pIcired from "../assets/img/icired-por.png";

export default function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container">
      <main className="home background-space">
        <header>
          <h1 className="title">
            Diseñador UX/UI. <br />
            Frontend Developer & más
          </h1>
        </header>
        <section className="info-header">
          <p className="text">
            Diseño y desarrollo experiencias digitales intuitivas, accesibles y
            funcionales, combinando creatividad, tecnología y metodologías
            ágiles para impulsar productos innovadores.
          </p>
          <p className="p s2 mt-x1 sub-title"> ¿Hablamos? </p>

          <a className="email" href="mailto:illescas@srcorrecto.com">
            <h3>illescas@srcorrecto.com</h3>{" "}
          </a>
        </section>
        <section className="works">
          <div className="container-work-1">
            <article className="work">
              <NavLink to="/moverick">
                <div className="container-img">
                  <img className="img" src={pMoverick} alt="Project Moverick" />
                </div>
                <div className="info">
                  <p className="title">Moverick</p>
                  <p className="s1 sub-title">
                    Plataforma de gestión de movilidad urbana
                  </p>
                </div>
              </NavLink>
            </article>

            <article className="work">
              <NavLink to="/subbetica">
                <div className="container-img">
                  <img
                    className="img"
                    src={pSubbetica}
                    alt="Project Subbética"
                  />
                </div>
                <div className="info">
                  <p className="title">Subbética</p>
                  <p className="s1 sub-title">
                    Transparencia de los datos en las almazaras
                  </p>
                </div>
              </NavLink>
            </article>
          </div>

          <div className="container-work-2">
            <article className="work">
              <div className="info">
                <p className="title">Go-Certius</p>
                <p className="s1 sub-title">
                  certificación de documentos mediante blockchain
                </p>
              </div>

              <NavLink to="/go">
                <div className="container-img">
                  <img
                    className="img"
                    src={pCertius}
                    alt="Project Go-Certius"
                  />
                </div>
              </NavLink>
            </article>

            <article className="work">
              <div className="info">
                <p className="title">Icired</p>
                <p className="s1 sub-title">Plataforma de gestión de impagos</p>
              </div>
              <NavLink to="/icired">
                <div className="container-img">
                  <img className="img" src={pIcired} alt="Project Icired" />
                </div>
              </NavLink>
            </article>
          </div>
        </section>

        <section className="about">
          <p className="info">
            Soy un diseñador UX/UI con una fuerte pasión por crear experiencias
            digitales intuitivas, funcionales y centradas en el usuario. Mi
            enfoque va más allá del diseño visual, abarcando desde la
            investigación y conceptualización hasta la implementación,
            asegurando productos con alto impacto en usabilidad y accesibilidad.
          </p>

          <div className="nav-links">
            <Link className="" to="/illescas">
              <h5>Acerca de mí</h5>
            </Link>

            <p className="p"> Ponte en contacto conmmigo </p>

            <a className="email" href="mailto:illescas@srcorrecto.com">
              <h2>illescas@srcorrecto.com</h2>{" "}
            </a>
            <p className="s3 illescas">
              Diseñado libremente en Figma y codificado en Visual Studio Code
              por mí. Creado con Next.js y Tailwind CSS, implementado con
              Vercel. Todo el texto está configurado en la tipografía Inter. ©
              Antonio Illescas 2025
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
