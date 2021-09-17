import React from "react";
import "./Feature.css";
import { Card } from "react-bootstrap";

function Features() {
  return (
    <div className="cards">
      <h1>Features Of Project</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <Card className="text_center" style={{ width: "18rem" ,height:"67vh" }}>
              <Card.Img variant="top" src="images/Projects.jpg" />
              <hr/>
              <Card.Body>
                <Card.Title>Prjoects</Card.Title>
                <card-text>
                  Here you find all the project develped by the student in there college life.
                  So you can take inspiration from what kind of project are made in the 
                </card-text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-lg-4 col-md-6">
            <Card className="text_center" style={{ width: "18rem" ,height:"67vh"}}>
              <Card.Img variant="top" src="images/material.jpg" />
              <hr/>
              <Card.Body>
                <Card.Title>Materials</Card.Title>
                <card-text>
                  In this section you find all subjects notes with that you find some activices like it's syllabus, practical, Small project,Challanges Etc to bulid you skills. 
                </card-text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-lg-4 col-md-6">
            <Card className="text_center" style={{ width: "18rem" ,height:"67vh" }}>
              <Card.Img variant="top" src="images/achivement.jpg" />
              <hr/>
              <Card.Body>
                <Card.Title className="text_center">Achievements</Card.Title>
                
                <card-text>
                  In this section student achievement are showcase so they get motivated for there work and by seeing this achivements other students also get motivated.
                </card-text>
              </Card.Body>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Features;
