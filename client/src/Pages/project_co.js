import React, { Component } from "react";
import axios from "axios";
import "./Project_co.css"
import Nav from "../component/Navbar1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      department:"",
      developer: "",
      email: "",
      year: "",
      technology: "",
      abstract:"",
      posts: [],
    };
    this.changetitle = this.changetitle.bind(this);
    this.changedepartment = this.changedepartment.bind(this);
    this.changedeveloper = this.changedeveloper.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeyear = this.changeyear.bind(this);
    this.changetechnology = this.changetechnology.bind(this);
    this.changeAbstract = this.changeAbstract.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  changetitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  changedepartment(event) {
    this.setState({
      department: event.target.value,
    });
  }
  changedeveloper(event) {
    this.setState({
      developer: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changeyear(event) {
    this.setState({
      year: event.target.value,
    });
  }
  changetechnology(event) {
    this.setState({
      technology: event.target.value,
    });
  }
  changeAbstract(event) {
    this.setState({
      abstract: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const registered = {
      title: this.state.title,
      department:this.state.department,
      developer: this.state.developer,
      email: this.state.email,
      year: this.state.year,
      technology: this.state.technology,
      abstract: this.state.abstract
    };
    axios
      .post("http://localhost:5000/app/project_co", registered)
      .then((response) => console.log(response.data));

    this.setState({
      title: "",
      department:"",
      developer: "",
      email: "",
      year: "",
      technology: "",
      abstract:"",
      posts: [],
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Nav/>
        <center><h1>Add Project</h1></center>
        <div className="container background">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                className="spacing"
                type="text"
                placeholder="Title"
                onChange={this.changetitle}
                value={this.state.title}
              />
              <br />

              <input
                className="spacing"
                type="text"
                placeholder="Department"
                onChange={this.changedepartment}
                value={this.state.department}
              />
              <br />

              <input
                className="spacing"
                type="text"
                placeholder="Developers"
                onChange={this.changedeveloper}
                value={this.state.developer}
              />
              <br />

              <input
                type="text"
                className="spacing"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
              />
              <br />

              <input
                type="text"
                className="spacing"
                placeholder="Year"
                onChange={this.changeyear}
                value={this.state.year}
              />
              <br />

              <input
                type="technology"
                className="spacing"
                placeholder="Technology"
                onChange={this.changetechnology}
                value={this.state.technology}
              />
              <br />
              
              <textarea
              type="text"
              className="spacing"
                placeholder="Abstract "
                name=""
                id=""
                cols="30"
                rows="5"
                onChange={this.changeAbstract}
                value={this.state.abstract}
              ></textarea>
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
