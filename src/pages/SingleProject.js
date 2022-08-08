// import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import projects from "../data";
import PageTitle from "../components/PageTitle";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { FaLink, FaAngleLeft, FaAngleRight, FaThLarge } from "react-icons/fa";
import { Animated } from "react-animated-css";

import "./SingleProject.scss";

function SingleProject() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === projectId);
  const { image, name, content, projectURL } = project;
  const currentProjectIndex = projects.findIndex(
    (project) => project.id === projectId
  );
  const projectLength = projects.length;
  const nextProject =
    projects[(currentProjectIndex + projectLength + 1) % projectLength];
  const prevProject =
    projects[(currentProjectIndex + projectLength - 1) % projectLength];

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
                <div className="d-flex align-items-center justify-content-between">
                  <h2>Project Info:</h2>
                  <div className="d-flex align-items-center justify-content-end">
                    <Button
                      onClick={() => navigate(`/projects/${prevProject.id}`)}
                      className="d-flex align-items-center"
                      variant="light"
                      size="sm"
                      aria-label="Go to previous project"
                    >
                      <FaAngleLeft className="nav-icons" />
                    </Button>
                    <LinkContainer to="/projects">
                      <div>
                        <Button
                          onClick={() => navigate(`/projects/`)}
                          variant="light"
                          size="sm"
                          className="d-flex align-items-center"
                          aria-label="Back to projects"
                        >
                          <FaThLarge className="nav-icons" />
                        </Button>
                      </div>
                    </LinkContainer>
                    <Button
                      onClick={() => navigate(`/projects/${nextProject.id}`)}
                      variant="light"
                      size="sm"
                      className="d-flex align-items-center"
                      aria-label="Go to next project"
                    >
                      <FaAngleRight className="nav-icons" />
                    </Button>
                  </div>
                </div>
                <div className="blue-border"></div>
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
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProject;
