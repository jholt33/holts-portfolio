import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import config from "../configData.json";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.serviceId,
        config.templateId,
        form.current,
        config.publicKey
      )
      .then(
        (result) => {
          <div>Message Sent!</div>;
        },
        (error) => {
          <div>The message cannot be sent.</div>;
        }
      );
  };

  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="user_message" />
        <Button type="submit" value="Send" variant="primary">
          Submit
        </Button>
        {/* <input type="submit" value="Send" /> */}
      </Form>
    </>
  );
};

export default Contact;
