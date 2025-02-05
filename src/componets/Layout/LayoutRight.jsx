import AboutMe from "../AboutMe";
import { Experience } from "../Experience";
import Training from "../Training";


export default function LayoutRight() {
  return (
    <div className="col-der">
      <AboutMe />
      <Experience />
      <Training/>
    </div>
   
  );
}
