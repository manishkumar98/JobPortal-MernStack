import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
     
<div className="App">

<Container class="job-reg-form">
  <h3>Job Registration Form</h3>
  <Row>
    <Col>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">First Name *</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Last Name *</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col xs={6}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Email address *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Col>
    <Col xs={6}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Phone *</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label class="label-txt">Date of Birth *</Form.Label>
       
      </Form.Group>

       <DatePicker
        popperPlacement='top'
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    </Col>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label class="label-txt">What position are you applying for? *</Form.Label>
        <Form.Control as="select">
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Junior Software Developer</option>
          <option>Intern Software Developer</option>
          <option>Technical Lead/Engineering Lead/Team Lead</option>
        </Form.Control>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label class="label-txt">What is your current employment status? *</Form.Label>

      </Form.Group>
      </Col>
      <Col xs={6}>
      {['radio'].map((type) => (
        <div key={`custom-inline-${type}`} className="mb-3">
          <Form.Check
            custom
            inline
            label="Employeed"
            name="formHorizontalRadios"
            type={type}
            id={`custom-inline-${type}-1`}
          />
          <Form.Check
            custom
            inline
            label="Self-Employeed"
            name="formHorizontalRadios"
            type={type}
            id={`custom-inline-${type}-2`}
          />
          <Form.Check
            custom
            inline
            name="formHorizontalRadios"
            label="UnEmployeed"
            type={type}
            id={`custom-inline-${type}-3`}
          />
          <Form.Check
            custom
            inline
            name="formHorizontalRadios"
            label="Student"
            type={type}
            id={`custom-inline-${type}-4`}
          />
        </div>
      ))}
      </Col>
  </Row>
  <Row>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label class="label-txt">How do you submit your resume? *</Form.Label>
      </Form.Group>
    </Col>
    <Col xs={6}>
    {['radio'].map((type) => (
          <div key={`custom-inline-${type}`} className="mb-3">
            <Form.Check
              custom
              inline
              label="Upload File"
              type={type}
              name="formHorizontalRadios1"
              id={`custom-inline-${type}-11`}
            />
            <Form.Check
              custom
              inline
              label="Provode Url"
              type={type}
              name="formHorizontalRadios1"
              id={`custom-inline-${type}-12`}
            />
          </div>
        ))}
    </Col>
  </Row>
  <Row>
    <Col xs={6}>
      <Form.Group>
        <Form.File
          className="position-relative"
          required
          name="file"

          id="validationFormik107"
          feedbackTooltip
        />
      </Form.Group>
    </Col>
    <Col xs={6}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Resume URL</Form.Label>
        <Form.Control type="text" placeholder="Enter resume url" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">List your job history here please include your three most recent positions *</Form.Label>
      </Form.Group>
    </Col>
  </Row>

  <Row>
    <Col xs={4}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Employer</Form.Label>
        <Form.Control type="text" placeholder="Enter Employer" />
      </Form.Group>
    </Col>
    <Col xs={4}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Current Employer</Form.Label>
         </Form.Group>
         {['checkbox'].map((type) => (
          <div key={`custom-${type}`} className="mb-3">
            <Form.Check
              custom
              type={type}
              id={`custom-${type}`}
              label=""

            />

          </div>
        ))}
    </Col>
  <Col xs={4}>
  <Form.Group controlId="formBasicEmail">
  <Form.Label class="label-txt">Start Date</Form.Label>
  </Form.Group>
  <DatePicker
        popperPlacement='top'
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
  </Col>
  </Row>

  <Row>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label class="label-txt">Country</Form.Label>
        <Form.Control as="select" custom>
        <option>India</option>
          <option>Canada</option>
          <option>US</option>
        </Form.Control>
      </Form.Group>
    </Col>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label class="label-txt">City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" />
      </Form.Group>
    </Col>
  </Row>

  <Row>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label class="label-txt">Industry</Form.Label>
        <Form.Control type="text" placeholder="Enter industry" />
      </Form.Group>
    </Col>
    <Col xs={6}>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label class="label-txt">Functional Area</Form.Label>
        <Form.Control as="select" custom>
          <option>software engineering intern</option>
          <option>Software Development Engineer</option>
          <option>Software Engineering -Stride Trading Developer</option>
         
        </Form.Control>  </Form.Group>
    </Col>
  </Row>

  <Row>

    <Col xs={6}>
      <label class="label-txt">Current Level</label>

      {['radio'].map((type) => (
        <div key={`custom-inline-${type}`} className="mb-3">
          <Form.Check
            custom
            inline
            name="level3"
            label="Beginner"
            type={type}
            id={`custom-inline-${type}-14`}
          />
          <Form.Check
            custom
            inline
            name="level3"
            label="Pro"
            type={type}
            id={`custom-inline-${type}-24`}
          />
          <Form.Check
            custom
            inline
            name="level3"
            label="Expert"
            type={type}
            id={`custom-inline-${type}-34`}
          />

        </div>
      ))}
    </Col>
  </Row>
  <Row>
    <Col xs={6}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Job Title *</Form.Label>
        <Form.Control type="text" placeholder="Enter job title" />
      </Form.Group>
    </Col>
    <Col xs={6}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="label-txt">Description *</Form.Label>
        <Form.Control type="textarea" placeholder="Enter description" />
      </Form.Group>
    </Col>
  </Row>
  <div>
  <Button variant="primary">Submit</Button>{' '}
  <Button variant="danger">Cancel</Button> {' '}

  </div>
</Container>
</div>
    );
  }
}

// function App() {

//   return (

    

//   );
// }

export default App;
