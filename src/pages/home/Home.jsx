import React from "react";
import Profile from "../../assets/portpolioimage.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import TypeIt from "typeit-react";
import "./home.css";

const home = () => {
  let Designations = ["frontend Developer", "React Developer", "Web Developer"];
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Hemant Pawar </span>
            <div>
              <TypeIt
                options={{
                  strings: ["Frontend Developer"],
                  speed: 70,
                  waitUntilVisible: true,
                  deleteSpeed: 90,
                  loop: true,
                  loopDelay: 4000,
                }}
              />
            </div>
          </h1>
          <p className="home__description">
            I'm a Hemant Pawar based web designer & front-end developer focused
            on crafting clean & user-friendly expriences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default home;
