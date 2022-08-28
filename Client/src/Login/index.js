import { Modal, Form, Row, Col } from "react-bootstrap";
import Button from "components/Button";
import { useState } from "react";

import style from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login({ isShow, handleClose }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefaut();
    const account = {
      userName: userName,
      password: password,
    };
    console.log(account);
  };

  const handleSetShow = () => {
    handleClose(isShow);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <>
      <Modal show={isShow} onHide={handleSetShow} animation="true" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className={style.title}>Log in</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
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
              <Col className="lg-6 mb-3 position-relative">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={isShowPassword ? "text" : "password"}
                    className={style.inputText}
                    placeholder="Enter your first name"
                  />
                  <span className={style.eyes} onClick={handleShowPassword}>
                    <FontAwesomeIcon
                      icon={isShowPassword ? faEye : faEyeSlash}
                    />
                  </span>
                </Form.Group>{" "}
              </Col>
            </Row>
            <Row className="mb-3">
              <span className="d-flex justify-content-center">
                Do not have account ? &nbsp;{" "}
                <button>Register here</button>
              </span>
            </Row>
            <div className="mt-3 mb-3 d-flex justify-content-center">
              <Button primary type="submit" onClick={handleSubmitForm}>
                Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
