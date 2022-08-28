import { Animated } from "react-animated-css";
import ProjectCards from "../components/ProjectCards";

import "./Home.scss";

function Home() {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      isVisible={true}
    >
      <div className="homepg-hdr">
        <div className="container d-flex flex-column text-center">
          <h1 className="display-1">Welcome!</h1>
          <p>
            To the online portfolio of Jeremy Holt - Sr. UI/UX Developer who has
            been creating rich user experiances across the web for over 14
            years. Scroll down to view some of his past and present web projects
            and creations.
          </p>
        </div>
      </div>
      <section className="container my-5">
        <ProjectCards />
      </section>
    </Animated>
  );
}
export default Home;
