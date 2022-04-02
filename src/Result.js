import React from "react";
import { Modal, Button, Form, ModalBody, Badge } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './Result.css';
export const Result = ({ city, temp, icon, description, setTemp, setCity }) => {
    return (<>
        <Modal.Dialog fullscreen="true" size="lg">
            <Modal.Header>
                <Modal.Title><div className="Title"></div>
                    <Badge bg="dark">
                        React-Weather-App
                    </Badge></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="result">
                    <div className="result__box">
                        <h1><Badge rounded bg="success">
                            Weather Report
                        </Badge></h1>
                        <h3><Badge rounded bg="info">
                            City:-{city}
                        </Badge></h3>
                        <h3><Badge rounded bg="danger">
                            Temp:-{temp}
                        </Badge></h3>
                        <h3><Badge rounded bg="warning">
                            Type:-{description}
                        </Badge>
                        </h3><br />
                        <h5><Badge pill bg="secondary">
                            Live Climate Image
                        </Badge></h5>
                        <img src={icon} alt="logo" /> <br />
                    </div>
                    <br /><Button variant="success" size="md"
                        onClick={
                            () => {
                                setCity('');
                                setTemp('');
                            }
                        }
                    >
                        Back
                    </Button>
                </div>
            </Modal.Body>
        </Modal.Dialog>
    </>
    );
};
export default Result;