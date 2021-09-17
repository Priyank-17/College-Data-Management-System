import React, { Component, useState } from "react";
import Nav from "../component/Navbar1";
import "../component/Cards.css";
import CardItem from "../component/AdminIteam1";

import "./Admin.css";

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div >
        <Nav />

        <hr />
        <div className="blog_area pro_body">
          <h1>Admin Panel</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                className="bg"
                  src="images/Project.jpg"
                  text="Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
                  label="Upload Project"
                  path="/admin/ProjectCordinator"
                  path1="/register"
                />
                <CardItem
                  src="images/up_material.jpg"
                  text="Node is an open source development platform for executing JavaScript code server-side."
                  label="Upload Material"
                  path="/admin/UploadMaterial"
                  path1="/register"
                />
                <CardItem
                  src="images/achivement.jpg"
                  text="AI refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions."
                  label="Upload Achivemants"
                  path="/admin/UploadAchivements"
                  path1="/register"
                />
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
