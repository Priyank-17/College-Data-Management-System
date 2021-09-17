import React, { useEffect, createRef } from "react";
import "../App.css";
import "./HeroSection.css";
import lottie from "lottie-web";
import animation from "../Animation/Home_ani.json";
import animation1 from "../Animation/Project_ani.json";

function HeroSection(props) {
  let animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy(); 
  }, []);
  

  return (
    <div className="hero-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div className="title_text">
              <h1 className="head_title">{props.label}</h1>
              <hr className="hr_white"/>
              <p>
                {props.text}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div ref={animationContainer} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
