import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";
import projects from "../data";
import PageTitle from "../components/PageTitle";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { FaLink, FaAngleLeft } from "react-icons/fa";
import { Animated } from "react-animated-css";

const SingleProject = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  const { image, name, content, projectURL } = project;
  const [count, setCount] = useState(0);

  useEffect(() => setCount((currentCount) => currentCount + 1), []);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  // const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <>
      <PageTitle title={name} />
      <section className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-8">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={1000}
              isVisible={true}
            >
              <img className="img-fluid vw-100" src={image} alt={name} />
            </Animated>
          </div>
          <div className="col-12 col-lg-4">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={1000}
              isVisible={true}
            >
              <div className="mt-3 mt-lg-0">
                <h2>Project Info:</h2>
                <p>{content}</p>
                <hr></hr>
                <div className="d-flex justify-content-between mb-5">
                  <span className="d-flex align-items-center">
                    <FaLink />
                    <span className="text-bold ps-2">URL:</span>
                  </span>
                  <a href={projectURL} rel="noreferrer" target="_blank">
                    {projectURL}
                  </a>
                  {count}
                </div>
                <LinkContainer to="/projects">
                  <div className="text-left">
                    <Button
                      variant="primary"
                      className="d-flex align-items-center"
                      size="lg"
                    >
                      <FaAngleLeft className="me-2" />
                      Back to Projects
                    </Button>
                  </div>
                </LinkContainer>
                <Button onClick={handleIncrement} variant="primary" size="lg">
                  Next
                </Button>
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProject;
