import React from "react";
import "../App.css";
import Sub from "../component/SubjBlock";
import Nav from "../component/Navbar1";
import CardItem from "../component/CardIteam";
import '../component/Subject.css'

const Subject = ({match}) => {
  
  return (
    <>
      <Nav />
      
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Sub
                src="../../images/Books.jpg"
                text="Explore the notes of this subject "
                label={match.params.id.toUpperCase() + " Notes"}
                path={"/private/Subject/List/" + match.params.id.toUpperCase() }
              />
              <Sub
                src="../../images/practicals.jpg"
                text="Practicals"
                label={match.params.id.toUpperCase() + " Practicals"}
                path={"/private/Subject/Practical/" + match.params.id.toUpperCase() }                
              />
              <Sub
                src="../../images/Syllabus.jpg"
                text="Is is Syllabus Of this year Explore it Out regarding this subject."
                label={match.params.id.toUpperCase() + " Syllabus"}
                path={"/private/Subject/Syllabus/" + match.params.id.toUpperCase() }
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;
