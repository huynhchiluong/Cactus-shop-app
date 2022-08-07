import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Home.module.scss";

function Home() {
  return (
    <div className={style.wrapper}>
      <Carousel className={style.carousel}>
        <Carousel.Item>
          <img
            className="d-block h-100"
            src="https://picsum.photos/200/300"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-100"
            src="https://picsum.photos/200/300"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-100"
            src="https://picsum.photos/200/300"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
