import React from "react";
import "../component/Cards.css";
import CardItem from "../component/CardIteam";
import Material from "../component/HeroMaterial";
import Nav from '../component/Navbar1'

function Cards() {
  return (
      <>
      <Nav/>
      {/* <Material
        ani="animationContainer"
        label="Materials"
        text="This website is made to help you out while learning new
      languages. There are so many features through which it make it
      easy to learn as it has each and every thing you required while
      stuyding"
      /> */}
    <h1>Programming Languages</h1>
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/python.png"
              text="Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
              label="Python"
              path="/private/Subject/python"
              
              path1="/register"
            />
            <CardItem
              src="images/node.png"
              text="Node is an open source development platform for executing JavaScript code server-side."
              label="Node Js"
              path="/private/Subject/nodejs"
              path1="/register"
            />
            <CardItem
              src="images/AI_logo.png"
              text="AI refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions."
              label="Artificial Intelligence"
              path="/private/Subject/AI"
              path1="/register"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/ml_logo.png"
              text="Machine learning algorithms use historical data as input to predict new output values."
              label="Machine Learning"
              path="/private/Subject/ML"
              path1="/register"
            />
            <CardItem
              src="images/mongoDB_logo.png"
              text="MongoDB is a document-oriented NoSQL database used for high volume data storage."
              label="MongoDB"
              path="/Mongodb"
              path1="/register"
            />
            <CardItem
              src="images/c++.png"
              text="C++ is a statically typed, compiled, general-purpose, case-sensitive, free-form programming language."
              label="C++ "
              path="/private/material"
              path1="/register"
            />
          </ul>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
