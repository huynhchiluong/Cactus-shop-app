import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./Carausel.module.scss";

function Carausel(props) {
  const carauselList = [
    {
      id: 2,
      title: "First slide",
      img: "https://www.gardenista.com/wp-content/uploads/2017/10/cs-valentin-bellport-jonathan-hokklo-alexa-hotz-20.jpg",
      describe: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 3,
      title: "First slide",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-cactus-1563917630.jpg",
      describe: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 4,
      title: "First slide",
      img: "https://expertreviews.b-cdn.net/sites/expertreviews/files/2019/03/best_house_plants_primary.jpg",
      describe: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <Carousel className={style.carousel}>
      {carauselList.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className={style.img} src={item.img} alt={item.title} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.describe}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Carausel;
