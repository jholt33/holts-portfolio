import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import PageTitle from "../components/PageTitle";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Animated } from "react-animated-css";

import config from "../configData.json";

import "./Contact.scss";

export const Contact = () => {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.serviceId,
        config.templateId,
        "#contact-form",
        config.publicKey
      )
      .then(
        () => {
          alert("Your message has been sent.");
          setValidated(false);
          e.target.reset();
        },
        (error) => {
          alert("There was a problem sending your message.", error);
        }
      );
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // alert("Message was sent!");
      sendEmail(event);
    }
    setValidated(true);
  };

  return (
    <>
      <PageTitle title="Contact" />
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={true}
      >
        <div className="container my-5">
          <h2 className="mb-4">Leave a Message</h2>
          <Form
            noValidate
            ref={form}
            onSubmit={handleSubmit}
            validated={validated}
            id="contact-form"
          >
            <Row>
              <Form.Group as={Col} md="12" controlId="nameValidation">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    size="lg"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="emailValidation">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="user_email"
                    size="lg"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="messageValidation">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Message"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Message"
                    name="user_message"
                    size="lg"
                    required
                    as="textarea"
                    rows={3}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a message.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Button
              type="submit"
              value="Send"
              variant="primary"
              size="lg"
              className="mt-3 w-100"
            >
              SEND
            </Button>
          </Form>
        </div>
      </Animated>
    </>
  );
};

export default Contact;
