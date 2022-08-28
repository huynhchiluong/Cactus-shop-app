import React, { useEffect, useState } from "react";
import Carousel from "components/Carausel";
import style from "./Home.module.scss";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import userApi from "api/userApi";

function Home() {
  const [user, setUser] = useState({});
  useEffect(() => {
    // const s = async () => {
    //   const rawResponse = await fetch("http://localhost:3000/api/users/login", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: "test@gmail.com", password: "test" }),
    //   });
    //   const content = await rawResponse.json();

    //   console.log(content);
    // };
    // s();

    const fetchData = async () => {
      try {
        // const payload = {
        //   email: "test@gmail.com",
        //   password: "test",
        // };
        const response = await userApi.getAll();
        console.log(response);
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={style.wrapper}>
      <Carousel />

      <div className="contaniner ">
        <Row className="container-info">
          <Col className={`lg-4 ${style.col}`}>
            <FontAwesomeIcon icon={faLeaf} />
            <h1>Quality Products</h1>
            <span>Offer you the biggest choice of plants</span>
            <p>
              Join us for one of our open days and find a plant and quality
              product that suit for your garden.
            </p>
          </Col>
          <Col className="lg-4 xs-6">
            <FontAwesomeIcon icon={faLeaf} />
            <h1>Quality Products</h1>
            <span>Offer you the biggest choice of plants</span>
            <p>
              Join us for one of our open days and find a plant and quality
              product that suit for your garden.
            </p>
          </Col>
          <Col className="lg-4 xs-6">
            <FontAwesomeIcon icon={faLeaf} />
            <h1>Quality Products</h1>
            <span>Offer you the biggest choice of plants</span>
            <p>
              Join us for one of our open days and find a plant and quality
              product that suit for your garden.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
