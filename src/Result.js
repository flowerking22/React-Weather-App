import React from "react";
import { Modal, Button, Form, ModalBody } from "react-bootstrap";
import './Result.css';
export const Result = ({ city, temp, icon, description, setTemp, setCity }) => {
    return (<>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>React-Weather-App</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="result">
                    <div className="result__box">
                        <h1>Weather Report</h1>
                        <h3>City:-{city}</h3>
                        <h3>Temp:-{temp}</h3>
                        <p>{description}</p>
                        <img src={icon} alt="logo" /> <br />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer centered>
                <Button variant="success" size="md"
                    onClick={
                        () => {
                            setCity('');
                            setTemp('');
                        }
                    }
                >
                    Back
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    </>
    );
};
export default Result;