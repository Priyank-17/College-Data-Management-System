import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Header from './Header';
import Select from 'react-select';
import { API_URL } from '../utils/constants';
import "./Upload.css"
import Nav from "../component/Navbar1";


const Upload = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    name: '',
    department: '',
    year:'',
    sem:'',
    achivement:''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { name, department, year,achivement} = state;
      if (name.trim() !== '' && department.trim() !== '' && year.trim() !== '' && achivement.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('name', name);
          formData.append('department', department);
          formData.append('year', year);
          
          formData.append('achivement',achivement);
  
          setErrorMsg('');
          await axios.post(`${API_URL}/Achive`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
            
          });
          this.setState({
            name: '',
          department: '',
          year:'',
          
          achivement:''
          })
        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
    
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
  
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG|ppt)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };


  return (
    <React.Fragment>
      <Nav/>
      <center><h1>Add Achievements</h1></center>
      <div className="background">

      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>  
          <Col>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                name="name"
                value={state.name}
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="department">
              <Form.Control
                type="text"
                name="department"
                value={state.department}
                placeholder="Enter Department"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="year">
              <Form.Control
                type="text"
                name="year"
                value={state.year}
                placeholder="Enter Year"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="achivement">
              <Form.Control
                as="textarea" rows={3}
                type="text"
                name="achivement"
                value={state.achivement}
                placeholder="Enter Achivement"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="upload-section">
          <Dropzone onDrop={onDrop} className="abc">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: 'drop-zone abc' })} ref={dropRef}>
                <input {...getInputProps()} />
                <p>Drag and drop a file OR click here to select a file</p>
                {file && (
                  <div>
                    <strong>Selected file:</strong> {file.name}
                  </div>
                )}
              </div>
            )}
          </Dropzone>
          {previewSrc ? (
            isPreviewAvailable ? (
              <div className="image-preview">
                <img className="preview-image" src={previewSrc} alt="Preview" />
              </div>
            ) : (
              <div className="preview-message">
                <p>No preview available for this file</p>
              </div>
            )
          ) : (
            <div className="preview-message">
              <p>Image preview will be shown here after selection</p>
            </div>
          )}
        </div>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </React.Fragment>
  );
};

export default Upload;