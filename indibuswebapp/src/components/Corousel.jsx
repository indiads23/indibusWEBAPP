'use client'
import imageData from "./CorouselImage";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../app/page.module.css"

const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} className={styles.imageCarousel} />
      <p className="legend">{image.label}</p>
    </div>
  ));
  const Corousel = () => {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }
    return (
      <div className={styles.App}>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className={styles.carouselContainer}
        >
          {renderSlides}
        </Carousel>
      </div>
    );
}

export default Corousel