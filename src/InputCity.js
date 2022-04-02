import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
export default function InputCity({ city, setCity, Apicall }) {
  const [show, setShow] = useState(true);
  const apiclick = (event) => {
    event.preventDefault();
    if (city !== "") {
      Apicall();
    }
    else {
      alert("First Enter A Vaild City");
    }
  }
  return (
    <>
      <Modal show={show} dialogClassName="modal-50w" fullscreen="true" size="lg"
      >
        <Modal.Header>
          <Modal.Title>React-Weather-App</Modal.Title>
        </Modal.Header>
        <Form onSubmit={apiclick}><Modal.Body>
          <Form.Group controlId="formBasiccity">
            <Form.Control
              type="text"
              placeholder="Enter Your City"
              onChange={(e) => {
                setCity(e.target.value);
              }
              }
              value={city}
            />
          </Form.Group>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" block>
              Search

            </Button>

          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}