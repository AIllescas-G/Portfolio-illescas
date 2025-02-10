import insta from "../assets/svg/insta.svg";
import lin from "../assets/svg/lin.svg";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { RiMailAddFill } from "react-icons/ri";

export const InfoMe = () => {
  return (
    <div className="col-izq">
      <div className="fixed">
        <h1>Antonio Illescas</h1>
        <p className="mt-d1 mb-d2 sub-title">
          UX/UI Designer & Frontend Developer
        </p>
        <p className="s1">
          Diseño y desarrollo experiencias digitales intuitivas, accesibles y
          funcionales, combinando creatividad, tecnología y metodologías ágiles
          para impulsar productos innovadores.
        </p>
        <div className="logos">
          <a className=" mail" href="https://www.linkedin.com/in/illescas/">
            {" "}
            <FaLinkedin />
          </a>

          <a className=" mail" href="https://www.linkedin.com/in/illescas/">
            {" "}
            <FaInstagramSquare />{" "}
          </a>
          <a className=" mail" href="">
            {" "}
            <RiMailAddFill />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
