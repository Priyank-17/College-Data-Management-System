import React, { Component ,useState} from "react";
import "../App.css";
import Project_hero from "../component/Project_hero";
import Nav from '../component/Navbar'
import DropDown from '../component/DropDown'
import axios from "axios";
import "./Project.css"
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getData();
  };
  getData = () => {
    axios
      .get("http://localhost:5000/app/api")
      .then((response) => {
        const data = response.data.filter((x) => x.technology === "MERN");
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
      <div key={index} className="fetch_data">
        <div className="blog">
          <img src="images/Project.jpg" className="img_blog" width="100px"alt=""/>
        </div>
        <div className="blog ">
        <table className="table_data">
          <tr>
            <td><h2>Title</h2></td>
            <td><h2>:</h2></td>
            <td><h2>{post.title}</h2></td>
          </tr>
          <tr>
            <td><p>Department</p></td>
            <td><p>:</p></td>
            <td><p>{post.department}</p></td>
          </tr>
          <tr>
            <td><p>Developers</p></td>
            <td><p>:</p></td>
            <td><p>{post.developer}</p></td>
          </tr>
          <tr>
            <td><p>Email</p></td>
            <td><p>:</p></td>
            <td><p>{post.email}</p></td>
          </tr>
          <tr>
            <td><p>Year</p></td>
            <td><p>:</p></td>
            <td><p>{post.year}</p></td>
          </tr>
          <tr>
            <td><p>Technology</p></td>
            <td><p>:</p></td>
            <td><p>{post.technology}</p></td>
          </tr>
          <tr>
            <td><p>Abstract</p></td>
            <td><p>:</p></td>
            <td><p>{post.abstract}</p></td>
          </tr>
        </table>
        </div>
      </div>
    ));
  };
 
  render() {
    console.log(this.state);
    return (
      <div>
        <Nav/>
        <hr/>
        <Project_hero
          label="Projects"
          text="Here you find all the project that are developed by students of Ganpat University.
            Reason for placing all the projeect is to help the student to think broad and to 
            understand that this kind of project are allready developed with its details like who developed it
            current status of developer."
        />
        <div className="blog_area pro_body">
        <h1>Projects</h1>
        <hr className="width_hr" />
        <div className="button_center">
        
        <Link to="/Projects" className="button">
          <Button variant="outline-info">All</Button>
        </Link>
        <Link to="/Project_Android" className="button">
          <Button variant="outline-info">Android</Button>
        </Link>
        <Link to="/Project_php" className="button">
          <Button variant="outline-info">Php</Button>
        </Link>
        <Link to="/Project_mern" className="button">
          <Button variant="info">MERN</Button>
        </Link>
        <Link to="/Project_ml" className="button">
          <Button variant="outline-info">ML</Button>
        </Link>
        </div>
        <hr className="width_hr" />
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;
