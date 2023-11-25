import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-side">
          <p>Discover the beauty of the tropics</p>
          <h1>Tropical Destinations</h1>
          <h2>For Student</h2>
          <h3 className="text_info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius
            voluptatum, provident facilis duisquam commodi id.
          </h3>
          <button>SIGN UP</button>
        </div>
        <div className="image-side">
          <img
            src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700729742/Group_171_hjmeu2.png"
            alt="img"
          />
        </div>
      </div>
      <div className="two-side-text-container">
        <div className="left-text">
          <div className="profile-container">
            <div className="profile-left">
              <img
                src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700734419/Group_167_tmrabd.png"
                alt="Profile"
                className="profile-picture"
              />
            </div>
            <div className="profile-right">
              <h2>Jenny Wilson</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-left">
              <img
                src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700734419/Group_167_tmrabd.png"
                alt="Profile"
                className="profile-picture"
              />
            </div>
            <div className="profile-right">
              <h2>Jenny Wilson</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-left">
              <img
                src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700734419/Group_167_tmrabd.png"
                alt="Profile"
                className="profile-picture"
              />
            </div>
            <div className="profile-right">
              <h2>Jenny Wilson</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
        </div>
        <div className="right-text">
          <h2>Tropical Adventure</h2>
          <h3 className="right_text">for Students.</h3>
          <p>Student Tropical Vacation: Relax and Recharge</p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellemtesque elit</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="btn_1">Explore More</button>
        </div>
      </div>
      <div className="city-container">
        <h2>Our Destinations</h2>
        <div className="city-cards">
          <div className="city-card">
            <img
              className="city-image"
              src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700898096/card-image_bsmygx.png"
              alt="City 1"
            />
            <div className="city-name">Harvard University</div>
            <div className="city-description">Cambridge, UK</div>
          </div>
          <div className="city-card">
            <img
              className="city-image"
              src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700898104/card-image-1_x9rxet.png"
              alt="City 2"
            />
            <div className="city-name">Oxford University</div>
            <div className="city-description">Oxford, England</div>
          </div>
          <div className="city-card">
            <img
              className="city-image"
              src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700898117/card-image-2_hpgjii.png"
              alt="City 3"
            />
            <div className="city-name">Stanford University</div>
            <div className="city-description">Stanford California</div>
          </div>
          <div className="city-card">
            <img
              class="city-image_1"
              src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700898116/card-image-3_dgahod.png"
              alt="City 4"
            />
            <div className="city-name">Nanyang Technology</div>
            <div className="city-description">Nanyang Ave</div>
          </div>
        </div>
        <div className="arrow-container">
          <div className="arrow" id="leftArrow">
            &#8249;
          </div>
          <div className="number_display">2/140</div>
          <div clclassName="arrow" id="rightArrow">
            &#8250;
          </div>
        </div>
      </div>
    </>
  );
};
