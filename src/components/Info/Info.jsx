import React from "react";
import "./Info.css";
export const Info = () => {
  const testimonialsData = [
    {
      image:
        "https://res.cloudinary.com/ddlpde95c/image/upload/v1700756377/Rectangle_25_cwpnea.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus euismod, fringilla tortor non, fermentum augue.",
      name: "Corey Korsgarrd",
    },
    {
      image:
        "https://res.cloudinary.com/ddlpde95c/image/upload/v1700756377/Rectangle_25_cwpnea.png",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin a diam et turpis efficitur dapibus.",
      name: "Jakob Aminoff",
    },
    {
      image:
        "https://res.cloudinary.com/ddlpde95c/image/upload/v1700756377/Rectangle_25_cwpnea.png",
      description:
        "Duis auctor mi vel orci consequat, id fringilla ipsum dictum. Nunc ultricies mauris a velit molestie, vitae vestibulum dolor mollis.",
      name: "Carla Presss",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="text">
          <h3>Get 20% off the student</h3>
          <h1>Student discounts available.</h1>
          <h2>Get ready for some fun in the sun!</h2>
          <ul>
            <li> Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="btn_2">Explore More</button>
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700752847/Mask_group_uqxqzz.png"
            alt="img"
          />
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img
            src="https://res.cloudinary.com/ddlpde95c/image/upload/v1700734419/Group_167_tmrabd.png"
            alt="img"
          />
        </div>
        <div className="text">
          <div className="form">
            <h2>Book now</h2>
            <p>Lorem ipsum dolar sit amet, consectetur adipiscing elit</p>
            <label for="inputField">CITY</label>
            <input
              type="text"
              id="inputField"
              placeholder="Placeholder"
            ></input>
            <div class="form-group">
              <div class="label-container">
                <label for="inputField1">AARIVAL</label>
                <input
                  type="text"
                  id="inputField1"
                  placeholder="10 October"
                ></input>
              </div>
              <div class="label-container">
                <label for="inputField2">DEPARTURE</label>
                <input
                  type="text"
                  id="inputField2"
                  placeholder="11 October"
                ></input>
              </div>
            </div>
            <div className="button-container">
              <div>
                <label for="inputField2">STAR</label>
                <div className="button-container_1">
                  <button class="decreaseButton">-</button>
                  <div class="number-display">
                    <p>4</p>
                  </div>
                  <button class="incrementButton">+</button>
                </div>
              </div>
              <div>
                <label for="inputField2">ROOM</label>
                <div className="button-container_1">
                  <button class="decreaseButton">-</button>
                  <div class="number-display">
                    <p>0</p>
                  </div>
                  <button class="incrementButton">+</button>
                </div>
              </div>
            </div>
            <button className="button_1">BOOK NOW</button>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Testimonial</h1>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="image-container">
              <img
                src={testimonial.image}
                alt={`Testimonial ${index + 1}`}
                className="testimonial-image"
              />
            </div>
            <div className="description">
              <p>{testimonial.name}</p>
              <p>{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
