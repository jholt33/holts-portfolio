import { Animated } from "react-animated-css";
import ProjectCards from "../components/ProjectCards";
// import { FaReact } from "react-icons/fa";

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
          <h1 className="display-1">Welcome to Holt's Code!</h1>
          <p>
            You have reached the online portfolio of Jeremy Holt - Sr. UI/UX
            Developer<br></br>Scroll down to view some of my past web projects
            and creations
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
