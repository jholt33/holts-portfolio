import PageTitle from "../components/PageTitle";
import { Animated } from "react-animated-css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <>
      <PageTitle title="About" />
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={true}
      >
        <section className="container my-5">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="italic-text">Sr. UI/UX Developer</div>
              <h2>JEREMY HOLT</h2>
              <div className="blue-border"></div>
              <p>
                Holt has lent his talents to the publishing industry as well as
                independent design houses and large tech companies where he
                filled a dual role as website admin and web developer. He
                currently holds a degree in multimedia technology and is
                certified in web media, making him a digital force to be
                reckoned with.
              </p>
              <p>
                He has become very knowledgeable and highly skilled over the
                years, in a wide range of languages and standards for coding and
                building web experiences for users. Jeremy is constantly
                learning, growing and finding better / more efficiant ways to
                build the internet.
              </p>
              <a
                href="https://github.com/jholt33"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="social-icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeremy-holt-7742b610"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="social-icons" />
              </a>
            </div>
          </div>
        </section>
      </Animated>
    </>
  );
}
export default About;
