import React, { useState } from "react";
import "./myplan.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/Carousel_images/1.jpg";
import image2 from "../../assets/Carousel_images/2.jpg";
import image3 from "../../assets/Carousel_images/3.jpg";
import image4 from "../../assets/Carousel_images/4.jpg";
import image5 from "../../assets/Carousel_images/5.jpg";


import ContExts1 from "./Content/ContExts1";
import Header from "../../Header/Header";

const Myplan = () => {
  const [selectedContent, setSelectedContent] = useState("content1"); // Initial content

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    // Button Section
    
    <div>
      <Header/>
      <div className="headernew">
        <div className="button-container2">
          <button
            className="header-button"
            onClick={() => handleButtonClick("content1")}
          >
            Plan Your Trip
          </button>
          <button
            className="header-button"
            onClick={() => handleButtonClick("content2")}
          >
            Select Your Guide
          </button>
          <button
            className="header-button"
            onClick={() => handleButtonClick("content3")}
          >
            Top Atractives
          </button>
          <button
            className="header-button"
            onClick={() => handleButtonClick("content4")}
          >
            Activities
          </button>
        </div>
      </div>

      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
        >
          <div>
            <img
              src={image1}
              alt="Image 1"
              style={{ maxWidth: "90%", maxHeight: "600px" }}
            />
            <p className="legend">Caption for Image 1</p>
          </div>
          <div>
            <img
              src={image2}
              alt="Image 2"
              style={{ maxWidth: "90%", maxHeight: "600px" }}
            />
            <p className="legend">Caption for Image 2</p>
          </div>
          <div>
            <img
              src={image3}
              alt="Image 3"
              style={{ maxWidth: "90%", maxHeight: "600px" }}
            />
            <p className="legend">Caption for Image 3</p>
          </div>
          <div>
            <img
              src={image4}
              alt="Image 4"
              style={{ maxWidth: "90%", maxHeight: "600px" }}
            />
            <p className="legend">Caption for Image 1</p>
          </div>
          <div>
            <img
              src={image5}
              alt="Image 5"
              style={{ maxWidth: "90%", maxHeight: "600px" }}
            />
            <p className="legend">Caption for Image 1</p>
          </div>
        </Carousel>
      </div>

      <div className="content">
        {selectedContent === "content1" && <Content1 />}
        {selectedContent === "content2" && <Content2 />}
        {selectedContent === "content3" && <Content3 />}
        {selectedContent === "content4" && <Content4 />}
      </div>
    </div>
  );
};

const Content1 = () => (
  <div>
    <ContExts1 />
  </div>
);
const Content2 = () => (
  <div>
    <h1>Hello</h1>
  </div>
);
const Content3 = () => <div>Content 3</div>;
const Content4 = () => <div>Content 4</div>;

export default Myplan;
