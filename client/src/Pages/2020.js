import React, { Component, useState } from "react";
import "../App.css";
import Project_hero from "../component/Project_hero";
import Nav from "../component/Navbar1";
import DropDown from "../component/DropDown";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./Project.css";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getData();
  };
  getData = () => {
    axios
      .get("http://localhost:5000/app/api3")
      .then((response) => {
        const data = response.data.filter((x) => x.year === "2020");
        console.log(data);
        this.setState({ posts: data });
      })
      .catch(() => {
        console.log("not recived");
      });
  };

  displayBlogPost = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <div key={index} className="col-lg-6 blog center">
        <div className="fetch_data ">
          <div>
            <center>
              <img
                src={post.file_path.slice(14)}
                className="img_blog center"
                width="150px"
                alt=""
              />
            </center>
          </div>
          <div>
            <table className="table_data">
              <tr>
                <td>
                  <h2>Name</h2>
                </td>
                <td>
                  <h2>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </h2>
                </td>
                <td>
                  <h2>{post.name}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Department</p>
                </td>
                <td>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </p>
                </td>
                <td>
                  <p>{post.department}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Year</p>
                </td>
                <td>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </p>
                </td>
                <td>
                  <p>{post.year}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Achivement</p>
                </td>
                <td>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </p>
                </td>
                <td>
                  <p>{post.achivement}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Nav />
        <hr />
        <h1 className="float_top">Achievements</h1>
        <hr className="width_hr" />
        <div className="button_center">

        
        <Link to="/Achivements" className="button">
          <Button variant="outline-info">All</Button>
        </Link>
        <Link to="/Achivements_18" className="button">
          <Button variant="outline-info">2018</Button>
        </Link>
        <Link to="/Achivements_19" className="button">
          <Button variant="outline-info">2019</Button>
        </Link>
        <Link to="/Achivements_20" className="button">
          <Button variant="info">2020</Button>
        </Link>
        </div>
        <hr className="width_hr" />
        <div className="blog_area pro_body">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;
