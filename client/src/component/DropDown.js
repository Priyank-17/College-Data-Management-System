import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Header from './Header';
import Select from 'react-select';

function DropDown()
{
const subject = [
    {value:1,label:"DSML"},
    {value:2,label:"IOT"},
    {value:3,label:"PYTHON"},
    {value:4,label:"AI"},
    {value:5,label:"TOC"},
    {value:6,label:"UI/UX"}
  ];



  const [result,subjectValue] = useState(subject.label);
  const subjectHandler= e=>{
    subjectValue(e.label);
  }
  
  return(
      <div>
          <Select options={subject} onChange={subjectHandler}/>
          <h1>{result}</h1>
        
      </div>
  )
}
export default DropDown;