import React from "react";
import "./contexts.css";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import { FaLocationDot } from "react-icons/fa6";


const ContExts1 = () => {
  return (
    <div className="content1">
      <div className="content-button-container">
        <button className="content-button">Button 1</button>
        <button className="content-button">Button 2</button>
      </div>

      <div className="content_trips">
        <img src={image2} className="con1-img" />
        <div className="trip-text">
          <h2>Topic Title</h2>

          <div className="sub-hedding-content">
            <h3>Topic Title</h3>
            <h3>
              <FaLocationDot />
              Topic Title
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            purus sit amet nunc ultricies interdum eu ut ipsum.
          </p>
        </div>
      </div>

      <div className="content_trips">
        <img src={image1} className="con1-img" />
        <div className="trip-text">
          <h2>Topic Title</h2>

          <div className="sub-hedding-content">
            <h3>Topic Title</h3>
            <h3>
              <FaLocationDot />
              Topic Title
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            purus sit amet nunc ultricies interdum eu ut ipsum.
          </p>
        </div>
      </div>

      <div className="bottom-section-text">
        <h2>These are the Poppulor destination of Sri Lanka</h2>
      </div>

      {/* <div className="trips-pre">

      <div className="Tripcard">
        <div>
          <div className="t-card">
            <div className="t-img">
              <img src={image1} className="tripImg" />
            </div>
          </div>
        </div>
        <h1>Galle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nunc ultricies interdum eu ut ipsum.</p>
      </div>

      <div className="Tripcard">
        <div>
          <div className="t-card">
            <div className="t-img">
              <img src={image1} alt="image" className="tripImg" />
            </div>
          </div>
        </div>
        <h1>Galle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nunc ultricies interdum eu ut ipsum.</p>
      </div>

      <div className="Tripcard">
        <div>
          <div className="t-card">
            <div className="t-img">
              <img src={image1} alt="image" className="tripImg" />
            </div>
          </div>
        </div>
        <h1>Galle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nunc ultricies interdum eu ut ipsum.</p>
      </div>


      </div> */}

      <div className="tripcard">
        <div className="tripCard">
        <div className="t-card">
            <div className="t-img">
              <img src={image1} className="tripImg" />
              <h3>Galle</h3>
              <p>Galle is a city on the southwest coast of Sri Lanka. 
                It’s known for Galle Fort, the fortified old city 
                founded by Portuguese colonists in the 16th century. 
                Stone sea walls, expanded by the Dutch, encircle car-free 
                streets with architecture reflecting Portuguese, Dutch and
                 British rule. Notable buildings include the 18th-century
                  Dutch Reformed Church. Galle Lighthouse stands on the fort’s 
                  southeast tip.</p>
                  <div className="more-trip"><h3>More Details</h3></div>
                  
            </div>
          </div>

          <div className="t-card">
            <div className="t-img">
              <img src={image1} className="tripImg" />
              <h3>Galle</h3>
              <p>Galle is a city on the southwest coast of Sri Lanka. 
                It’s known for Galle Fort, the fortified old city 
                founded by Portuguese colonists in the 16th century. 
                Stone sea walls, expanded by the Dutch, encircle car-free 
                streets with architecture reflecting Portuguese, Dutch and
                 British rule. Notable buildings include the 18th-century
                  Dutch Reformed Church. Galle Lighthouse stands on the fort’s 
                  southeast tip.</p>

                  <div className="more-trip"><h3>More Details</h3></div>

            </div>
          </div>

          <div className="t-card">
            <div className="t-img">
              <img src={image1} className="tripImg" />
              <h3>Galle</h3>
              <p>Galle is a city on the southwest coast of Sri Lanka. 
                It’s known for Galle Fort, the fortified old city 
                founded by Portuguese colonists in the 16th century. 
                Stone sea walls, expanded by the Dutch, encircle car-free 
                streets with architecture reflecting Portuguese, Dutch and
                 British rule. Notable buildings include the 18th-century
                  Dutch Reformed Church. Galle Lighthouse stands on the fort’s 
                  southeast tip.</p>
                  <div className="more-trip"><h3>More Details</h3></div>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ContExts1;
