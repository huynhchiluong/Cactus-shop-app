import { Modal, Form, Row, Col } from "react-bootstrap";
import Button from "components/Button";
import { useRef, useState } from "react";

import style from "./Register.module.scss";

function Register({ isShow, handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const ref = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefaut();
    const account = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    };
    console.log(account);
  };

  const handleSetShow = () => {
    handleClose(isShow);
  };
  return (
    <>
      <Modal
        ref={ref}
        show={isShow}
        onHide={handleSetShow}
        animation="true"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className={style.title}>Register</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            <Row>
              <Col className="lg-6 mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    className={style.inputText}
                    placeholder="Enter your first name"
                  />
                </Form.Group>
              </Col>
              <Col className="lg-6 mb-3">
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    className={style.inputText}
                    placeholder="Enter your last name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="lg-12 mb-3">
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    type="text"
                    className={style.inputText}
                    placeholder="Enter your username"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="lg-12 mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className={style.inputText}
                    placeholder="example@email.com"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="lg-6 mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className={style.inputText}
                    placeholder="Enter your first name"
                  />
                </Form.Group>
              </Col>
              <Col className="lg-6 mb-3">
                <Form.Group as={Col} controlId="formGridConfirmPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                    className={style.inputText}
                    placeholder="Enter your last name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <span className="d-flex justify-content-center">
                Already a member? &nbsp; <button>Login here</button>
              </span>
            </Row>
            <div className="mt-3 mb-3 d-flex justify-content-center">
              <Button primary type="submit" onClick={handleSubmitForm}>
                Create Acount
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
