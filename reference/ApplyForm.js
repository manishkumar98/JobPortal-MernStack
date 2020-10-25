import React from "react";

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

class ApplyForm extends React.Component {

	//state dropdown logic start
	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.state = {
		  dropdownOpen: false,
		  locationState: "Select",
		  submitted: false
		};
	  }
	
	toggle(event) {
	this.setState(prevState => ({
		dropdownOpen: !prevState.dropdownOpen
	}));
	}

	select = async (event) => {
		this.setState({
			locationState: event.target.innerText
		});
	}
	//state dropdown logic end

	//submit form click handler start
	submitClickHandler = async (event) => {
		event.preventDefault();
		//get values from form
		const uploadResume = event.target.elements.uploadResume.value;
		const firstName = event.target.elements.firstName.value; 
		const lastName = event.target.elements.lastName.value;
		const middleName = event.target.elements.middleName.value;
		const email = event.target.elements.email.value;
		const addressLine1 = event.target.elements.addressLine1.value;
		const addressLine2 = event.target.elements.addressLine2.value;
		const city = event.target.elements.city.value;
		const zipCode = event.target.elements.zipCode.value;
		const phone = event.target.elements.phone.value;
		//write values to state, everything except state dropdown
		try {
		  console.log('Submit clicked!'); //TODO: remove
		  this.setState({
			uploadResume: uploadResume,
			firstName: firstName,
			lastName: lastName,
			middleName: middleName,
			email: email,
			addressLine1: addressLine1,
			addressLine2: addressLine2,
			city: city,
			zipCode: zipCode,
			phone: phone,
			submitted: true
		  });
		  console.log(this.state);
		} catch(err) {
		  this.setState({
			error: err
		  });
		}
	}
	//submit form click handler ends


	render() {
		return (
				<Form onSubmit={this.submitClickHandler} className="center_div">
					<FormGroup>
						<Container>
							<hr />
							<Row className="top-buffer">
								<h3 for="uploadResume">Add Resume</h3>
							</Row>
							<Row className="top-buffer">
								<Input type="file" className="form-control-file" id="uploadResume" name="uploadResume"></Input>
							</Row>
							<hr />
							<Row className="top-buffer">
							<h3>Personal Information</h3>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="firstName">First Name</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="firstName" placeholder="First Name"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="lastName">Last Name</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="lastName" placeholder="Last Name"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="middleName">Middle Name</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="middleName" placeholder="Middle Name"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="email">Email</Label>
								</Col>
								<Col>
									<Input type="email" className="form-control" name="email" placeholder="name@example.com"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="addressLine1">Address Line 1</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="addressLine1" placeholder="Street"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="addressLine2">Address Line 2</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="addressLine2" placeholder="Apt"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="city">City</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="city" placeholder="City"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="state">State</Label>
								</Col>
								<Col>
									<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
										<DropdownToggle caret color="primary">
											{this.state.locationState}
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem onClick={this.select}>FL</DropdownItem>
											<DropdownItem onClick={this.select}>CA</DropdownItem>
											<DropdownItem onClick={this.select}>NY</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="zipCode">Zip Code</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="zipCode" placeholder="12345"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="phone">Phone</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="phone" placeholder="Phone Number"></Input>
								</Col>
							</Row>
							<hr />
							<Row className="justify-content-center top-buffer">
								<Col>
									<Button type="submit" className="btn btn-primary" color="primary">Submit</Button>
								</Col>
							</Row>
						</Container>
					</FormGroup>
				</Form>
		);
	}
};
export default ApplyForm;