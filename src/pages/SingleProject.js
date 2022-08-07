// import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import projects from "../data";
import PageTitle from "../components/PageTitle";
// import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { FaLink, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Animated } from "react-animated-css";

function SingleProject() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === projectId);
  const { image, name, content, projectURL } = project;
  const currentProjectIndex = projects.findIndex(
    (project) => project.id === projectId
  );
  const nextProject = projects[currentProjectIndex + 1];
  const prevProject = projects[currentProjectIndex - 1];

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
                </div>
                {/* <LinkContainer to="/projects">
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
                </LinkContainer> */}

                <div className="d-flex justify-content-between">
                  <Button
                    onClick={() => navigate(`/projects/${prevProject.id}`)}
                    variant="primary"
                    size="lg"
                    className="d-flex align-items-center"
                  >
                    <FaAngleLeft className="nav-icons" />
                  </Button>
                  <Button
                    onClick={() => navigate(`/projects/${nextProject.id}`)}
                    variant="primary"
                    size="lg"
                    className="d-flex align-items-center"
                  >
                    <FaAngleRight className="nav-icons" />
                  </Button>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProject;
